import React from 'react';
import Home from './home/Home';
import Menu from './menu/Menu';
import About from './about/About';
import Contact from './contact/Contact';
import MenuDetail from './menu/MenuDetail';
import { Route } from 'react-router-dom';

const Body = () => {
    return (
        <>
            <Route path="/" exact render={ ()=> <Home/>} />
            <Route path="/menu" exact component={Menu} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/menudetail" exact component={MenuDetail} />
            {/* <Redirect from=""  to="" exact/> */}
        </>
    )
}
export default Body