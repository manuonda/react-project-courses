export const AppReducer = (state, action) => {
    console.log(action);
    console.log(state);
    switch( action.type){
        case 'CREATE_ARTICLE' :
            return { articles :  
                [...state.articles, action.payload]
            }
        case 'DELETE_ARTICLE':
            return { articles: state.articles.filter(x => x.id !== action.payload)}
        default:
            return state
        
    }
}