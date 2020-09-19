 import { GET_EMPLOYEE , ADD_EMPLOYEE } from '../constants/constants'

export const getEmployees =  () => {
    return {
        type: GET_EMPLOYEE
    }
}

export const addEmploye = (employee) => {
     return {
         type: ADD_EMPLOYEE,
         payload: employee
     }
}