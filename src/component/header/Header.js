import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Navigation from './Navigation';
import NavigationMain from './NavigationMain';
import { withRouter } from 'react-router-dom';
import './header.css'



const Header = (props) => {
    //console.log(props);
    const { history } = props;

    const theme = useTheme();
    const isMobileBreakpoints = useMediaQuery(theme.breakpoints.down('sm'));
    console.log(isMobileBreakpoints);


    
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Resturent
                </Typography>

                <div>
                    {isMobileBreakpoints? ( <> <Navigation/> </> ) :(<> <NavigationMain/> </>)
                }
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default withRouter(Header)