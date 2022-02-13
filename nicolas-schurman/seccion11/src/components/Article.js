import React from 'react'
import './conent.css';
import './article.css';

export const Article = (photo) => {

    const open = (url) => window.open(url); 
    return (
        <div className="container">
            <article className="article" onClick={(e) => open(photo.links.html)}>
                <img src={photo.urls.regular}></img>
                <p>{[photo.description, photo.al_description].join('-')}</p>
            </article>
        </div>
    )
}
export default Article;
