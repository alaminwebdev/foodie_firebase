import React from 'react';
import { baseUrl } from '../../../redux/actionCreators';
import ReviewIcon from './ReviewIcon';

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


const MenuItem = (props) => {
    //console.log(props);
    const loading = props.loading
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} >
            <Card >
                {loading ? (
                    <Skeleton sx={{ height: 194 }} animation="wave" variant="rectangular" />
                ) : (
                    <CardMedia
                        component="img"
                        height="194"
                        image={baseUrl + props.img}
                        alt=""
                    />
                )}

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ cursor: 'pointer' }} onClick={props.DishSelect}>
                        {loading ? (
                            <Skeleton animation="wave" variant="rectangular" />
                        ) : (
                            props.name
                        )}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {loading ? (
                            <Skeleton animation="wave" variant="rectangular" />
                        ) : (
                            props.description
                        )}

                    </Typography>
                </CardContent>

                <CardActions >
                    {loading ? (
                        <Skeleton animation="wave" variant="rectangular" sx={{ height: 10 }} />
                    ) : (
                        <>
                        <ReviewIcon rating={props.rating} />
                        <Tooltip title="Add To Cart" TransitionComponent={Zoom} sx={{ ml: 'auto' }} >
                            <IconButton aria-label="ShoppingCart">
                                <ShoppingCartRoundedIcon />
                            </IconButton>
                        </Tooltip>
                        </>
                    )}

                </CardActions>

            </Card>
        </Grid>
    )
}

export default MenuItem;

