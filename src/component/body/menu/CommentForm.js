import React, { Component } from 'react';
import { Button, FormGroup, Label } from 'reactstrap';
import { Form, Control, Errors , actions } from 'react-redux-form';
import { addComment } from '../../../redux/actionCreators';
import { connect } from 'react-redux';



const mapDispatchToProps = dispatch => {
    return{
        addComment: (dishId, author, rating, comment) => dispatch(addComment(dishId, author, rating, comment)),
        resetCommentForm: () =>{
            dispatch(actions.reset('commentValue'))
        } 
    }
}


class CommentForm extends Component {
     constructor(props) {
        super(props); 
     }

    handleSubmit = values =>{
        //console.log(values)
        this.props.addComment(this.props.dishId, values.author, values.rating, values.comment);
        //commentValue.addComment();
        this.props.resetCommentForm();
        
    }


    
    render() {
        //console.log(this.props);
        return (
            <div className="py-3">
                <Form model="commentValue" onSubmit={values => this.handleSubmit(values)} >
                    <FormGroup>
                        <Label htmlFor="exampleText">Name</Label>
                        <Control.text
                            model=".author"
                            name="author"
                            placeholder="Write Your Name"
                            className="form-control"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="exampleText">Insert Your Rating</Label>
                        <Control.select
                            model=".rating"
                            name="rating"
                            className="form-control"
                            
                        >

                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Control.select>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="exampleText">Write Your Comments</Label>
                        <Control.text
                            model=".comment"
                            name="comment"
                            className="form-control"
                        />
                    </FormGroup>
                    <Button className="mt-3">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default  connect(null, mapDispatchToProps) (CommentForm);

