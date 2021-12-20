import React, { useState } from "react";
import { connect } from "react-redux";
import { adminAction } from "../redux/adminActionCreators";
import { useFormik } from "formik";
import Collapse from "@mui/material/Collapse";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const mapDispatchToProps = (dispatch) => {
    return {
        adminAction: (email, password) => dispatch(adminAction(email, password)),
    };
};

const mapStateToProps = (state) => {
    return {
        token: state.adminState.adminToken,
        //authMessage: state.authState.authMessage,
    };
};

const AdminLogin = (props) => {
    const [response, setResponse] = useState(true);
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },

        //custom validation using formik validate
        validate: (values) => {
            const errors = {};
            if (!values.email) {
                errors.email = "Required";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = "Invalid email address";
            }

            if (!values.password) {
                errors.password = "Required";
            } else if (values.password.length < 6) {
                errors.password = "Password must be 6 characters long";
            }

            //console.log("errors", errors)
            return errors;
        },

        //submit values
        onSubmit: (values) => {
            props.adminAction(values.email, values.password);
            if (props.token !== null) {
                //console.log(props.token);
                props.history.push("/admin");
            } else {
                console.log("You have to login first !");
            }
            //alert(JSON.stringify(values, null, 2))
        },
    });

    const style = {
        mt: 5,
    };

    return (
        <Container maxWidth="md">
            <form onSubmit={formik.handleSubmit}>
                <Collapse in={response}>
                    <Alert severity="error" sx={{ mt: 3 }}>
                        its an alert box
                    </Alert>
                </Collapse>

                <TextField
                    name="email"
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
                    name="password"
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

                <Button type="submit" variant="outlined" color="primary" sx={{ ...style }} endIcon={<SendIcon />}>
                    {props.authLoading ? <CircularProgress size="15px" sx={{ color: "#007FFF", mr: 1 }} /> : null}
                    Login
                </Button>
            </form>
        </Container>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin);
