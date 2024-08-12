import * as yup from "yup";

export const bookingSchema = yup.object().shape({
  firstname: yup.string().required(),
  email: yup.string().email("Este não é um email válido!").required(),
  phone: yup
    .string()
    .min(13, "O número deve ter 13 dígitos")
    .required("Campo obigatório"),
  tipo: yup.string().required("Campo obrigatório"),
  date: yup.date().required("Campo obrigatório"),
  informacoes_adicionais__opcional_: yup.string(),
});
