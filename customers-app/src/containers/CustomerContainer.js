import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import CustomersList from '../components/CustomersList'
import CustomersActions from '../components/CustomersActions';

const customers = []
class CustomerContainer extends Component {
    
    renderBody  = customers => {
        <CustomersList customers={customers}  urlPath={''}/>
        <CustomersActions>
            <button></button>
        </CustomersActions>
    }
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

export default CustomerContainer;