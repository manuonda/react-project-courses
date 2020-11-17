import React ,{useState, useContext} from 'react';
import  'bootstrap/dist/css/bootstrap.css'
import { Link , useHistory} from 'react-router-dom';
import {GlobalContext} from '../context/GlobalContext'


const CreateArticle = () => {
    
    const [heading, setHeading] = useState('');
    const [subHeading, setSubHeading] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [author, setAuthor] = useState('');

   const { addArticle } = useContext(GlobalContext) 
   const history = useHistory();

   const handleSubmit = (e) => {
       e.preventDefault();
       // TODO: Next here
       const article = {
           id: uuid,
           heading : heading,
           subHeading:  subHeading,
           description: description,
           category: category,
           author: author
       }
       addArticle(article);
       history.push("/");
   }

    return (
        <div className="container">
            <h3>Create Article</h3>
            <br></br>
            <br></br>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
             <label>Article Heading</label> 
             <input type="text" className="form-control" name="heading" value={heading}
              onChange={(e) => setHeading(e.target.value)}
             />  
            </div>
            <div className="form-group">
             <label>Article Heading</label> 
             <input type="text" className="form-control" name="heading" value={subHeading}
              onChange={(e) => setSubHeading(e.target.value)}
             />  
            </div>
            
            <div className="form-group">
             <label>Description</label>    
             <input type="text" className="form-control" name="description" value={category} 
              onChange={(e) => setCategory(e.target.value)}
             />
            </div>
            <div className="form-group">
                <label>Category</label>
                <input type="text" className="form-control" name="description" value={description}
                onChange={(e) => setDescription(e.target.value)}
                ></input>
            </div>
            <div className="form-group">
                <label>Author Name</label>
                <input type="text" className="form-control" name="auhor"  value={author}
                onChange={(e) => setAuthor(e.target.value)}
                ></input>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
            <Link to={"/"} className="btn btn-secondary">Back</Link>
          </form> 
            
        </div>
    );
};

export default CreateArticle;