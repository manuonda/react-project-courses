export const AppReducer = (state, action) => {
    
    switch( action.type){
        case 'ADD_ARTICLE' :
            return [...state.articules, action.payload]
        case 'DELETE_ARTICLE':
            return {state: state.filter(x => x.id !== action.payload)}
        
            
        default:
            return state
        
    }
}