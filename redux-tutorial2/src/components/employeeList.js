import React, { Component } from "react";
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import getEmployees from '../actions/employeeAction'

class EmployeeList extends Component {

  componentDidMount() {
    this.props.getEmployees();
  }

  render() {
    return <div></div>;
  }
}

EmployeeList.propTypes = {
  employees: PropTypes.array.isRequired,
  getEmployees: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return{
        employees: state.employees
    }
};

export default connect(mapStateToProps, { getEmployees })(EmployeeList);
