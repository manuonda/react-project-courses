import React, { Component } from 'react';
import  { connect  } from 'react-redux'
import AppFrame from '../components/AppFrame';
import CustomersList from '../components/CustomersList'
import CustomersActions from '../components/CustomersActions';
import {withRouter} from 'react-router-dom'
import fetchCustomers from '../actions/fetchCustomers';


const customers = [
    { 
       "dni":"31463600",
       "name":"juan perez",
       "age" :23
    },{
        "dni":"32489789",
        "name":"david garcia",
        "age": 35
    }
]
class CustomerContainer extends Component {
   
    componentDidMount () {
        this.props.fetchCustomers()
    }

   handleAddNew = () => {
       this.props.history.push('/customers/new')
   }

    renderBody  = customers => (
        <div>
        <CustomersList 
           customers={customers}  
           urlPath={'customers/'}>
        </CustomersList>       
        <CustomersActions>
            <button onClick={this.handleAddNew}>New Cliente</button>
        </CustomersActions>
        </div>
    )
    render() {
        return (
            <div>
                <AppFrame
                header={'Listado de Clientes'}
                body={
                    this.renderBody(customers)
                }>

                </AppFrame>
            </div>
        );
    }
}

CustomerContainer.propTypes = {
   fetchCustomers : PropTypes.func.isRequired,
};
const mapDispatchToProps =  () => ({
    fetchCustomers : () => dispatch(fetchCustomers())
})

export default withRouter(connect(null , mapDispatchToProps)(CustomerContainer);