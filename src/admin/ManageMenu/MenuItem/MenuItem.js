import React, { useState } from 'react';

import DialogContentForm from './DialogContentForm';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Typography from '@mui/material/Typography';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';
import DeleteIcon from '@mui/icons-material/Delete';
import EditRoundedIcon from '@mui/icons-material/EditRounded';


import { Grid } from '@mui/material';




const MenuItem = props => {
    //console.log(props);

    const [open, setOpen] = useState(false);

    const handleClickOpen = id => {
        setOpen(true);
        //console.log(id);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const varients = props.item.varients.map((item) => {
        return (
            <TableRow key={Math.random()}>
                <TableCell>{item}</TableCell>
                <TableCell align="right">1</TableCell>
                <TableCell align="right">{props.item.price[0][item]}</TableCell>
            </TableRow>
        )
    })

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card >
                <CardMedia
                    component="img"
                    height="250"
                    image={props.item.image}
                    alt=""
                />
                <CardContent sx={{ pb: 1 }}>
                    <Typography variant="h6" component="div" >
                        Name: {props.item.name}
                        <Chip label={props.item.label} sx={{ ml: 1, fontWeight: 400, lineHeight: 1 }} size="small" variant="outlined" />
                    </Typography>

                    <Typography sx={{ mb: 1.5 }} variant="caption" color="text.secondary">
                        {props.item.description}
                    </Typography>
                    <TableContainer >
                        <Table sx={{}} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell >Varient</TableCell>
                                    <TableCell align="right">Qty.</TableCell>
                                    <TableCell align="right">Price</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {varients}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-evenly', pb: 2 }}>
                    <Chip
                        label="Edit Item"
                        onClick={() => handleClickOpen(props.item.id)}
                        icon={<EditRoundedIcon />}
                        variant="outlined"
                    />
                    <Chip
                        label="Delete Item"
                        onClick={() => props.remove(props.item.id)}
                        icon={<DeleteIcon />}
                        variant="outlined"
                    />
                </CardActions>
            </Card>

            <Dialog open={open} fullWidth>
                <DialogTitle>{props.item.name}</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{ mb: 2 }}>
                        {props.item.description}
                    </DialogContentText>

                    <DialogContentForm item={props.item} close={handleClose} update={props.update} />
                </DialogContent>
            </Dialog>
            {/* <MenuDialog open={open} handleClose={handleClose} item={props.item} update={props.update} /> */}
        </Grid>

    )
}

export default MenuItem
