import React from 'react';
import { baseUrl } from '../../../../redux/actionCreators';
import Varients from './Varients';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';


const DishItem = (props) => {
    //console.log(props);
    const loading = props.loading
    const dishes = props.dishes
    const price = props.dishes.price[0]
    //let vari = null;

    //console.log(price)
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} >
            <Card >
                <CardMedia
                    component="img"
                    height="194"
                    image={dishes.image}
                    alt=""
                />

                <CardContent sx={{pb:1}}>
                    <Typography gutterBottom variant="h6" component="div" sx={{ cursor: 'pointer' }} onClick={props.DishSelect}>
                        {dishes.name}
                    </Typography>
                    <Varients varients={dishes.varients} price={price} dishID={dishes.id} dishItem={dishes.name} />
                </CardContent>

                {/* <CardActions>
                    <ReviewIcon rating={dishes.rating} />
                </CardActions> */}

            </Card>
        </Grid>
    )
}

export default DishItem;

