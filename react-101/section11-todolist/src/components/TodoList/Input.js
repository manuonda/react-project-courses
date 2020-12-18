import React, {Component} from 'react'
import styled from 'styled-components/macro'

const Wrapper = styled.div`
border-bottom: 1px solid #e2e8f0;
display:flex;
`

const StyledInput = styled.input`

  width: 100%;
  padding: 1rem;
  border:0;

  &:focus{
    outline:0
  }
`

const Button = styled.button`
 border:0;
 border-left: 1px solid #e2e8f0;
 background-color: #e2e8f0;
 color : #fff;
 padding: 1rem 2rem;

 transition: all 0.25s ease-in-out;

 &:focus{
   outline:0 
 }

 &:hover{
   cursor: pointer;
   background-color: #9ae6b4
 }
`

class Input extends Component {
   state = {
      value: '',
      edit:false
   }

   handleChange = (e) => {
      // get the value of the input
      const inputValue = e.target.value;
      
      // set the state
      this.setState({
        value: inputValue
      })
      if ( inputValue === '') {
        this.setState({ edit:false})
      } else {
        this.setState({ edit: true})
      }

   }

   render() {
     return(
       <Wrapper>
         <StyledInput 
              type="text" 
              placeholder="Add Item"
              value={this.state.value}
              onChange={this.handleChange}
        /> 
        {this.state.edit && (
          <Button>Add</Button>
        )}
       </Wrapper>
     )
   }
}

export default Input
