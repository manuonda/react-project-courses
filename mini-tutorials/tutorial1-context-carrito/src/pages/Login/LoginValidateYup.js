import * as Yup from 'yup';

export const LoginValidateSchema = Yup.object().shape({
    username: Yup.string().min(6, 'Minimo valor 6').required('Requerido'),
    password: Yup.string().min(6, 'Minimo valor 6').required('Requerido')
});