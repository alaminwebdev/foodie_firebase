import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';

export default function Loading() {
    return (
        <Container maxWidth='xl'>
            <Grid container spacing={2} sx={{ my: 5 }}>
                <Grid item >
                    <Skeleton />
                    <Skeleton animation="wave" />
                    <Skeleton animation={false} />
                </Grid>
            </Grid>
        </Container >
    )
}
