import "./App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextInput from './components/TextInput';
import Checkbox from './components/Checkbox';
import Select from './components/Select';
import Radio from './components/Radio';

const App = () => {
  const validate = (values) => {
    const errors = {};
    if (!values.nombre) {
      errors.nombre = "Requerido";
    } else if (values.nombre.length < 5) {
      errors.nombre = "El nombre es muy corto";
    }

    if (!values.nombredos) {
        errors.nombredos = "Requerido";
      } else if (values.nombredos.length < 5) {
        errors.nombredos = "El nombre es muy corto";
      }

    if (!values.apellido) {
      errors.apellido = "Requerido";
    } else if (values.apellido.length < 5) {
      errors.apellido = "El apellido es muy corto";
    }

    if (!values.radio) {
      errors.radio = "Requerido";
    } 

    return errors;
  };

  return (
    <Formik
      initialValues={{
         email: "", nombre: "", apellido: "" , nombredos:"", accept: false, radio: ''}}
      onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
      validate={validate}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
         <TextInput name="nombredos" label="Nombre Dos"></TextInput>
         <br></br>
         
         <label> Nombre</label>
          <Field name="nombre" type="text" />
          <ErrorMessage name="nombre"></ErrorMessage>
          <br></br>
          
          <label> Apellido</label>
          <Field name="apellido" type="text" />
          <ErrorMessage name="apellido"></ErrorMessage>
          <br></br>
         
         <Checkbox name="accept">
             Aceptar Terminos y Condiciones
         </Checkbox>
          <button type="submit">Submit</button>

          <Select label="Tipo Chancho" name="chancho">
              <option value="">Seleccioar</option>
              <option value="felipe">Felipe</option>
              <option value="chachitofeliz">Chanchito Feliz</option>
          </Select>

          <Radio label="chanchito" value="valoruno" name="radio"></Radio>
          <Radio label="chanchito2" value="valordos" name="radio"></Radio>
        </Form>
      )}
    </Formik>
  );
};

export default App;
