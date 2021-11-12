import React from 'react';

import { connect } from 'react-redux';

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
        cartItems: state.dishes.cartItems

    }
}



const Cart = (props) => {
    const cartItem = props.cartItems.map((item) => {
        //console.log(item)
        return (
            <Grid item lg={3}>
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

                        <IconButton aria-label="delete">
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
                <Grid item lg={12} md={12} sm={12} sx={{textAlign:"center" , mt:3}} >
                    <Typography variant="h3" color="initial" >
                        Your Cart
                    </Typography>
                </Grid>
                {cartItem}
            </Grid>
        </Container>

    )
}

export default connect(mapStateToProps, null)(Cart)
