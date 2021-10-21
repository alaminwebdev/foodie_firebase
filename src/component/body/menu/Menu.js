import React, { Component } from 'react';
import './menu.css';
import MenuItem from './Menuitem';
import MenuDetail from './MenuDetail';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from "react-redux";
import { fetchDishes, fetchComments } from '../../../redux/actionCreators';
import Loading from '../Loading';


// accept state as a props from intial state 
const mapStateToProps = state => {
    return {
        //Inside Reducer dishes Pass two things , 1: isLoading Function 2: dishes array
        Dishes: state.dishes.dishes,
        dishLoading: state.dishes.isLoading,

        //Inside Reducer comments Pass two things , 1: isLoading Function 2: comments array
        Comments: state.comments.comments,
        commentLoading:state.comments.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDishes: () => dispatch(fetchDishes()),
        fetchComments:() => dispatch(fetchComments())
    }
}

class Menu extends Component {
    state = {
        selectedDish: null,
        modalOpen: false
    }

    onDishselect = dish => {
        this.setState({
            selectedDish: dish,
            modalOpen: !this.state.modalOpen
        });

        //console.log(dish)
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        });
    }

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
    }

    render() {
        document.title = "Menu"


        if (this.props.dishLoading) {
            return (
                <Loading />
            )
        } else {
            //console.log(this.props.Dishes);
            const menu = this.props.Dishes.map(item => {
                return (
                    
                    <MenuItem
                        key={item.id}
                        name={item.name}
                        img={item.image}
                        DishSelect={() => this.onDishselect(item)}
                    />
                );

            })

            let dishdetail = null;
            if (this.state.selectedDish != null) {
                //console.log(this.state.comments);
                const comments = this.props.Comments.filter(comment => {
                    return comment.dishId === this.state.selectedDish.id;
                })
                //console.log(comments);
                dishdetail = <MenuDetail
                    key={comments.id}
                    eachdish={this.state.selectedDish}
                    comment_arr={comments}
                    commentLoading={this.props.commentLoading}

                />;
            }
            return (
                <div className="row">
                    {menu}
                    <Modal isOpen={this.state.modalOpen} contentClassName="" >
                        <ModalBody>
                            {dishdetail}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            )
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);


