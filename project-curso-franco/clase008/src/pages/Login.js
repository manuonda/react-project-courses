
import {useReducer} from 'react'
import {Helmet} from 'react-helmet'
import { useForm} from 'react-hook-form'
import { userReducer, initialState } from '../reducers/users'
import { SET_USER } from '../constants/index'
import Seo from '../components/Seo'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
const Login = () => {

    const { handleSubmit, register, errors } = useForm();
    const [state, dispatch] = useReducer(userReducer, initialState)
    
    const onSubmit = (e) => {
      e.preventDefault()
      const { username, password } = e.target;
      console.log(username,password);
     dispatch({ type: SET_USER, payload: {username, password}})
    }

    const classes = useStyles();

    return (
        <>

        <Seo title="Login" description="El login del sitio"/>
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
    )
}

export default Login
