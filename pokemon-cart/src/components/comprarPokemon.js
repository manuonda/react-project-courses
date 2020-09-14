import React, { Component } from 'react';
import { connect } from  'react-redux'
import { buy_pokemon_action, return_pokemon_action } from '../actions/gameShopAction'

class ComprarPokemon extends Component {
    render() {
        return (
            <div>
                <button onClick={ () => {
                    this.props.buy_pokemon_action(1);
                }}> Comprar Pokemon</button>
                <button
                 onClick={() => {
                   this.props.return_pokemon_action(1)  
                 }}
                > Regresar Pokemon </button>
            </div>
        );
    }
}



const mapDispatchToProps = {
   buy_pokemon_action,
   return_pokemon_action
}
// props, y los dispathchToProps
export default  connect( null ,mapDispatchToProps )(ComprarPokemon);