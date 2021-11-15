import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Grid, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const CustomOrder = props => {
    const ingrdientDetails = props.order.ingredients.map((ingredient) => {
        return (
            <TableRow key={Math.random()}>
                <TableCell>{ingredient.type}</TableCell>
                <TableCell align="right">{ingredient.amount}</TableCell>
                <TableCell align="right">{ props.ingredientPrice[ingredient.type] * ingredient.amount }</TableCell>
            </TableRow>
        )
    })
    console.log(props)
    return (
        <Grid item lg={4}>
            <Card sx={{mt:3}}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Order ID: {props.order.id}
                    </Typography>
                    <Typography variant="h6" component="div">
                        Address. {props.order.customerInfo.address}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Base Price: 80tk
                    </Typography>
                    <TableContainer>
                        <Table aria-label="spanning table">
                            <TableHead>
                                <TableRow>
                                    <TableCell >Item</TableCell>
                                    <TableCell align="right">Qty.</TableCell>
                                    <TableCell align="right">Price</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {ingrdientDetails}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    
                </CardContent>
                <CardActions sx={{justifyContent:'space-evenly' ,  mb:1}}>
                    <Button variant="outlined" size="small">Price :{props.order.orderPrice} tk </Button>
                    <Button variant="outlined" size="small">Payment: {props.order.customerInfo.payment}</Button>
                </CardActions>
            </Card>
        </Grid>


    )
}

export default CustomOrder
