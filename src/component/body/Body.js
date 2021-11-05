import React from 'react';
import Home from './home/Home';
import Menu from './menu/Menu';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Orders from './BurgerBuilder/Orders/Orders';
import CheckOut from './BurgerBuilder/Orders/CheckOut';
import Contact from './contact/Contact';
import MenuDetail from './menu/MenuDetail';
import { Route } from 'react-router-dom';

const Body = () => {
    return (
        <>
            <Route path="/" exact render={ ()=> <Home/>} />
            <Route path="/menu" exact component={Menu} />
            <Route path="/build" exact component={BurgerBuilder} />
            <Route path="/checkout" exact component={CheckOut} />
            <Route path="/orders" exact component={Orders} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/menudetail" exact component={MenuDetail} />
            {/* <Redirect from=""  to="" exact/> */}
        </>
    )
}
export default Body