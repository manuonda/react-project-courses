export const reducer = (state, action) => {
    switch( action.type) {
      case "ADD_TO_COUNTER":{
        return {
          ...state,
          edad: state.counter  + action.value 
        }
      }
      default:
        return state
    }
}
