import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { spacing } from '@mui/system';


const NavigationMain = () => {
    return (
        <div className="navButton">
            <Tooltip title="Home" sx={{ mx: 2 }} >
                <IconButton>
                    <HomeIcon   style={{color: '#fff'}} />
                </IconButton>
            </Tooltip>
            <Tooltip title="Menu" >
                <IconButton>
                    <FastfoodIcon   style={{color: '#fff'}} />
                </IconButton>
            </Tooltip>
            <Tooltip title="About" >
                <IconButton>
                    <AccountCircleIcon   style={{color: '#fff'}} />
                </IconButton>
            </Tooltip>
        </div>
    )
}

export default NavigationMain
