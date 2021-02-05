import {BrowserRouter as Router , Route, Switch } from 'react-router-dom'
import Header from '../Components/Header/Header'
import Home from '../Pages/Home/Home'
import Products from '../Pages/Products/Products'
import Product from '../Pages/Products/Product'

const Routes = ({ handlerSearch, search }) =>{

    return (

        <Router>
            <Header handlerSearch={handlerSearch}/>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/products">
                    <Products search={search}/>
                </Route>
                <Route path="/products/detail/:id" component={Product}>
                    <Product></Product>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;