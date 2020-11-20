import React , { Fragment , useContext }from 'react';
import {GlobalContext} from '../context/GlobalContext'
import {Link} from 'react-router-dom'

const ListArticle = () => {
    const { articles , deleteArticle } = useContext(GlobalContext)
    console.log(articles);
    
    const handleDelete = (id) => {
       deleteArticle(id);
    }

    return (
       <Fragment>
         <div className="ArticleList">
             <div className="container">
                 <div>
                     <div className="row">
                         <h3>Heading</h3>
                     </div>
                 </div>
                 <div className="col-md-4 text-right">
                     <Link to="/create">
                         <button className="btn btn-primary">
                             Create New Article
                         </button>
                     </Link>
                 </div>
                 <div className="listing">
                     <div className="row">
                         <div className="col-md-12">
                             {articles && articles.length > 0 ? (
                                 <>
                                 { articles.map((article) => (
                                    <div className="card" key={article.id}>
                                      <div className="card-body">
                                      <div className="card-titile">
                                          <span>{article.heading}</span>
                                      </div>
                                      <div className="col-md-8">
                                         <h4> {article.subHeading}</h4>  
                                          <p>
                                          Category : {article.category}
                                          </p>
                                          <span>Author : {article.author}</span>
                                        </div>
                                       <div className="card-footer">
                                        <Link to={`/edit/${article.id}`} className="btn btn-primary">Editar</Link>
                                        <button className="btn btn-warning" onClick={() => handleDelete(article.id)}>Delete</button>
                                       </div>   
                                      </div>  
                                    </div> 
                                    
                                 ))}
                                </> 
                              ) :
                              (
                                  <>
                                  No Hay Articles New
                                  </>
                              )}
                         </div>
                     </div>
                 </div>
             </div>
            
         </div>
       </Fragment>
       
    );
};

export default ListArticle;