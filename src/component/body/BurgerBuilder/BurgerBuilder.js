import React, { Component } from 'react';
import Burger from './Burger/Burger';
import Control from './Ingredient/Control';
import { Box } from '@mui/system';
import { Grid, Container } from '@mui/material';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Summery from './OrderSummery/Summery';


const ingredientPrice = {
    salad: 20,
    cheese: 40,
    meat: 90
}
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    
    boxShadow: 24,
    p: 4,
};

export default class BurgerBuilder extends Component {
    state = {
        ingredients: [
            { type: 'salad', amount: 0 },
            { type: 'cheese', amount: 0 },
            { type: 'meat', amount: 0 }
        ],
        totalPrice: 80,
        modalOpen: false
    }

    //add Ingredient
    addIngredient = type => {
        //console.log(type)
        const newIngredient = [...this.state.ingredients];
        const newPrice = this.state.totalPrice + ingredientPrice[type];
        for (let item of newIngredient) {
            if (item.type == type) item.amount++;
        }
        this.setState({
            ingredients: newIngredient,
            totalPrice: newPrice
        })

    }
    //remove Ingredient
    removeIngredient = type => {
        //console.log(type)
        const newIngredient = [...this.state.ingredients];
        const newPrice = this.state.totalPrice - ingredientPrice[type];
        for (let item of newIngredient) {
            if (item.type == type) {
                if (item.amount <= 0) {
                    return;
                } else {
                    item.amount--;
                }
            }
        }
        this.setState({
            ingredients: newIngredient,
            totalPrice: newPrice
        })
    }
    //modal funtionality
    handleClose = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    render() {
        return (
            <Container maxWidth="xl" >
                <Grid container sx={{ my: 5 }} spacing={2}>
                    <Grid item xl={6} lg={6} md={6} sm={12}>
                        <Box>
                            <Burger ingredients={this.state.ingredients} />
                        </Box>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} sx={{ textAlign: 'center', alignSelf: 'center' }}>
                        <Box >
                            <Control
                                ingredientAdd={this.addIngredient}
                                ingredientRemove={this.removeIngredient}
                                price={this.state.totalPrice}
                                modalOpen={this.handleClose}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Modal
                    sx={{ overflowY: 'scroll' }}
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={this.state.modalOpen}
                    closeAfterTransition
                >
                    <Fade in={this.state.modalOpen}>
                        <Box sx={style}>
                            <Summery
                                modalClose={this.handleClose}
                                totalPrice={this.state.totalPrice}
                                ingredients={this.state.ingredients}
                                ingredientPrice={ingredientPrice}
                            />
                        </Box>

                    </Fade>
                </Modal>
            </Container>
        )
    }
}
