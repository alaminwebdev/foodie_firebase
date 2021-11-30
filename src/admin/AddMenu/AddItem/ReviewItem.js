import React, { useState } from 'react';
import { connect } from 'react-redux';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';

const mapStateToProps = state => {
    return {
        //itemValue :  state.itemState
    }
}

const mapDispatchToProps = dispatch => {
    return {
        //addIntro: (name, label, description) => dispatch(addIntro(name, label, description))
    }
}


const ReviewItem = props => {
    //console.log(props);
    const style = {
        mt: 3
    }

    return (
        <Container maxWidth="md">
            <Box sx={{ mb: 2 }}>
                <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    sx={{ ...style }}
                    endIcon={<SendIcon />}
                >
                    {props.step === 4 ? 'Finish' : 'Next'}
                </Button>
                <Button
                    disabled={props.step === 0}
                    variant="outlined"
                    color="primary"
                    onClick={props.back}
                    sx={{ ...style, ml: 3 }}
                >
                    Back
                </Button>
            </Box>
        </Container>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewItem)
