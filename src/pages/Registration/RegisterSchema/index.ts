import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
  email: yup.string().required("O email e obrigatorio").email("Email invalido"),
  name: yup.string().required("Este campo e obrigatorio"),
  password: yup
    .string()
    .required("A senha e obrigatoria")
    .min(8, "A senha precisa conter pelo menos 8 caracteres")
    .matches(/(?=.*?[A-Z])/, "E necessario uma letra maiuscula.")
    .matches(/(?=.*?[a-z])/, "E necessario uma letra minuscula")
    .matches(/(?=.*?[0-9])/, "E necessario pelo menos um dígito")
    .matches(/(?=.*?[#?!@$%^&*-])/, "E necessario um caractere especial"),
});
