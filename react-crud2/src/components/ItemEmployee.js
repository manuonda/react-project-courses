import React from 'react';
import PropTypes from 'prop-types';

const ItemEmployee = ({ id , employeeName, employeeDepartment }) => {
    return (
        <div>
            <td>{ id }</td>
            <td> {employeeName}</td>
            <td> {employeeDepartment}</td>
        </div>
    );
};

ItemEmployee.propTypes = {
    employeeName: PropTypes.string.isRequired,
    employeeDepartment: PropTypes.string.isRequired,
};

export default ItemEmployee;