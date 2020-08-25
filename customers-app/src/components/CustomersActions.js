import React from "react";
import PropTypes from "prop-types";

const CustomersActions = ({ children }) => {
  return (
    <div>
      <div className="customers-action"></div>
      <div>{children}</div>
    </div>
  );
};

CustomersActions.propTypes = {
 
};

export default CustomersActions;
