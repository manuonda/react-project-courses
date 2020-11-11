import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

class Navbar extends Component {
  static contextType = ThemeContext;
  render() {

    return (
    <AuthContext.Consumer>{( authContext) => (
        <ThemeContext.Consumer>{(themeContext) => {
            const { isLigthTheme, light, dark } = themeContext;
            const theme = isLigthTheme ? light : dark;
            const { isAuthenticated , toggleAuth } = authContext;

          return (
            <div>
              <nav >
                <div onClick={() => toggleAuth}>
                   { isAuthenticated ? 'Logged in ':'Logged out'}      
                </div>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </nav>
            </div>
          ) 
        }}</ThemeContext.Consumer>
    )}</AuthContext.Consumer>
    );
  }
}

export default Navbar;
