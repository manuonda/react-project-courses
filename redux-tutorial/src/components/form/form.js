import React , {ref , useRef} from 'react';
import PropTypes from 'prop-types';
import palabra from '../palabra/palabra';
import { palabraUpdate } from '../../actions/palabraUpdate'
import { connect } from 'react-redux'

const Form = ({ updateWord }) => {

     
    const palabraRef =  useRef(null)
        
    return (
        <div>
            <input type="text" ref="{palabraRef}"></input>
            <button onClick={() => {
                updateWord(palabraRef.current.value)
            }}>Guardar en Store</button>
        </div>
    );
};


Form.propTypes = {
    
};

export default connect(null, { palabraUpdate })(Form);