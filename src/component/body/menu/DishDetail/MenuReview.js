import React from 'react';
import Loading from '../../Loading';
import dateFormat from 'dateformat';


const MenuReview = props => {
    //console.log(props);
    const review = props.review.map((eachreview) => {
        //console.log(eachreview.author)
        return (
            <div className="mt-4 " key={eachreview.id}>
                {eachreview.author}
                <p className="my-0">
                    <small>Rating: {eachreview.rating + "*"}</small>
                </p>


                {eachreview.comment}
                <p className="my-0">
                    <small>
                        {dateFormat(eachreview.date, "dddd, mmmm dS, yyyy")}
                    </small>
                </p>

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