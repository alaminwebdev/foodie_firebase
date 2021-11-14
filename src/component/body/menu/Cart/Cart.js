import React, { Component, useEffect } from 'react';

import { connect } from 'react-redux';
import { deleteCart } from '../../../../redux/actionCreators';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Container, Grid, Typography } from '@mui/material';


// accept state as a props from intial state 
const mapStateToProps = state => {
    return {
        token: state.authState.token,
        userId: state.authState.userId,
        cartItems: state.cartState.cartItems,
    }
}


const mapDispatchToProps = dispatch => {
    return {
        deleteCart: (index) => dispatch(deleteCart(index))
    }
}



const Cart = (props) => {

    const deleteItem =(index)=>{
        //const cartItems = [...props.cartItems]
        //console.log(index, cartItems);
        props.deleteCart(index);
    }

    //console.log(props)
    //const cartItems=  JSON.parse(localStorage.getItem("cartItems") || "[]")
    const cartItem = props.cartItems.map((item, index) => {
        //console.log(item)
        return (
            <Grid item lg={3} key={Math.random()}>
                <Card sx={{ mt: 3, }}>
                    <CardContent>
                        <Typography variant="h6" component="div">
                            {item.dishItem}
                        </Typography>
                        <Typography color="text.secondary">
                            Price : {item.price}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'space-around', pb: 2 }}>

                        <Chip label={'Varient: ' + item.varient} variant="outlined" />
                        <Chip label={'Quantity: ' + item.quantity} variant="outlined" />

                        <IconButton aria-label="delete" onClick={ ()=>deleteItem(index)}>
                            <DeleteIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>


        )
    })

    return (
        <Container maxWidth="xl">
            <Grid container spacing={2}>
                <Grid item lg={12} md={12} sm={12} sx={{ textAlign: "center", mt: 3 }} >
                    <Typography variant="h3" color="initial" >
                        Your Cart
                    </Typography>
                </Grid>
                {cartItem}
            </Grid>
        </Container>

    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
