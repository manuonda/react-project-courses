import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

export const schema = yup.object().shape({
   username: yup.string().required("Usuario Requerido"),
   password: yup.string().required("Password Requerido")
   .min(6) 
});
