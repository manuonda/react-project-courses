import * as yup from "yup";

export const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.number().required()
  });
