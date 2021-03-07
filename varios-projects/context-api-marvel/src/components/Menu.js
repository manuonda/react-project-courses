import React from "react";
import { Paper, MenuList, MenuItem, List, Link } from "@material-ui/core";

const items = [
  { title: "Caracters", value: "characters" },
  { title: "Comics", value: "comics" },
  { title: "Events", value: "events" },
  { title: "Series", value: "series" },
];

const Menu = ({ menuItem , selectedMenu }) => {
  
  const handleSelected = (seleccionado) => {
    console.log("seleccionado en menu  ", seleccionado); 
    selectedMenu(seleccionado);
  }

  return (
    <>
      <Paper>
        <List component="nav" arial-label="">
          <MenuList>
            {items.map((item) => (
              <>
                <MenuItem
                  key={item.value}
                  onClick={() => handleSelected(`${item.value}`)}
                  color="inherit"
                >
                  {item.title}
                </MenuItem>
              </>
            ))}
          </MenuList>
        </List>
      </Paper>
    </>
  );
};

export default Menu;
