import React from "react"
import { useApp } from "@/context/AppContext"
import Input from "../Input"
import styles from "./styles.module.scss"
import { montserrat } from "@/utils/fonts"
import { options } from "@/data/booking"
import Button from "../Button"
import { WppButton, WppButtonProps } from "../WppContact"
import DataLayer from "@/utils/DataLayer"

interface FormProps extends WppButtonProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  sending?: boolean
  buttonLoading?: boolean
  setButtonLoading?: React.Dispatch<React.SetStateAction<boolean>>
  form: {
    firstname: string
    email: string
    phone: string
    tipo: string
    date: string
    informacoes_adicionais__opcional_: string
  }
  setForm: React.Dispatch<
    React.SetStateAction<{
      firstname: string
      email: string
      phone: string
      tipo: string
      date: string
      informacoes_adicionais__opcional_: string
    }>
  >
}

const Form = ({
  onSubmit,
  phone,
  sending,
  buttonLoading,
  setButtonLoading,
  form,
  setForm,
}: FormProps) => {
  const [buttonHovered, setButtonHovered] = React.useState(false)

  return (
    <div className={styles.content}>
      <form id="bookingform" onSubmit={onSubmit} className={styles.form}>
        <div style={{ marginTop: "25px" }}>
          <Input
            label="Nome e Sobrenome*"
            name="firstname"
            type="text"
            value={form.firstname}
            onChange={(e) => {
              setForm({ ...form, firstname: e.target.value })
              DataLayer.changeEvent({
                path: "booking",
                element: "firstname",
                elementCategory: "campo",
                pageSection: "booking",
                pageSubsection: "form",
              })
            }}
          />

          <Input
            label="Email*"
            name="email"
            type="text"
            onChange={(e) => {
              setForm({ ...form, email: e.target.value })
              DataLayer.changeEvent({
                path: "booking",
                element: "email",
                elementCategory: "campo",
                pageSection: "booking",
                pageSubsection: "form",
              })
            }}
            value={form.email}
          />

          <Input
            label="Telefone*"
            name="phone"
            mask="99 99999 9999"
            type="text"
            onChange={(e) => {
              setForm({ ...form, phone: e.target.value })
              DataLayer.changeEvent({
                path: "booking",
                element: "phone",
                elementCategory: "campo",
                pageSection: "booking",
                pageSubsection: "form",
              })
            }}
            value={form.phone}
          />

          <select
            onChange={(e) => {
              setForm({ ...form, tipo: e.target.value })
              DataLayer.changeEvent({
                path: "booking",
                element: "tipo",
                elementCategory: "campo",
                pageSection: "booking",
                pageSubsection: "form",
              })
            }}
            className={styles.select + " " + montserrat.className}
            name="event"
            defaultValue={"0"}
          >
            <option disabled value={"0"}>
              Marque seu tipo de evento*
            </option>
            {options.map((item, index) => (
              <option value={item.name} key={index}>
                {item.name}
              </option>
            ))}
          </select>
          <Input
            label="Data do evento"
            name="date"
            mask="99/99/9999"
            type="text"
            onChange={(e) => {
              setForm({ ...form, date: e.target.value })
              DataLayer.changeEvent({
                path: "booking",
                element: "date",
                elementCategory: "campo",
                pageSection: "booking",
                pageSubsection: "form",
              })
            }}
            value={form.date}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              outline: "none",
            }}
          >
            <label className={montserrat.className}>
              Informações adicionais (opcional)
            </label>
            <textarea
              onChange={(e) =>{
                setForm({
                  ...form,
                  informacoes_adicionais__opcional_: e.target.value,
                })
                DataLayer.changeEvent({
                  path: "booking",
                  element: "informacoes_adicionais__opcional_",
                  elementCategory: "campo",
                  pageSection: "booking",
                  pageSubsection: "form",
                })
              }}
              className={styles.textarea}
            ></textarea>
          </div>
        </div>

        <div style={{ paddingBottom: "15px" }}>
          <Button
            id="leadform"
            load={
              buttonLoading
                ? {
                    variant: "bubbles",
                    color: buttonHovered ? "#000" : "#fff",
                    size: "120px",
                  }
                : undefined
            }
            onMouseEnter={() => setButtonHovered(true)}
            onMouseLeave={() => setButtonHovered(false)}
            disabled={sending}
            onClick={() => {
              if (setButtonLoading) setButtonLoading(true)
            }}
            type="submit"
            style={{
              width: "100%",
            }}
          >
            <p>Enviar</p>
          </Button>
          <WppButton phone={phone} />
        </div>
      </form>
    </div>
  )
}

export default Form
