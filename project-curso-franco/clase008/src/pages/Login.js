import { useReducer, useContext } from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Container,
  TextField,
} from "@material-ui/core";

import { userReducer, initialState } from "../reducers/users";
import { SET_USER } from "../constants/index";
import Seo from "../components/Seo";
import { UsuarioContext } from '../reducers/userContext';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
const Login = ({history}) => {
  const { handleSubmit, register, errors } = useForm();
  const [state, dispatch] = useReducer(userReducer, initialState);
  const { authenticate, auth } = useContext(UsuarioContext);

  console.log('autehnitnecat',authenticate)
  console.log('auth:',auth);

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = e.target.name;
    console.log(username, password);
    dispatch({ type: SET_USER, payload: { username, password } });
    const serverResponse = "myToken";
    authenticate(serverResponse);
    history.push("/dashboard");
  };

  const classes = useStyles();

  return (
    <>
      <Seo title="Login" description="El login del sitio" />
      <form onSubmit={onSubmit}>
        <Container>
          <Card className={classes.root}>
            <CardContent>
              <div>
                <TextField
                  error
                  id="standard-error"
                  label="Username"
                  name="username"
                  defaultValue="Hello World"
                  helperText="Incorrect entry."
                />
              </div>
              <div>
                <TextField
                  error
                  name="password"
                  id="standard-error-helper-text"
                  label="Password"
                  defaultValue="Hello World"
                  helperText="Incorrect entry."
                />
              </div>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" type="submit">
                Enviar
              </Button>
            </CardActions>
          </Card>
        </Container>
      </form>
    </>
  );
};

export default Login;
