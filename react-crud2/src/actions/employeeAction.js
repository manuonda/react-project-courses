import { GET_EMPLOYEE, ADD_EMPLOYEE, DELETE_EMPLOYEE } from '../constants'

export const getEmployees = () => {
    return {
     type: GET_EMPLOYEE
    }
}

export const addEmployee = ( employee ) =>{
    return {
      type : ADD_EMPLOYEE,
      payload : employee
    }
}

export const deleteEmployee = ( employee ) => {
    return {
        type: DELETE_EMPLOYEE,
        payload : employee
    }
}