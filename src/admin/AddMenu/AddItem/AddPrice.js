import React, { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import { connect } from 'react-redux';
import { addPrice } from '../../../redux/adminActionCreators';

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
        //authIntro :  state.itemState
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPrice: (price) => dispatch(addPrice(price))
    }
}


const AddPrice = props => {
    //console.log(props);

    const { register, handleSubmit, control, reset, formState: { errors, isSubmitSuccessful } } = useForm();

    const onSubmit = data => {
        console.log(data);
        props.addPrice(data)
        props.next();
    }

    
    const style = {
        mt: 3
    }

    return (
        <Container maxWidth="md">
            <form onSubmit={handleSubmit(onSubmit)}>

                <TextField
                    fullWidth
                    label="Small"
                    variant="outlined"
                    {...register("small", { required: "Required." })}
                    error={Boolean(errors.small)}
                    helperText={errors.small?.message}
                    sx={{ ...style }}
                    defaultValue=''

                />
                <TextField
                    fullWidth
                    label="Medium"
                    variant="outlined"
                    {...register("medium", { required: "Required." })}
                    error={Boolean(errors.medium)}
                    helperText={errors.medium?.message}
                    sx={{ ...style }}
                    defaultValue=''

                />
                <TextField
                    fullWidth
                    label="Large"
                    variant="outlined"
                    {...register("large", { required: "Required." })}
                    error={Boolean(errors.large)}
                    helperText={errors.large?.message}
                    sx={{ ...style }}
                    defaultValue=''

                />


                <Box sx={{ mb: 2 }}>
                    <div>
                        <Button
                            type="submit"
                            variant="outlined"
                            color="primary"
                            sx={{ ...style }}
                            endIcon={<SendIcon />}
                        >
                            {props.step === 2 ? 'Finish' : 'Next'}
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
                    </div>
                </Box>
            </form>
        </Container>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(AddPrice)
