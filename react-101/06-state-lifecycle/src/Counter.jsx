import React from 'react'
import Header from './Header'
import Button from './Button'

class Counter extends React.Component {
    state= {
        count:0 
    }

    handleIncrease = () => {
     this.setState({
         count: this.state.count + 1 
     })
    }
    handleDecrease = () => {
        this.setState({
            count: this.state.count - 1 
        })
    }

    render(){
        return (
            <div>
               <Header count={this.state.count}></Header> 
               <Button onSomethingHappend={this.handleIncrease}><h1>Increase</h1></Button>
               <Button onSomethingHappend={this.handleDecrease}>Decrease</Button>
            </div>
        );
    }
};

export default Counter;