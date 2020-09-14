import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

class CantidadPokemon extends React.Component {

    render() {
        return (
            <div>
               <React.Fragment>
                 Unidades : { this.props.game_shop.pokemon}  
               </React.Fragment>
                
            </div>
        );
    
    }
  };

CantidadPokemon.propTypes = {
    
};

// Accedo a las propiedades 
const mapStateToProps  = (state) =>  {
   return {
       game_shop : state.game_shop
   }
}


export default connect(mapStateToProps)(CantidadPokemon);