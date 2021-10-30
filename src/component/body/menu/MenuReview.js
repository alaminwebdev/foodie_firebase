import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import Loading from '../Loading';
import dateFormat from 'dateformat';


const MenuReview = props => {
    //console.log(props);
    const review = props.review.map((eachreview) => {
        //console.log(eachreview.author)
        return (
            <div className="mt-4 " key={eachreview.id}>
                <Toast>
                    <ToastHeader>
                        {eachreview.author}
                        <p className="my-0">
                            <small>Rating:  {eachreview.rating + "*"}</small>
                        </p>
                    </ToastHeader>
                    <ToastBody>
                        {eachreview.comment}
                        <p className="my-0">
                            <small>
                                {dateFormat(eachreview.date, "dddd, mmmm dS, yyyy")}
                            </small>
                        </p>
                    </ToastBody>
                </Toast>
            </div>

        )
    })


    if (props.commentLoading) {
        return (
            <Loading />
        )
    } else {
        return (
            <div>
                {review}
            </div>
        )
    }
}

export default MenuReview;