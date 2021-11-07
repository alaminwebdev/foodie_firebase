import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';
import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

import { withRouter } from 'react-router-dom';

const navButtonStyle = {
    mx: '10px',
    border: 1,
    borderColor: '#E5E8EC',
    borderRadius:'10px',
    color:'#007FFF',
    bgcolor:'#fff',
    px:'10px',
    py:'8px'

    //backgroundColor: { xs: "secondary.light", sm: "#0000ff" },
  };
  


const NavigationMain = props => {

    const { history } = props;
    const handleMenuClick = pageUrl => {
        history.push(pageUrl)
    };

    return (
        <div className="navButton">

            <Tooltip title="Home"  TransitionComponent={Zoom} sx={{ ...navButtonStyle, ml:0 }} >
                <IconButton onClick={() => handleMenuClick('/')}>
                    <HomeRoundedIcon />
                </IconButton>
            </Tooltip>

            <Tooltip title="Top Hot Menu"  TransitionComponent={Zoom} sx={{ ...navButtonStyle}}>
                <IconButton onClick={() => handleMenuClick('/menu')}>
                    <FastfoodIcon />
                </IconButton>
            </Tooltip>

            <Tooltip title="Customize Burger" TransitionComponent={Zoom}  sx={{ ...navButtonStyle}}>
                <IconButton onClick={() => handleMenuClick('/build')}>
                    <RestaurantRoundedIcon />
                </IconButton>
            </Tooltip>

            <Tooltip title="Orders" TransitionComponent={Zoom}  sx={{ ...navButtonStyle}}>
                <IconButton onClick={() => handleMenuClick('/orders')}>
                    <ShoppingCartRoundedIcon />
                </IconButton>
            </Tooltip>

            <Tooltip title="Contact For Query" TransitionComponent={Zoom} sx={{ ...navButtonStyle, mr:0}}>
                <IconButton onClick={() => handleMenuClick('/contact')}>
                    <ContactPageRoundedIcon />
                </IconButton>
            </Tooltip>

            <Tooltip title="Login" TransitionComponent={Zoom} sx={{ ...navButtonStyle, mr:0}}>
                <IconButton onClick={() => handleMenuClick('/login')}>
                    <LoginRoundedIcon />
                </IconButton>
            </Tooltip>

        </div>
    )
}

export default withRouter(NavigationMain)
