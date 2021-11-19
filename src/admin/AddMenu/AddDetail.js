import React, { useState } from 'react';
import { useForm, Controller } from "react-hook-form";

import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';




const AddDetail = props => {
    //console.log(props);

    const { register, handleSubmit, control, reset, formState: { errors, isSubmitSuccessful } } = useForm();

    const onSubmit = data => {
        console.log(data);
        props.next();
    }

    const [response, setResponse] = useState(false);
    
    const style = {
        mt: 3
    }

    return (
        <Container maxWidth="md">
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    fullWidth
                    label="Item name"
                    variant="outlined"
                    {...register("name", { required: "Item name is required." })}
                    error={Boolean(errors.name)}
                    helperText={errors.name?.message}
                    sx={{ ...style }}

                />


                <FormControl
                    error={Boolean(errors.label)}
                    fullWidth
                    sx={{ ...style }}
                >
                    <InputLabel id="demo-simple-select-label">Choose Label</InputLabel>
                    <Controller

                        render={({ field }) => (
                            <Select
                                {...field}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Choose Label"
                            >
                                <MenuItem value='1'>Hot</MenuItem>
                                <MenuItem value='2'>New Arrival</MenuItem>
                                <MenuItem value='3'>Top Rated</MenuItem>
                                
                            </Select>
                        )}

                        name="label"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: "Labal is required !"
                        }}
                    />
                    <FormHelperText style={{ color: '#d32f2f' }}>{errors.label?.message}</FormHelperText>
                </FormControl>


                <TextField
                    fullWidth
                    label="Description"
                    variant="outlined"
                    {...register("description", { required: "Description is required" })}
                    error={Boolean(errors.description)}
                    helperText={errors.description?.message}
                    sx={{ ...style }}
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

export default AddDetail
