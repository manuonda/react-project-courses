import React from 'react';
import PropTypes from 'prop-types';

const CustomerEdit = ({ name, dni , age }) => {
    return (
        <div>
            <h2>Edicion de Cliente</h2>
            <h3>{name}/{dni}/{age}</h3>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni : PropTypes.string,
    age: PropTypes.number,

};

export default CustomerEdit;