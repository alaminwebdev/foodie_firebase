import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrder } from '../../../../redux/actionCreators';
import Order from './Order';
import Container from '@mui/material/Container'
import { Grid, Typography } from '@mui/material';

// accept state as a props from intial state 
const mapStateToProps = state => {
    return {
        orders: state.customBurger.orders,
        orderLoading: state.customBurger.orderLoading
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchOrder: () => dispatch(fetchOrder()),
    }
}


export class Orders extends Component {
    componentDidMount() {
        this.props.fetchOrder();
    }

    render() {
        let orders = this.props.orders.map((order) => {
            return <Order order={order} key={order.id} />
        }).reverse(); //this reverse show the last order in first 
        return (
            <Container maxWidth="xl">
                <Typography variant="h3" color="initial" sx={{ textAlign: "center" , mt:3 }}>
                    Custom Order
                </Typography>
                <Grid container spacing={2}>
                    {orders}
                </Grid>
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)
