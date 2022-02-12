import "./App.css";
import { useFormik } from "formik";
import { AirlineSeatIndividualSuiteSharp } from "@material-ui/icons";

const App = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted

  const validate = (values) => {
    const errors = {};
    if (!values.nombre) {
      errors.nombre = "Requerido";
    } else if (values.nombre.length < 5) {
      errors.nombre = "El nombre es muy corto";
    }

    if (!values.apellido) {
      errors.apellido = "Requerido";
    } else if (values.apellido.length < 5) {
      errors.apellido = "El apellido es muy corto";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      nombre: "",
      apellido: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validate,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      {/* <input
        onBlur={formik.handleBlur}
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      /> */}
      {/* crea el componente */}
      <input type="text" {...formik.getFieldProps('email')}></input>
      {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
      <br></br>

      <label> Nombre</label>
      {/* <input
        name="nombre"
        type="text"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.nombre}
      ></input> */}
      <input type="text" {...formik.getFieldProps('nombre')}></input>

      {formik.touched.nombre && formik.errors.nombre ? <div>{formik.errors.nombre}</div> : null}
      <label> Apellido</label>
      {/* <input
        name="apellido"
        type="text"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.apellido}
      ></input> */}

       <input type="text" {...formik.getFieldProps('apellido')}></input>
      {formik.touched.apellido &&  formik.errors.apellido ? <div>{formik.errors.apellido}</div> : null}
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
