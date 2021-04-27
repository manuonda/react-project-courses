
import  * as actionTypes from "../types/actionType";


export const addArticle = (article : IArticle) => {
    const action : ArticleAction = {
        type: actionTypes.ADD_ARTICLE,
        article

    }

    return action;
}

export const removeArticle = (article: IArticle) => {
    const action: ArticleAction = {
        type: actionTypes.REMOVE_ARTICLE,
        article
    }

    return action;
}