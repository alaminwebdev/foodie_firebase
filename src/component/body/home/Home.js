import React, { useState } from 'react';
import DISHES from '../../../data/dishes';
import {
    Carousel,
    CarouselItem,
    CarouselControl
} from 'reactstrap';
import Slider from './Slider';
import './home.css';



const Home = props => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === DISHES.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? DISHES.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }


    const slideComponent = DISHES.map((item, index) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.id}
            >
                <Slider
                    sliderItem={item}
                />
            </CarouselItem>
        );
    });



    return (
        <div id="banner">
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                interval={false}
            >
                {slideComponent}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} className="arrow left"/>
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} className="arrow right" />
            </Carousel>
        </div>
    )
};

export default Home;
