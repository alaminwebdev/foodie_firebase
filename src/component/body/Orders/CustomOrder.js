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
import Skeleton from '@mui/material/Skeleton';


const CustomOrder = props => {
    let ingrdientDetails = null;
    if (!props.loading) {
        ingrdientDetails = props.order.ingredients.map((ingredient) => {
            return (
                <TableRow key={Math.random()}>
                    <TableCell>{ingredient.type}</TableCell>
                    <TableCell align="right">{ingredient.amount}</TableCell>
                    <TableCell align="right">{props.ingredientPrice[ingredient.type] * ingredient.amount}</TableCell>
                </TableRow>
            )
        })

    }
    //console.log(props)
    return (
        <Grid item lg={4}>
            <Card sx={{ mt: 3 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {props.loading ? (<Skeleton animation="wave" />) : (
                            <>
                                Order Id:{props.order.id}
                            </>
                        )}

                    </Typography>
                    <Typography variant="h6" component="div">
                        {props.loading ? (<Skeleton animation="wave" />) : (
                            <>
                                Address. {props.order.customerInfo.address}
                            </>
                        )}

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
                                {props.loading ? (
                                    <TableRow>
                                        <TableCell><Skeleton animation="wave"  /></TableCell>
                                        <TableCell align="right"><Skeleton animation="wave"  /></TableCell>
                                        <TableCell align="right"><Skeleton animation="wave"  /></TableCell>
                                    </TableRow>
                                ) : (ingrdientDetails)}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </CardContent>
                {props.loading ? (
                    <CardActions><Skeleton animation="wave" width='100%' /></CardActions>
                ) : (
                    <CardActions sx={{ justifyContent: 'space-evenly', mb: 1 }}>
                        <Button variant="outlined" size="small">Price :{props.order.orderPrice} tk </Button>
                        <Button variant="outlined" size="small">Payment: {props.order.customerInfo.payment}</Button>
                    </CardActions>
                )}

            </Card>
        </Grid>


    )
}

export default CustomOrder
