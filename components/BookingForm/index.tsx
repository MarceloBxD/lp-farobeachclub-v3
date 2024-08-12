import styles from "./styles.module.scss";

import React from "react";
import { animated } from "react-spring";
import { toast } from "react-toastify";
import axios from "axios";

import CloseIcon from "@/assets/icons/CloseIcon";
import Form from "../Form";
import { WppButtonProps } from "../WppContact";
import { Subtitle } from "../Texts";
import { bookingSchema } from "../../data/yup/bookingschema";
import { useApp } from "@/context/AppContext";
import { BookingProps } from "@/sections/Booking";
import { hasFieldsEmpty } from "@/utils/hasFieldsEmpty";
import DataLayer from "@/utils/DataLayer";

/**
 * This component is user to send a booking form to Hubspot CRM
 * @param formId - The form id from Hubspot inside ENV file
 * @param portalId - The portal id from Hubspot inside ENV file
 * @param props
 * @param phone - The phone number for contact
 *
 * @author MarceloBxD
 */
interface BookingFormProps
  extends React.HTMLAttributes<HTMLDivElement>,
    BookingProps,
    WppButtonProps {
  formAnimation: any;
}

const BookingForm: React.FC<BookingFormProps> = ({
  formId,
  portalId,
  phone,
  formAnimation,
  ...props
}) => {
  const [btnLoading, setBtnLoading] = React.useState(false);
  
  const { setBookingActive } = useApp();
  
    const [form, setForm] = React.useState({
    firstname: "",
    email: "",
    phone: "",
    tipo: "",
    date: "",
    informacoes_adicionais__opcional_: "",
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBtnLoading(true);

    let hasSomeFieldEmpty = hasFieldsEmpty(form);

    if (hasSomeFieldEmpty) {
      setBtnLoading(false);
      toast.warn("Preencha todos os campos obrigatórios!");
      return;
    }

    try {
      const [day, month, year] = form.date.split("/");
      const formattedDate = `${year}-${month}-${day}`;
      const isFormValid = await bookingSchema.validate({
        ...form,
        date: formattedDate,
      });

      if (new Date(formattedDate) < new Date()) {
        toast.warn("Data inválida");
        setBtnLoading(false);
        return;
      }

      if (!isFormValid) {
        throw new Error("Formulário inválido");
      }

      let response = await axios.post(
        `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
        {
          fields: Object.entries({
            ...form,
            date: formattedDate,
          }).map(([name, value]) => ({
            name,
            value,
          })),
        }
      );

      if (!response) {
        toast.warn("Erro ao enviar formulário");
        return;
      }

      toast.success(
        "Obrigado pelas informações, em breve um de nossos especialistas entrará em contato."
      );

      DataLayer.clickEvent({
        element: "enviar_orcamento",
        elementCategory: "botao",
        pageSection: "booking",
        pageSubsection: "form",
      });

      setForm({
        firstname: "",
        email: "",
        phone: "",
        tipo: "",
        date: "",
        informacoes_adicionais__opcional_: "",
      });
      setBookingActive(false);
    } catch (err) {
      toast.error("Erro ao enviar formulário");
    }
    setBtnLoading(false);
  };

  return (
    <animated.div
      {...props}
      className={styles.container}
      style={{
        ...formAnimation,
        ...(props.style as any),
      }}
    >
      <div className={styles.headerBookingForm}>
        <Subtitle style={{ fontWeight: "bold" }}>Orçamento via email</Subtitle>
        <CloseIcon
          onClick={() => setBookingActive(false)}
          className={styles.closeIcon}
        />
      </div>
      <Form form={form} setForm={setForm} onSubmit={onSubmit} phone={phone} buttonLoading={btnLoading} setButtonLoading={setBtnLoading} />
    </animated.div>
  );
};

export default BookingForm;
