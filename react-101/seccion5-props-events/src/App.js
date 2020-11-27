import React from 'react';
import FunctionButton from './FunctionButton';
import ClassButton from './ClassButton'
class App extends React.Component{

    state = {
        times : 0
    }
    render(){
        return (
            <div>
                <FunctionButton text='Text here'></FunctionButton>
                <ClassButton text='ClassButton'></ClassButton>
            </div>
        );
        
    }
};

export default App;