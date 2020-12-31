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
    state = {
        mode: 'all',
        items:[
            {
             id:1,
             label: 'Make the <List/> Component',
             completed: false
            },{
                id:2,
                label: 'Finish the Todo List',
                completed: false
            },{
                id: 3,
                label: 'Drink a cup of tea',
                completed: true
            }
        ]
    }


    handleModeChange = mode => () => {
        this.setState({ mode })
    }

    handleComplete = id => () => {
       const newItems = [...this.state.items];
       const filteredItem = newItems.filter(item => item.id === id)[0];
       filteredItem.completed = !filteredItem.completed;
       this.setState({ items : newItems})
    }  

    handleDelete = id => () => {
      const filteredItems = this.state.items.filter( item => item.id !== id);
      this.setState({
          items:filteredItems
      });
    }

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
             </Wrapper>             
            </div>
        )
    }
}

export default TodoList
