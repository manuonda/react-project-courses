import React from 'react';

const styles= {
    app:{
        backgroundColor: '#512DA8',
        padding: '1rem',
        color :'#fff'
    },
    header:{
        fontFamily: 'monospace',
        margin:0,
        fontSize: '1.75rem'
    },
    paragraph:{
    },
    button:{
        
        border : '2px solid #fff',
        backgroundColor:'#03A9F4',
        color: '#fff',
        textTransform:'uppercase'
    }
}
const App = () => {
    return (
        <div style={styles.app}>
            <h1 style={styles.header}>
              Header
            </h1>
            <p 
             style={{
                fontFamily:'sans-serif',
                fontSize: '1rem'
               
             }}
            >
                Really serious
            </p>
            <button style={styles.button}>
                Useful button(nope)
            </button>
        </div>
    );
};

export default App;