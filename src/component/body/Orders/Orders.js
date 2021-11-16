import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrder } from '../../../redux/actionCreators';
import Order from './Order';
import CustomOrder from './CustomOrder';
import Container from '@mui/material/Container'
import { Grid, Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

// accept state as a props from intial state 
const mapStateToProps = state => {
    return {
        orders: state.customBurger.orders,
        customOrderLoading: state.customBurger.orderLoading,

        defaultOrders: state.dishes.defaultOrders,
        defaultOrderLoading: state.dishes.orderLoading,

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


        // let customOrders = this.props.orders.map((order, index) => {
        //     return <CustomOrder order={order} key={index} id={order.id} ingredientPrice={this.props.ingredientPrice} />
        // }).reverse(); //this reverse show the last order in first 





        let customOrders = null;
        if (this.props.customOrderLoading) {
            customOrders = <CustomOrder loading={true} />
        } else {
            customOrders = this.props.orders.map((order, index) => {
                return <CustomOrder order={order} key={index} id={order.id} ingredientPrice={this.props.ingredientPrice} />
            }).reverse(); //this reverse show the last order in first 
        }

        let defaultOrders = null;
        let orderContainer = null;

        if (this.props.defaultOrderLoading) {
            defaultOrders = <Order loading={true} />
        } else {
            defaultOrders = this.props.defaultOrders.map((order, index) => {
                return <Order order={order} key={index} id={order.id} />
            }).reverse(); //this reverse show the last order in first 

        }




        //console.log(this.props.defaultOrders)
        return (
            <>
                {this.props.defaultOrders.length === 0 ? (
                    <Container maxWidth="md" sx={{ my: 4 }}>
                        <Alert severity="warning" variant="filled" sx={{ mx: 4 }}><AlertTitle>Empty</AlertTitle>Sorry ! Your have no Order. — <strong>Go to Menu </strong></Alert>
                    </Container>
                ) : (
                    <Container maxWidth="xl" sx={{ my: 4, textAlign: "center" }}>
                        <Typography variant="h4" color="initial">Orders</Typography>
                    </Container>
                )}
                <Container maxWidth="xl" sx={{ my: 4 }}>
                    <Grid container spacing={2}>
                        {customOrders}
                    </Grid>
                    <Grid container spacing={2}>
                        {defaultOrders}
                    </Grid>
                </Container>
            </>

        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)
