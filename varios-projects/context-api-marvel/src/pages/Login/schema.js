import * as yup from "yup";

export const schema = yup.object().shape({
    username: yup.string().required("El campo es obligatorio"),
    password : yup.string().required("El Campo es obligatorio")
});