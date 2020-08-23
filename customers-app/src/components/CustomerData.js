import React from 'react';
import PropTypes from 'prop-types';

const CustomerData = ({ name, dni, age}) => {
    return (
        <div>
            <div className="">
                <h2>Datos del Cliente</h2>
                <div><strong>Nombre<i>{name}</i></strong></div>
                <div><strong>Dni<i>{dni}</i></strong> </div>
                <div><strong>Age<i>{age}</i></strong> </div>
            </div>
        </div>
    );
};

CustomerData.propTypes = {
    name: PropTypes.string.isRequired,
    dni : PropTypes.string.isRequired,
    age : PropTypes.number,
};

export default CustomerData;