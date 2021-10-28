import React, { Component } from 'react';
import './menu.css';
import MenuItem from './Menuitem';
import { connect } from "react-redux";
import { fetchDishes, fetchComments } from '../../../redux/actionCreators';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';


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

        // defalut menu item for loading
        loadingDishes: [1, 2, 3, 4]
    }

    onDishselect = dish => {
        this.setState({
            selectedDish: dish,
        });
    }
    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
    }

    render() {
        document.title = "Menu"
        console.log(this.props);




        if (this.props.dishLoading) {
            return (
                <Container maxWidth='xl'>
                    <Grid container spacing={2} sx={{ my: 5 }}>
                        <MenuItem loading={this.props.dishLoading}/>
                        <MenuItem loading={this.props.dishLoading}/>
                        <MenuItem loading={this.props.dishLoading}/>
                        <MenuItem loading={this.props.dishLoading}/>
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

            if (this.state.selectedDish != null) {
                //console.log(this.state.comments);
                const comments = this.props.Comments.filter(comment => {
                    return comment.dishId === this.state.selectedDish.id;
                })
                //console.log(comments);
                this.props.history.push({
                    pathname: '/menudetail',
                    state: {
                        eachdish: this.state.selectedDish,
                        comment_arr: comments,
                        commentLoading: this.props.commentLoading

                    }
                })
            }

            return (
                <Container maxWidth='xl'>
                    <Grid container spacing={2} sx={{ my: 5 }}>
                        {menu}
                    </Grid>
                </Container >
            )
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);


