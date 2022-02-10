import './App.css';
import { useFormik} from 'formik'

const App = () =>  {
const formik = useFormik({
     initValues: {
        name:'',
        lastname: '',
        email: '',
     },
     onSubmit: values => console.log(values)
});

  return (
    <div className="App">
     <form onSubmit={formik.handleSubmit}>
       <label> Nombre</label>
       <input 
         name="name"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.name}
       ></input>

<label> Apellido</label>
       <input 
         name="lastname"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.lastname}
       ></input>

    <label> Nombre</label>
       <input 
         name="email"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.email}
       ></input>
     </form>
    </div>
  );
}

export default App;
