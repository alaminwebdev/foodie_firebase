import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const varients = [
    "small",
    "medium",
    "large"
]

const Varients = (props) => {
    const [quantity, setQuantity] = useState(1)
    const [varient, setVarient] = useState('small')

    //console.log(props.price)
    //console.log(quantity, varient)

    const vari = props.varients.map((varient, index) => {
        //console.log(varient)
        return (
            <MenuItem key={index} value={varient}>{varient}</MenuItem>
        )
    })

    return (
        <Grid container spacing={2}>
            <Grid item lg={6}>
                <FormControl fullWidth >
                    <InputLabel id="demo-simple-select-label">Select</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Select"
                        fullWidth
                        value={varient}
                        onChange={(e) => { setVarient(e.target.value) }}
                    >

                        {vari}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item lg={6}>
                <FormControl fullWidth >
                    <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Quantity"
                        autoWidth
                        value={quantity}
                        onChange={(e) => { setQuantity(e.target.value) }}
                    >

                        {[...Array(5).keys()].map((x, i) => {
                            return <MenuItem key={i} value={i + 1}>{i + 1}</MenuItem>
                        })}
                    </Select>
                </FormControl>
            </Grid>
            <Typography variant="body2" color="text.secondary">
                Price: {props.price[varient] * quantity}
            </Typography>

        </Grid>
    )


}

export default Varients

