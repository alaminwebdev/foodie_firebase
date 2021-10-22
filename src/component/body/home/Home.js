import React, { useState } from 'react';
import { images, item } from '../../../data/image';
import DISHES from '../../../data/dishes';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';
import './home.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'

const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

let easing = [0.6, -0.05, 0.01, 0.50];

const fadeInUp = {
    initial: {
        y: 60,
        opacity: 0,
        transition: { duration: 0.8, ease: easing }
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: easing
        }
    }
};




const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};



const Home = () => {



    const [[page, direction], setPage] = useState([0, 0]);
    //const imageIndex = wrap(0, images.length, page);
    //const itemIndex = wrap(0, item.length, page);
    const Dishes = wrap(0, DISHES.length, page);


    console.log(DISHES[Dishes].name);
    const paginate = newDirection => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <div className="slide-container container-fluid">
            <AnimatePresence initial={false} >
                <motion.div
                    className='slideText'
                    key={page}
                    initial='initial'
                    animate='animate'
                    variants={stagger}
                >

                    <motion.p variants={fadeInUp} > {DISHES[Dishes].label} </motion.p>
                    <motion.h1 variants={fadeInUp}  > {DISHES[Dishes].name}  </motion.h1>




                </motion.div>
                <div className="slideImage">
                    <motion.img
                        className="itemImage"
                        key={page}
                        src={DISHES[Dishes].image}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 500, damping: 30 },
                            opacity: { duration: 0.5 }
                        }}
                        whileHover={{ scale: 1.05 }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}

                    />
                </div>
            </AnimatePresence>

            <div className="next" onClick={() => paginate(1)}></div>
            <div className="prev " onClick={() => paginate(-1)}></div>
        </div>
    )
}

export default Home
