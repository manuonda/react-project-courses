import React, { Component } from 'react';
import Counter from './Counter'

const App = () => <Counter></Counter>

// class App extends Component {
//     state = {
//         count:0
//     }

//     handleIncrease = ()  => {
//         this.setState({
//             count: this.state.count+1
//         })
//     }

//     handleDecrease = ()  => {
//         this.setState({
//             count: this.state.count - 1
//         })
//     }
//     render() {
//         return (
//             <div className="App">
//                 <h1>Current count : {this.state.count}</h1>
//             <button onClick={this.handleIncrease}>Increase</button>
//             <button onClick={this.handleDecrease}>Decrease</button>
//             </div>
//         );
//     }
// }

export default App;