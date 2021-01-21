import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Components
import { TextField, Button, Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// hook
import { usePost } from "../../customHooks/useHTTP";

// validation schema
//import { schema } from "./schema";

const schema = yup.object().shape({
  username: yup.string().required("Debe Ingresar Username"),
  password: yup.string().required("Debe Ingresar Password"),
});

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const Login = (props) => {
  const classes = useStyles();
  console.log(schema);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  //const [ post, data, fetching] =  usePost();

  const onSubmitForm = (data) => {
    console.log(data);
    //post("users",data);
  };
  return (
    <div>
      <Container maxWidth="sm">
        <Box display="flex" justifyContent="flex-start">
          <form
            className={classes.root}
            onSubmit={handleSubmit(onSubmitForm)}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                name="username"
                id="standard-multiline-flexible"
                label="UserName"
                rowsMax={4}
                inputRef={register}
                error={errors.username ? true : false}
                helperText={
                  errors.username?.message ? errors.username?.message : ""
                }
              />
            </div>

            <div>
            <TextField
                name="password"
                id="standard-multiline-flexible"
                label="Password"
                rowsMax={4}
                inputRef={register}
                error={errors.password ? true : false}
                helperText={
                  errors.password?.message ? errors.password?.message : ""
                }
              />
            </div>

            <Button color="primary" type="submit" variant="contained">
              Enviar
            </Button>
            <Button color="secondary" type="reset" variant="contained">
              Limpiar
            </Button>
          </form>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
