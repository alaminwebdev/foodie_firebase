import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { authCheck } from '../redux/authActionCreators';
import { cartCheck } from '../redux/actionCreators';

import Header from './header/Header';
import Home from './body/home/Home';

import Menu from './body/menu/Menu'
import DishDetail from './body/menu/DishDetail/DishDetail';
import Cart from './body/menu/Cart/Cart';

import BurgerBuilder from './body/BurgerBuilder/BurgerBuilder';
import Orders from './body/BurgerBuilder/Orders/Orders';
import CheckOut from './body/BurgerBuilder/Orders/CheckOut';

import Auth from './body/Auth/Auth';
import Logout from './body/Auth/Logout';

import Contact from './body/contact/Contact';


import { Route, Switch, Redirect } from 'react-router-dom';



const mapStateToProps = state => {
    return {
        token: state.authState.token,
        //cartItems: JSON.parse(localStorage.getItem("cartItems"))
    }
}


const mapDispatchToProps = dispatch => {
    return {
        authCheck: () => dispatch(authCheck()),
        cartCheck: () => dispatch(cartCheck())
    }
}





const MainComponent = (props) => {
    //const cartItems = JSON.parse(localStorage.getItem("cartItems"))
    //console.log(cartItems)
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        props.authCheck();
        props.cartCheck();
    });

    let routes = null;
    if (props.token === null) {
        routes = (
            <Switch>
                <Route path="/login" exact component={Auth} />
                <Redirect to="/login" />
            </Switch>
        )
    } else {
        routes = (
            <Switch>
                <Route path="/" exact render={() => <Home />} />

                <Route path="/menu" exact component={Menu} />
                <Route path="/dishdetail" exact component={DishDetail} />
                <Route path="/cart" exact component={Cart} />

                <Route path="/build" exact component={BurgerBuilder} />
                <Route path="/checkout" exact component={CheckOut} />
                <Route path="/orders" exact component={Orders} />

                <Route path="/contact" exact component={Contact} />

                <Route path="/logout" exact component={Logout} />

                <Redirect to="/" />
            </Switch>
        )

    }

    document.title = "Resturent"
    return (
        <>
            <Header />
            {routes}
        </>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);