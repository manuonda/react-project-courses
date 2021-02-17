import React , {useState} from 'react'
import { useContext } from 'react'
import {AuthContext } from '../context/authContext'
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, 
         Toolbar, 
         Typography, 
         Button , Menu,
        MenuItem} 
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

const NavBarPrivate = () => {
    const { auth, username , logout } = useContext(AuthContext)
    const [anchorEl, setAnchorEl] = useState(null);

    const classes = useStyles();
    const history = useHistory();

    const handleLogout = () => {
        history.push("/home");
    }

    const handleOpen = (event) => {
      setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
      setAnchorEl(null);
    }


    return (
        <>
         <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              API MARVEL
            </Typography>
            <Button color="inherit" onClick={handleLogout}>Salir</Button>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleOpen}>
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
          </Toolbar>
        </AppBar>
        </>
    )
}
export default NavBarPrivate;
