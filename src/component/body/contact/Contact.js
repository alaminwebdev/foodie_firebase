import React, { Component } from 'react';
import './contact.css';
import { Form, Control, Errors, actions } from 'react-redux-form';
import { connect } from 'react-redux';
import { baseUrl } from '../../../redux/actionCreators';
import axios from 'axios';

const mapDispatchToProps = dispatch => {
    return {
        resetContactForm: () => {
            dispatch(actions.reset('formValue'))
        }
    }
}


//
const requiredValue = val => val && val.length;

const isNumber = val => !isNaN(Number(val));

const validEmail = val => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(val);


// dispatch 

class Contact extends Component {
    state = {
        alertShow: false,
        alertType: null,
        alertText: null
    }

    handleSubmit = values => {
        //alert('A form was just  submitted: ' + this.state);
        //console.log(values)
        axios.post(baseUrl + "feedback", values)
            .then(response => response.status)
            .then(status => {
                if (status === 201) {
                    this.setState({
                        alertShow: true,
                        alertType: "success",
                        alertText: "Submited Successfully !"
                    });
                    setTimeout(() => {
                        this.setState({
                            alertShow: false
                        })
                    }, 2000)
                };
                //this will clear form 
                this.props.resetContactForm();
            })
            .catch(error =>{
                //console.log(error);
                this.setState({
                    alertShow: true,
                    alertType: "danger",
                    alertText: error.message
                });
                setTimeout(()=>{
                    
                })
            })
    }

    render() {
        document.title = "Contact"
        return (
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1 className="pt-5">Send Your Feedback</h1>
                </div>
                <div className="col-lg-8 m-auto py-5">
                    {/* <Alert isOpen={this.state.alertShow} color={this.state.alertType}>
                        {this.state.alertText}
                    </Alert>
                    <Form model="formValue" onSubmit={values => this.handleSubmit(values)} >
                        <FormGroup>
                            <Label htmlFor="name">Name</Label>
                            <Control.text
                                model=".name"
                                name="name"
                                placeholder="Write Your Name"
                                className="form-control"
                                validators={{
                                    requiredValue
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".name"
                                show="touched"
                                messages={{
                                    requiredValue: "Name is Required !"
                                }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="text">Phone</Label>
                            <Control.text
                                model=".phone"
                                name="phone"
                                placeholder="Write Your Phone"
                                className="form-control"
                                validators={{
                                    requiredValue,
                                    isNumber
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".phone"
                                show="touched"
                                messages={{
                                    requiredValue: "Required  !",
                                    isNumber: "Invalid Number",
                                }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="email">Email</Label>
                            <Control.text
                                model=".email"
                                name="email"
                                placeholder="Write Your Email"
                                className="form-control"
                                validators={{
                                    requiredValue,
                                    validEmail
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".email"
                                show="touched"
                                messages={{
                                    requiredValue: "Required !",
                                    validEmail: "Invalid Email",
                                }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Control.password
                                model=".password"
                                name="password"
                                placeholder="Your Password"
                                className="form-control"
                                validators={{
                                    requiredValue
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".password"
                                show="touched"
                                messages={{
                                    requiredValue: "Required   !"
                                }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="color">Choose Your Favourite Color</Label>
                            <Control.select
                                model=".color"
                                name="color"
                                className="form-control"
                                validators={{
                                    requiredValue
                                }}
                            >

                                <option>grapefruit</option>
                                <option>Lime</option>
                                <option>Coconut</option>
                                <option>Mango</option>
                            </Control.select>

                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="comment">Write Your Comments</Label>
                            <Control.textarea
                                model=".comment"
                                name="comment"
                                className="form-control"
                                validators={{
                                    requiredValue
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".comment"
                                show="touched"
                                messages={{
                                    requiredValue: "Required  !"
                                }}
                            />
                        </FormGroup>

                        <FormGroup check>
                            <Label check htmlFor="check">
                                <Control.checkbox
                                    model=".agree"
                                    name="agree"
                                    className="form-check-input"

                                />
                                It's A checkbox
                            </Label>
                        </FormGroup>
                        <Button className="mt-3">Submit</Button>
                    </Form > */}
                </div>
            </div>

        )
    }
}



export default connect(null, mapDispatchToProps)(Contact);