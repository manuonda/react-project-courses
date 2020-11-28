import React from 'react';
import FunctionButton from './FunctionButton';
import ClassButton from './ClassButton'
import './App.css'

class App extends React.Component{

    state = {
        times : 0
    }
    handleClick = () => {
        this.setState({
            times : this.state.times +1
        })
    }
    render(){
        return (
            <div className="App">
                <FunctionButton 
                times={this.state.times}
                onButtonClick={this.handleClick}
                ></FunctionButton>
                <ClassButton text='ClassButton'
                 times={this.state.times}
                 onButtonClick={this.handleClick}
                ></ClassButton>
            </div>
        );
        
    }
};

export default App;