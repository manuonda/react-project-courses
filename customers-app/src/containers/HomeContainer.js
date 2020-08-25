import React, { Component } from 'react';
import { Link , withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame'
import CustomersActions from '../components/CustomersActions'

class HomeContainer extends Component {
    
    handleOnClick = () => {
      console.log("handle on click ")
      this.props.history.push('/customers')
    }

    render() {
       console.log('home coantiner ')
        return (
            <div>
               <AppFrame 
                 header="Home"
                 body={
                     <div>
                         Esta es la pantalla Inicial 
                         <CustomersActions>
                             <button onClick={this.handleOnClick}>Listado de Customers</button>
                         </CustomersActions>
                     </div>                               
                 }></AppFrame>
            </div>
        );
    }
}

HomeContainer.propTypes = {

};

export default withRouter(HomeContainer);