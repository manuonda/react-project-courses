import React from 'react';
import './App.scss'
import {createUseStyles}  from 'react-jss'


const useStyles = createUseStyles({
  app:{
      backgroundColor:'#f4f6f4',
      color: '#414141',
      padding: '0.5rem 1rem',
      alignItems: 'center',
      flexDirection: 'column'
  },
  header:{
      margin: '0 0 0.5rem 0',
      textAlign: 'center'

  },
  paragraph:{
      margin: '0 0 0.5rem 0',
      textAlign: 'center',
      fontFamily: 'sans-serif'
  },
  button:{
      backgroundColor: '#EBBF1C',
      border: 'none',
      padding: '0.25rem 1rem',
      textTransform: 'uppercase',
      color: '#575e58',
      fontSize: '0.75rem',
      fontFamily:'monospace',
      flexDirection: 'row',
      borderRadius: '0.375rem',
      textAlign: 'center'
  }

  });

const App = () => {
    const classes =  useStyles();
    return (
        <div className={classes.app}>
            <h1 className={classes.header}>
              Header
            </h1>
            <p className={classes.paragraph}>
                Really serious
            </p>
            <button className={classes.button}>
                Useful button(nope)
            </button>
        </div>
    );
};

export default App;