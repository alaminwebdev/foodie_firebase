import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import MenuReview from './MenuReview';
import CommentForm from './CommentForm';
import { baseUrl } from '../../../redux/actionCreators'

const MenuDetail = props => {
    const dishes = props.eachdish;
    const comments = props.comment_arr;
    const commentLoading = props.commentLoading
    //const addComment=props.addComment
    //console.log(dishes);

    //console.log(props);

    return (
        <div >
            <Card>
                <CardImg top width="100%" src={baseUrl + dishes.image} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{dishes.name}</CardTitle>
                    <CardText>{dishes.description}</CardText>
                    <CardText>
                        <small className="text-muted">${dishes.price}</small>
                    </CardText>
                    <MenuReview key={dishes.id} review={comments} commentLoading={commentLoading} />
                    <CommentForm dishId={dishes.id} />
                </CardBody>
            </Card>
        </div>
    )

}

export default MenuDetail;