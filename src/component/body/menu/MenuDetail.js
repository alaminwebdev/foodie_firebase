import React from 'react';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuReview from './MenuReview';
import CommentForm from './CommentForm';
import { baseUrl } from '../../../redux/actionCreators'


const MenuDetail = props => {
    const dishes = props.eachdish;
    const comments = props.comment_arr;
    const commentLoading = props.commentLoading
    //console.log(dishes);
    //console.log(props);

    return (
        <>
            <Grid item lg={6} sx={{ pl:0, pt:0, alignSelf:'center' }}>
                <Box >
                    <img
                        width='100%'
                        src={baseUrl + dishes.image}
                        alt={dishes.name}
                        loading="lazy"
                    />
                </Box>
            </Grid>
            <Grid item lg={6}>
                <Typography gutterBottom variant="h5" component="div" sx={{  }}>
                    {dishes.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {dishes.description}
                </Typography>
                
                <MenuReview key={dishes.id} review={comments} commentLoading={commentLoading} />
                <CommentForm dishId={dishes.id} />
                <Button variant="outlined" onClick={props.modalClose} sx={{}}>
                   Close
                </Button>
            </Grid>
        </>
    )
}

export default MenuDetail;