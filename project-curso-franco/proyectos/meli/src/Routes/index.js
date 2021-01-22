import {BrowserRouter as Router , Route, Switch } from 'react-router-dom'
import Header from '../Components/Header/Header'
import Home from '../Pages/Home/Home'
import Products from '../Pages/Products/Products'
import Prueba from '../Pages/Prueba/Prueba'

const Routes = ({ handlerSearch, search }) =>{

    return (

        <Router>
            <Header handlerSearch={handlerSearch}/>
            <Switch>
                <Route exact path="/" component={Home} search={search}></Route>
                <Route path="/products">
                    <Products search={search}></Products>
                </Route>
                <Route path="/prueba" component={Prueba}></Route>
            </Switch>
        </Router>
    )
}

export default Routes;