import React from 'react';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuReview from './MenuReview';
import CommentForm from './CommentForm';
import { baseUrl } from '../../../redux/actionCreators'


const MenuDetail = props => {
    const dishes = props.location.state.eachdish;
    const comments = props.location.state.comment_arr;
    const commentLoading = props.location.state.commentLoading
    //console.log(dishes);
    console.log(props);

    return (
        <Container maxWidth="xl">
            <Grid container spacing={2} sx={{ my:5}}>
                <Grid item lg={6}>
                    <Box>
                        <img
                            src={baseUrl + dishes.image}
                            alt={dishes.name}
                            loading="lazy"
                        />
                    </Box>
                </Grid>
                <Grid item lg={6}>
                    <Typography gutterBottom variant="h5" component="div" sx={{ cursor: 'pointer' }} onClick={props.DishSelect}>
                        {dishes.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {dishes.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        ${dishes.price}
                    </Typography>

                    <MenuReview key={dishes.id} review={comments} commentLoading={commentLoading} />
                    <CommentForm dishId={dishes.id} />
                    <Button variant="outlined" onClick={() => props.history.goBack()} sx={{}}>
                        Back
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default MenuDetail;