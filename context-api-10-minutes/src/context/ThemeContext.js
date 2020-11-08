import React, {createContext, Component} from 'react'

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    
    state = { 
        isLightTheme : true,
        ligth : { sintax : "#555", ui: '#ddd', bg: "#eee"},
        dark: { syntax :'#ddd', ui:'#333', bg: '#555'} 
     }

     toggleTheme =() => {
         console.log('toggleTheme')
         this.setState({isLightTheme: !this.state.isLightTheme})
         console.log(this.state);
     }
    render() { 
        return (
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
              {this.props.children}   
            </ThemeContext.Provider>
        );
    }
}
 
export default ThemeContextProvider;