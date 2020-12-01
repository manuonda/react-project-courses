import React, { Component } from "react";
import Square from "./Square";
import "./index.css";

const calculateWinner = squares => {
  const lines = [
    // horizontal
    [0,1,2],
    [3,4,5],
    [6,7,8],
    // vertical 
    [0,3,6],
    [1,4,7],
    [2,5,8],
    // diagonal 
    [0,4,8],
    [2,4,6],
  ];
  console.log(lines.length);
  for( let i = 0 ; i < lines.length ; i ++) {
    // ingresa for line , assigned the three values 
    const[a,b,c] = lines[i]; // example 0,1,2,
    console.log(a,b,c);
    if ( squares[a] && squares[a] === squares[b] &&
         squares[a] === squares[c]) {
           return squares[a];
    }
  }
  return '';
}

class Board extends Component {
    state = {
        squares:  ['','','','','',''],
        xIsNext: true
    }

    handleClick = (number) => () => {
      const newSquares = [...this.state.squares] //this.state.squares.slice()
      newSquares[number] = this.state.xIsNext ? 'X' : '0';
      this.setState({ squares : newSquares,
                      xIsNext: !this.state.xIsNext
                    }); 
      console.log()
    }

    handleReset = () => {
      this.setState({
        squares:  ['','','','','',''],
        xIsNext: true
      })
    }
  render() {
    const { squares , xIsNext} = this.state;
    const winner = calculateWinner(squares);
    let status = "";
    console.log(squares);
    console.log(winner);
    if ( winner ) {
        status = `Winner : ${winner}`;
    } else {
        status = `Next Step : ${xIsNext?'X':'O'}` 
    }
    return (
      <div className="Board">
        <h1>{status}</h1>
        <div className="Container">
          <Square value={this.state.squares[0]} onClick={this.handleClick(0)}></Square>
          <Square value={this.state.squares[1]} onClick={this.handleClick(1)}></Square>
          <Square value={this.state.squares[2]} onClick={this.handleClick(2)}></Square>
        </div> 
        <div className="Container"> 
          <Square value={this.state.squares[3]} onClick={this.handleClick(3)}></Square>
          <Square value={this.state.squares[4]} onClick={this.handleClick(4)}></Square>
          <Square value={this.state.squares[5]} onClick={this.handleClick(5)}></Square>
        </div> 
        <div className="Container"> 
          <Square value={this.state.squares[6]} onClick={this.handleClick(6)}></Square>
          <Square value={this.state.squares[7]} onClick={this.handleClick(7)}></Square>
          <Square value={this.state.squares[8]} onClick={this.handleClick(8)}></Square>
        </div>
        <button className="Reset" onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Board;
