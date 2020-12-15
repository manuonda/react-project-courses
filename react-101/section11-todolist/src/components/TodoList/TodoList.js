import React, { Component } from 'react'
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


    render() {
        return (
            <div>
             <Wrapper>
                 <Filter/>
                 <Input></Input>
                 <List></List>
             </Wrapper>             
            </div>
        )
    }
}

export default TodoList
