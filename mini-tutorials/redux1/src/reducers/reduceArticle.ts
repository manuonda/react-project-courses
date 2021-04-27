import { match } from 'assert'
import * as actionTypes from '../types/actionType'

const initialState :ArticleState = {
    articles:[
        {
            id: 1,
            title: "post1",
            body :"Cuerpo numero 1"
        },{
            id: 2,
            title :"post2",
            body: ""
        }
    ]
}

const reducer = ( state : ArticleState = initialState , action: ArticleAction) => {
 
      switch(action.type) {
          case actionTypes.ADD_ARTICLE: 
           const newArticle : IArticle = {
              id: Math.random(),
              title: action.article.title,
              body: action.article.body  
           }

           return {
               ...state,
               articles: state.articles.concat(newArticle)
           }

         case actionTypes.REMOVE_ARTICLE: 
          const updateArticles: IArticle [] =state.articles.filter(
              article => article.id !== action.article.id
          )
          return {
              ...state,
              articles: updateArticles
          }

         default : 
          return initialState
      }  
}

export default reducer;