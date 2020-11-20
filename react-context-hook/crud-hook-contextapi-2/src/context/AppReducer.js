export const AppReducer = (state, action) => {
    console.log(action);
    console.log(state);
    switch( action.type){
        case 'CREATE_ARTICLE' :
            return { articles :  
                [...state.articles, action.payload]
            }
        case 'DELETE_ARTICLE':
            return { ...state, article: state.articles.filter(x => x.id !== action.payload)}
        
        case 'EDIT_ARTICLE':
            const editArticle = action.payload;
            const updateArticles = state.articles.map((article) => {
                if ( article.id === editArticle.id) {
                    return editArticle
                }
                return article;
            });
            console.log('updateArticle :', updateArticles)
            return {
               articles:[...updateArticles]
            }
            
        default:
            return state
        
    }
}