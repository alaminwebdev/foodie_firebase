import React from 'react'

const Slider = (props) => {
    const sliderItem = props.sliderItem
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 sliderInfo">
                    <div className="itemLevel">
                        <p>{sliderItem.category}</p>
                    </div>
                    <div className="itemHeader">
                        <h1>{sliderItem.name}</h1>
                    </div>
                    <div className="itemText">
                        <p>{sliderItem.description}</p>
                    </div>
                    <div className="itemButton">
                        <button type="button" className="btn btn-danger">Danger</button>
                    </div>
                </div>
                <div className="col-lg-6 itemImg">
                    <img src={sliderItem.image} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Slider
