import React from 'react';
import { useFormik } from 'formik';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const style = {
    mt: 5
}

const Auth = () => {

    const [alignment, setAlignment] = React.useState('right');
    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirm: ''
        },
        onSubmit: (values) => {
            console.log("values", values)
            //alert(JSON.stringify(values, null, 2));
        },

        validate: (values) => {
            const errors = {};

            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 4) {
                errors.password = 'Password must be 4 characters long';
            }

            if (!values.passwordConfirm) {
                errors.passwordConfirm = 'Required';
            } else if (values.password !== values.passwordConfirm) {
                errors.passwordConfirm = 'Password does not match';
            }

            console.log("errors", errors)
            return errors;
        }
    });
    return (
        <Container maxWidth="md">
            <ToggleButtonGroup
                value={alignment}
                exclusive

                onChange={handleAlignment}
                sx={{...style, textAlign:'center'}}
                color="secondary"
            >
                <ToggleButton value="left" >
                    <Typography variant="subtitle2" color="initial">SignUp</Typography>
                </ToggleButton>
                <ToggleButton value="right" >
                    <Typography variant="subtitle2" color="initial">SignIn</Typography>
                </ToggleButton>
            </ToggleButtonGroup>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    name='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}

                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}

                    sx={{ ...style }}
                    fullWidth
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                />
                <TextField
                    name='password'
                    value={formik.values.password}
                    onChange={formik.handleChange}

                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}

                    sx={{ ...style }}
                    fullWidth
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                />

                <TextField
                    name='passwordConfirm'
                    value={formik.values.passwordConfirm}
                    onChange={formik.handleChange}

                    error={formik.touched.passwordConfirm && Boolean(formik.errors.passwordConfirm)}
                    helperText={formik.touched.passwordConfirm && formik.errors.passwordConfirm}

                    sx={{ ...style }}
                    fullWidth
                    id="outlined-basic"
                    label="Confirm Password"
                    variant="outlined"
                />


                <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    sx={{ ...style }}
                >
                    SignUp
                </Button>
            </form>
        </Container>
    )
}

export default Auth
