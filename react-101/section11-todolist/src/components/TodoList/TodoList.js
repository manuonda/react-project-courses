import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

import style from 'styled-components/macro'
import Filter from './Filter'
import Input from './Input'
import List from './List'

const Wrapper = style.div`
  background-color: #fff;
  border-radius: 0.375rem;
  box-shadow: 0 5px 10px 0 rgba(0,0,0,0.15);

`

class TodoList extends Component {
    state = {}


    handleTaskAdd = ( task) => {
        const newItem = {
            id: uuidv4(),
            label: task,
            completed: true
        }
        let items = [newItem, ...this.state.items];
        this.setState({items: items});
    }
    render() {
<<<<<<< HEAD
        const { mode ,items } = this.state;
        let filteredItems = [];
        switch(mode) {
            case 'completed' : 
              filteredItems = items.filter(item => item.completed === true);
            break;
            case 'active' : 
            filteredItems = items.filter(item => item.completed === false);
            ;break;
            default:
                filteredItems = items
        }

        return (
            <div>
             <Wrapper>
                 <Filter mode={mode} onModeChange={this.handleModeChange}/>
                 <Input onTaskAdd = {this.handleTaskAdd}></Input>
                 <List  
                     items={filteredItems} 
                     onComplete = {this.handleComplete}
                     onDelete   = {this.handleDelete}
                     ></List>
=======
        return (
            <div>
             <Wrapper>
                 <Filter/>
                 <Input></Input>
                 <List></List>
>>>>>>> 65b70def08fb579730b0e5ba87ffc2c8dcc84bf4
             </Wrapper>             
            </div>
        )
    }
}

export default TodoList
