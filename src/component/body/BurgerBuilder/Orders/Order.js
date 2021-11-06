import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Grid, Typography } from '@mui/material';


const Order = props => {
    console.log(props)
    return (
        <Grid item lg={3}>
            <Card sx={{mt:3}}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Order ID: {props.order.id}
                    </Typography>
                    <Typography variant="h6" component="div">
                        Delivery Address. {props.order.customerInfo.address}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Custom Burger
                    </Typography>
                    <Typography variant="body2">
                        {props.order.ingredients.map((ingredient) => {
                            return (
                                <Typography variant="caption" display="block">
                                    {ingredient.type} X {ingredient.amount}
                                </Typography>
                            )
                        })}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="outlined" size="small">Price :{props.order.orderPrice} tk </Button>
                    <Button variant="outlined" size="small">Payment: {props.order.customerInfo.payment}</Button>
                </CardActions>
            </Card>
        </Grid>


    )
}

export default Order
