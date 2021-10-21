import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';
import {baseUrl} from '../../../redux/actionCreators'

const MenuItem = (props) => {
    //console.log(props);

    return (
        <div className="col-lg-4 pt-5 menuitem">
            <Card>
                <CardBody>
                    <CardImg src={baseUrl+props.img} className="card-img">
                    </CardImg>
                    <CardImgOverlay>
                        <CardTitle onClick={props.DishSelect} >{props.name}</CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>

        </div>
    )
}

export default MenuItem;

