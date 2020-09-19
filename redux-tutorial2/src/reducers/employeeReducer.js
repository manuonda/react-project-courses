import { GET_EMPLOYEE , ADD_EMPLOYEE , DELETE_EMPLOYEE } from "../constants/constants"


const initialState = {
  employees  :  [
      { id : 1,  employeeName: "Employee 1 ", employeeDepartament : "NET TEAM"},
      { id : 2,  employeeName: "Employee 2 ", employeeDepartament : "NET TEAM"},
      { id : 3,  employeeName: "Employee 3 ", employeeDepartament : "NET TEAM"}
  ]
}

const reducer =  ( state = initialState , action)  => {
    switch(action.type) {
        case GET_EMPLOYEE:
            return {
                ...state
            }
        case ADD_EMPLOYEE:
            return {
                ...state,
                employees: state.employees.concat(action.payload)
            }
        case DELETE_EMPLOYEE: 
          return {
              ...state,
              employees :  state.employees.filter( item => item.id !== action.payload.employee.id)
          }
        default: return state;
    }
}
export default reducer;