import React,{useCallback, useState} from "react";
import Content from "../../components/Content";
import Menu from "../../components/Menu";
import { Grid } from "@material-ui/core";
const Home = () => {
  
    const[menuItem, setMenuItem] = useState("");
    
    const selectedMenu = useCallback((value) => {
       console.log("en home js usecallbacke ", value);
       setMenuItem(value)
    },[setMenuItem]);

    
    console.log(menuItem);
    return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Menu  selectedMenu={selectedMenu}></Menu>
        </Grid>
        <Grid item xs={9}>
          <Content menuItem={menuItem}></Content>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
