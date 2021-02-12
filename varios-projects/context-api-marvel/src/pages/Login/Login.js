import React, { useState, useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Box, Grid, Paper, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { AuthContext } from "../../context/authContext";
import { schema } from "./schema";

import { USERNAME_LOGIN, USERNAME_PASSWORD } from "../../constants";

const initialState = {
  username: "",
  password: "",
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  grid: {
    textAlign: "center",
    flexDirection: "center",
  },
}));
const Login = () => {
  const [user, setUser] = useState(initialState);
  const [errorLogin, setErrorLogin] = useState(false);
  const history = useHistory();
  const { auth, authenticate } = useContext(AuthContext);
  const classes = useStyles();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = (data) => {
    const { username, password } = data;
    console.log(`Usuario ${username} , ${password}`);
    console.log(`${USERNAME_PASSWORD} , ${USERNAME_PASSWORD}`);
    
    if (username === USERNAME_LOGIN && password === USERNAME_PASSWORD) {
       authenticate(username, password);
       history.push("/dashboard");
    } else {
      setErrorLogin(true);
    }
  };

  const handleLimpiar = () => {
    setUser(initialState);
    setErrorLogin(false);
  };

  const handleUser = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <form onSubmit={handleSubmit(handleLogin)}>
              <div>
                <TextField
                  onChange={handleUser}
                  error={errors.username ? true : false}
                  label="Usuario"
                  name="username"
                  value={user.username}
                  inputRef={register}
                  helperText={
                    errors.username?.message ? errors.username?.message : ""
                  }
                />
              </div>
              <div>
                <TextField
                  onChange={handleUser}
                  error={errors.password?.message ? true : false}
                  id="standard-error-helper-text"
                  label="Password"
                  type="password"
                  name="password"
                  value={user.password}
                  inputRef={register}
                  helperText={
                    errors.password?.message ? errors.password?.message : ""
                  }
                />
              </div>
             
             { errorLogin ? <Box color="error.main">Usuario o Password Incorrecto</Box>
             : ""
               }
            <Grid container justify="center" display="flex" alignItems="center">
              <Button type="submit" variant="contained" color="primary">
                Enviar
              </Button>

              <Button variant="contained" onClick={handleLimpiar}>
                Limpiar
              </Button>
            </Grid>
            </form>

          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
export default Login;
