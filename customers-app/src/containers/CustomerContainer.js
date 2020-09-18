import React, { Component } from 'react';
import  { connect  } from 'react-redux'
import AppFrame from '../components/AppFrame';
import CustomersList from '../components/CustomersList'
import CustomersActions from '../components/CustomersActions';
import {withRouter} from 'react-router-dom'
import fetchCustomers from '../actions/fetchCustomers';
import {PropTypes} from 'prop-types'



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
                    this.renderBody(this.props.customers)
                }>

                </AppFrame>
            </div>
        );
    }
}

CustomerContainer.propTypes = {
   fetchCustomers : PropTypes.func.isRequired,
   customers : PropTypes.array.isRequired,
};

// Propiedades por default
CustomerContainer.defaultProps = {
    customers : [
        { 
           "dni": 31463600,
           "name":"juan perez",
           "age" :23
        },{
            "dni": 10616307,
            "name":"david garcia",
            "age": 35
        }
    ]
}

export default withRouter(connect(null , { fetchCustomers} )(CustomerContainer));