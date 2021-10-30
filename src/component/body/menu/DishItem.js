import React from 'react';
import { baseUrl } from '../../../redux/actionCreators';
import ReviewIcon from './ReviewIcon';
import Varients from './Varients';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import Skeleton from '@mui/material/Skeleton';
import { Grid } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';



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
                    image={baseUrl + dishes.image}
                    alt=""
                />
                
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ cursor: 'pointer' }} onClick={props.DishSelect}>
                        {loading ? (
                            <Skeleton animation="wave" variant="rectangular" />
                        ) : (
                            dishes.name
                        )}
                    </Typography>

                    <Varients varients={dishes.varients} price={price} />
                </CardContent>

                <CardActions >
                    <ReviewIcon rating={dishes.rating} />
                    <Tooltip title="Add To Cart" TransitionComponent={Zoom} sx={{ ml: 'auto' }} >
                        <IconButton aria-label="ShoppingCart">
                            <ShoppingCartRoundedIcon />
                        </IconButton>
                    </Tooltip>
                </CardActions>

            </Card>
        </Grid>
    )
}

export default DishItem;

