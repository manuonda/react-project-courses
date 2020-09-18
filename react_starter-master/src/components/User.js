import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name, location , email, picture }) => {
    return (
        <div>
         <div>
          <img src={picture.medium} alt={name.first}></img>    
         </div> 
         <div><strong>Name: </strong>{name.first}</div>  
         <div><strong>Country: </strong>{ location.country }</div>
    <div><strong>Email: </strong>{email}</div>
        </div>
    );
};

User.propTypes = {
    
};

export default User;