import React , { Fragment , useContext }from 'react';
import {GlobalContext} from '../context/GlobalContext'
import {Link} from 'react-router-dom'

const ListArticle = () => {
    const { articles } = useContext(GlobalContext)
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
                                    <div className="listbox" key={article.id}>
                                      <div className="row">
                                       <div className="col-md-8">
                                         <span>{article.heading}</span>
                                         <h4> {article.subHeading}
                                         </h4>  
                                          <p>
                                          {article.category}
                                          </p>
                                          <span>{article.author}</span>
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