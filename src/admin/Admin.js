import React from 'react';
import AddMenu from './AddMenu/AddMenu';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const Admin = () => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={0}>
                <Grid item lg={12}>
                    <Typography variant="h3" color="initial" sx={{textAlign:'center', my:3}}>Admin Panel</Typography>
                    <AddMenu />
                </Grid>
            </Grid>
        </Container>

    )
}

export default Admin
