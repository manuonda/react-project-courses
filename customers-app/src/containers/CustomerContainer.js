import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import CustomersList from '../components/CustomersList'
import CustomersActions from '../components/CustomersActions';
import {withRouter} from 'react-router-dom'

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

};

export default withRouter(CustomerContainer);