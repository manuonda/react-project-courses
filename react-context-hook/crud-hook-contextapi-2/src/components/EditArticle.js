import React, {useContext , useState, useEffect} from 'react';
import {Link, useHistory}  from 'react-router-dom'
import {GlobalContext} from '../context/GlobalContext'

const EditArticle = (props) => {

    const id = props.match.params.id;
    const{ articles , editArticle}= useContext(GlobalContext)
    const history = useHistory();
    const[article, setArticle] = useState({
       id:null,
       category:'',
       heading: '',
       description:'',
       subHeading:'',
       author:''
    });
   
    const currentId = props.match.params.id;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(article);
        editArticle(article);
        history.push("/");
    }

    useEffect(() => {
        const articleId =  currentId;
        const articleSelected  = articles.find( article => article.id === articleId);
        setArticle(articleSelected);

    },[currentId,articles])

    const onChange= (ev) => {
        setArticle({...article, [ev.target.name]: ev.target.value})
    }
    console.log(id);
    return (
        <div className="container">
        <h3>Create Article</h3>
        <br></br>
        <br></br>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
         <label>Article Heading</label> 
         <input type="text" className="form-control" name="heading" value={article.heading}
          onChange={onChange}
         />  
        </div>
        <div className="form-group">
         <label>Article Heading</label> 
         <input type="text" className="form-control" name="subHeading" value={article.subHeading}
          onChange={onChange}
         />  
        </div>
        
        <div className="form-group">
         <label>Description</label>    
         <input type="text" className="form-control" name="category" value={article.category} 
          onChange={onChange}
         />
        </div>
        <div className="form-group">
            <label>Category</label>
            <input type="text" className="form-control" name="description" value={article.description}
            onChange={onChange}
            ></input>
        </div>
        <div className="form-group">
            <label>Author Name</label>
            <input type="text" className="form-control" name="auhor"  value={article.author}
            onChange={onChange}
            ></input>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
        <Link to={"/"} className="btn btn-secondary">Back</Link>
      </form> 
        
    </div>
    );
};

export default EditArticle;