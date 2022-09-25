import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { dialogOpenSubject$ } from '../CustomDialog/CustomDialog';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CustomDialog } from '../CustomDialog';
import { FavoriteTable } from './FavoriteTable';

export interface NavBarInterface { }

const NavBar: React.FC<NavBarInterface> = () => {

    const handleClick = () => {
        dialogOpenSubject$.setSubject = true;
    };

    return (<>
            
            <CustomDialog>
                <FavoriteTable></FavoriteTable>
            </CustomDialog>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                      Gentleman Programming React Test
                    </Typography>
                </Toolbar>
                <IconButton color="secondary" aria-label="favorites" component="label" onClick={handleClick}>
            <FavoriteIcon />
          </IconButton>
            </AppBar>
        
    </>)
}

export default NavBar;