import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes  from  'prop-types'
import { getEmployees } from '../actions/employeeAction'
import ItemEmployee from '../components/ItemEmployee'

class ListEmployee extends Component {
 
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super (props)
    }

    componentDidMount(){
        console.log('didmount')
        console.log(this.props)
        this.props.getEmployees()
        console.log(this.props.getEmployees())
    }

    render() {
        return (
            <div>
               { this.props.employees && this.props.employees.map((data, index) => {
                  return (
                      <div>
                      <tr key={(index + 1)}>
                          <ItemEmployee data={data}/>
                      </tr>  
                      </div>
                  )  
               }) 
                 
               
               } 
                
            </div>
        )
    }
}
ListEmployee.propTypes = {
  getEmployees: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
   employees:  state.employees 
})

// const mapDispatchToProps = {
//     getEmployees: getEmployees
// }
export default connect(mapStateToProps ,{ getEmployees })(ListEmployee);
