import { GET_EMPLOYEE, ADD_EMPLOYEE } from "../constants";


const initialState = {
    employees : [
        { id : 1 , employeeName: 'david garcia'  , employeeDepartament : 'department  1' },
        { id : 2 , employeeName: 'andres garcia' , employeeDepartament : 'department  2' },
        { id : 3 , employeeName: ' raquel garcia', employeeDepartament : 'deparment   3' }
    ]
}


const  reducer =  ( state = initialState, action ) => {
  
     switch (action.type ) {
         case GET_EMPLOYEE : 
          console.log('state => ', state );
           return {
               ...state,
           }
         case ADD_EMPLOYEE :
             return {
                ...state,
                employees : state.employees.concat(action.payload)
             }
         default:  return state
     }
     
}

export default reducer ;