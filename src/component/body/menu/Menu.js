import React, { Component } from 'react';
import './menu.css';
import MenuItem from './Menuitem';
import MenuDetail from './MenuDetail';
import { connect } from "react-redux";
import { fetchDishes, fetchComments } from '../../../redux/actionCreators';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


// accept state as a props from intial state 
const mapStateToProps = state => {
    return {
        //Inside Reducer dishes Pass two things , 1: isLoading Function 2: dishes array
        Dishes: state.dishes.dishes,
        dishLoading: state.dishes.isLoading,

        //Inside Reducer comments Pass two things , 1: isLoading Function 2: comments array
        Comments: state.comments.comments,
        commentLoading: state.comments.isLoading


    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDishes: () => dispatch(fetchDishes()),
        fetchComments: () => dispatch(fetchComments())
    }
}


class Menu extends Component {
    state = {
        selectedDish: null,
        modalOpen: false
    }

    onDishselect = dish => {
        this.setState({
            selectedDish: dish,
            modalOpen: !this.state.modalOpen
        });
        //console.log(this.state)
    }

    handleClose = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
    }

    render() {
        document.title = "Menu"
        //console.log(this.props);




        if (this.props.dishLoading) {
            return (
                <Container maxWidth='xl'>
                    <Grid container spacing={2} sx={{ my: 5 }}>
                        <MenuItem loading={this.props.dishLoading} />
                        <MenuItem loading={this.props.dishLoading} />
                        <MenuItem loading={this.props.dishLoading} />
                        <MenuItem loading={this.props.dishLoading} />
                    </Grid>
                </Container >
            )
        } else {
            //console.log(this.props.Dishes); 
            const menu = this.props.Dishes.map(item => {
                return (
                    <MenuItem
                        key={item.id}
                        name={item.name}
                        img={item.image}
                        rating={item.rating}
                        description={item.description}
                        loading={this.props.dishLoading}
                        DishSelect={() => this.onDishselect(item)}
                    />
                );
            })


            let dishdetail = null;
            if (this.state.selectedDish != null) {
                //console.log(this.state.comments);
                const comments = this.props.Comments.filter(comment => {
                    return comment.dishId === this.state.selectedDish.id;
                })
                //console.log(comments);
                dishdetail = <MenuDetail
                    key={comments.id}
                    eachdish={this.state.selectedDish}
                    comment_arr={comments}
                    commentLoading={this.props.commentLoading}
                    modalClose={this.handleClose}

                />;
            }

            return (
                <Container maxWidth='xl'>
                    <Grid container spacing={2} sx={{ my: 5 }}>
                        {menu}

                    </Grid>
                    <Modal
                        sx={{ overflowY:'scroll'}}
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={this.state.modalOpen}
                        closeAfterTransition
                    >
                        <Fade in={this.state.modalOpen}>
                            <Container maxWidth="lg">
                                <Grid container spacing={0} sx={{
                                    alignSelf:'center',
                                    bgcolor: '#fff',
                                    p:5,
                                    my: 5
                                }}>
                                    {dishdetail}
                                </Grid>
                            </Container>

                        </Fade>
                    </Modal>

                </Container>
            )
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);


