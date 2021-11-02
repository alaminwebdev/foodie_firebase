import React from 'react';
import { baseUrl } from '../../../../redux/actionCreators';
import Control from './Control';
import { Box, textAlign } from '@mui/system';
import { Grid, Container } from '@mui/material';


const BurgerTop = baseUrl + 'assets/images/burger-top.png';
const Salad = baseUrl + 'assets/images/burger-salad.png';
const Cheeese = baseUrl + 'assets/images/burger-cheese.png';
const Meat = baseUrl + 'assets/images/burger-meat.png';
const BurgerBottom = baseUrl + 'assets/images/burger-bottom.png'


const Ingredient = props => {
    let ingredient = null;
    switch (props.type) {
        case 'burger-top':
            ingredient = <img src={BurgerTop} alt="BurgerTop" width='100%'/>
            break;

        case 'burger-bottom':
            ingredient = <img src={BurgerBottom} alt="BurgerBottom" width='100%'/>
            break;


        case 'salad':
            ingredient = <img src={Salad} alt="Salad" width='100%'/>
            break;


        case 'cheese':
            ingredient = <img src={Cheeese} alt="Cheeese" width='100%'/>
            break;


        case 'meat':
            ingredient = <img src={Meat} alt="Meat" width='100%'/>
            break;

        default:
            ingredient = null
    }
    //console.log(baseUrl)

    return (
        <Box>
            {ingredient}
        </Box>
      
    )
}

export default Ingredient
