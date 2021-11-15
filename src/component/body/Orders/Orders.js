import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrder } from '../../../redux/actionCreators';
import Order from './Order';
import CustomOrder from './CustomOrder';
import Container from '@mui/material/Container'
import { Grid, Typography } from '@mui/material';

// accept state as a props from intial state 
const mapStateToProps = state => {
    return {
        orders: state.customBurger.orders,
        orderLoading: state.customBurger.orderLoading,

        defaultOrders: state.dishes.defaultOrders,

        token: state.authState.token,
        userId: state.authState.userId,

        ingredientPrice: state.customBurger.ingredientPrice
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchOrder: (token, userId) => dispatch(fetchOrder(token, userId)),
    }
}


export class Orders extends Component {
    componentDidMount() {
        this.props.fetchOrder(this.props.token, this.props.userId);
    }

    render() {
        let customOrders = this.props.orders.map((order, index) => {
            return <CustomOrder order={order} key={index} id={order.id} ingredientPrice={this.props.ingredientPrice} />
        }).reverse(); //this reverse show the last order in first 

        let defaultOrders = this.props.defaultOrders.map((order, index) => {
            return <Order order={order} key={index} id={order.id} />
        }).reverse(); //this reverse show the last order in first 

        console.log(this.props.defaultOrders)
        return (
            <Container maxWidth="xl" sx={{my:4}}>
                <Typography variant="h3" color="initial" sx={{ textAlign: "center", mt: 3 }}>
                    Custom Order
                </Typography>
                <Grid container spacing={2}>
                    {customOrders}
                </Grid>

                <Typography variant="h3" color="initial" sx={{ textAlign: "center", mt: 3 }}>
                    Default Order
                </Typography>
                <Grid container spacing={2}>
                    {defaultOrders}
                </Grid>
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)
