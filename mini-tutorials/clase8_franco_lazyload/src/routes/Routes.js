import { lazy, Suspense, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/Home/Home"));
const Tickets = lazy(() => import("../pages/Tickets/Tickets"));

const Rutas = () => {
  return (
    <BrowserRouter>
   
        <Suspense fallback={() => <h3>...Cargando</h3>}>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/tickets" element={<Tickets></Tickets>}></Route>
          </Routes>
        </Suspense>
    </BrowserRouter>
  );
};

export default Rutas;
