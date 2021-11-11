import React, { useState } from 'react';
import { useFormik } from 'formik';

import { connect } from 'react-redux';
import { authAction } from '../../../redux/authActionCreators';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


const mapDispatchToProps = dispatch => {
    return {
        authAction: (email, password, mode) => dispatch(authAction(email, password, mode)),
    }
}


const Auth = props => {

    const [authMode, setauthMode] = useState('login');
    const handleAuthMode = (event, newauthMode) => {
        setauthMode(newauthMode);
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirm: ''
        },

        //custom validation using formik validate
        validate: (values) => {
            const errors = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 6) {
                errors.password = 'Password must be 6 characters long';
            }

            if (authMode === 'signup') {
                if (!values.passwordConfirm) {
                    errors.passwordConfirm = 'Required';
                } else if (values.password !== values.passwordConfirm) {
                    errors.passwordConfirm = 'Password does not match';
                }
            }
            //console.log("errors", errors)
            return errors;
        },

        //submit values
        onSubmit: (values) => {
            props.authAction(values.email, values.password, authMode)
            //console.log("values", values)
            //alert(JSON.stringify(values, null, 2))
        },

    });

    const style = {
        mt: 5
    }

    //console.log(props)
    return (
        <Container maxWidth="md">
            <ToggleButtonGroup
                value={authMode}
                exclusive
                onChange={handleAuthMode}
                sx={{ ...style, textAlign: 'center' }}
                color="secondary"
            >
                <ToggleButton value="login" >
                    <Typography variant="subtitle2" color="initial">Login</Typography>
                </ToggleButton>
                <ToggleButton value="signup" >
                    <Typography variant="subtitle2" color="initial">Sign Up</Typography>
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

                {authMode === 'signup' ? <>
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
                </> : null}

                <Button

                    type="submit"
                    variant="outlined"
                    color="primary"
                    sx={{ ...style }}
                >
                    {authMode === 'login' ? 'Login' : 'Sign Up'}
                </Button>
            </form>
        </Container>
    )
}

export default connect(null, mapDispatchToProps)(Auth)
