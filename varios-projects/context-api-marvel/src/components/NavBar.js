import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, 
         Toolbar, 
         Typography, 
         Button } 
from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(1),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
  const NavBar = () => {
    const classes = useStyles();
    let history = useHistory();
  
     const handleLogin = () => {
       history.push("/login")
    } 

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              API MARVEL
            </Typography>
            <Button color="inherit" onClick={handleLogin}>Acceso</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  export default NavBar;