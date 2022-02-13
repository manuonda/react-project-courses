import "./App.css";
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import Article from './components/Article';

const App = () => {
  const [photos, setPhotos] = useState([]);

  return (
    <div className="header">
      <header>
        <Formik
          initialValues={{ search: "" }}
          onSubmit={async (values) => {
            console.log(values);
            const url = `https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`;
            const response = await fetch(url, {
              headers: {
                Authorization:
                  "Client-ID 4fx0xa6xrZCjXMsaQ-xfMmAAVzBysgAiXXdz9_8PUWY ",
              },
            });

            const data = await response.json();
            setPhotos(data.results);
            console.log(data);
          }}
        >
          <Form>
            <Field name="search"></Field>
          </Form>
        </Formik>
      </header>
      <div className="container">
        { photos && photos.map( photo => (
           <><Article key={photo.id} {...photo}></Article></>
        ))}

      </div>
    </div>
  );
};

export default App;
