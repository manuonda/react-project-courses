import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";

class Navbar extends Component {
  static contextType = ThemeContext;
  render() {

    return (
      <ThemeContext.Consumer>
        {(context) => {
            const { isLigthTheme, light, dark } = context;
            const theme = isLigthTheme ? light : dark;
            
          <div>
            <div>
              <nav style={{ background: theme.ui, color: theme.syntax }}>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </nav>
            </div>
          </div>;
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Navbar;
