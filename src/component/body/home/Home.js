import React, { useState } from 'react';

import { images, item } from '../../../data/image';
import DISHES from '../../../data/dishes';

import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import Typography from '@mui/material/Typography';
import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import LabelRoundedIcon from '@mui/icons-material/LabelRounded';
import './home.css';


//framer motion effect start
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
//framer motion effect end


//mui css style start
const slideButtonStyle = {
    color: '#fff',
    bgcolor: '#007FFF',
    "&:hover": { bgcolor: '#007FFF' }
}

const slideLabelStyle = {
    borderColor: '#E5E8EC',
    color: '#007FFF',
    "&:hover": { borderColor: '#E5E8EC' },
    textTransform:'capitalize',
    ml:1,
    mb:1
}

//mui css style end


const Home = () => {

    const [[page, direction], setPage] = useState([0, 0]);
    //const imageIndex = wrap(0, images.length, page);
    //const itemIndex = wrap(0, item.length, page);
    const Dishes = wrap(0, DISHES.length, page);


    //console.log(DISHES[Dishes].name);
    const paginate = newDirection => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <Container maxWidth='xl'
            className="slide-container"
            sx={{
                // 1 means 8px 

                alignItems: 'center',
                py: 10,
                position: 'relative'
            }}
        >
            <AnimatePresence initial={false} >  {/* AnimatePresence this tag for framer motion */}

                <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} sm={12} md={6} lg={7}>
                        <Box sx={{}}>
                            {/* motion this tag for framer motion */}
                            <motion.div
                                className='slideText'
                                key={page}
                                initial='initial'
                                animate='animate'
                                variants={stagger}
                            >

                                <motion.div variants={fadeInUp} >
                                    <Button variant="outlined"  sx={{ ...slideLabelStyle }} startIcon={<LabelRoundedIcon />}>
                                        {DISHES[Dishes].label}
                                    </Button>
                                </motion.div>

                                <motion.div variants={fadeInUp} >
                                    <Typography variant="h1"  sx={{ fontWeight: 600, px: 0, color: "#007FFF" }}>
                                        {DISHES[Dishes].name}
                                    </Typography>
                                </motion.div>

                                <motion.div variants={fadeInUp} >
                                    <Typography variant="h1"  gutterBottom sx={{ fontWeight: 600, px: 0 }}>
                                        {DISHES[Dishes].subtitle}
                                    </Typography>
                                </motion.div>

                                <motion.div variants={fadeInUp} >
                                    <Typography variant="subtitle2"  sx={{ ml:1 , pr: '30%' }}>
                                        {DISHES[Dishes].description}
                                    </Typography>
                                </motion.div>

                            </motion.div>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={5}>
                        <Box className="slideImage" sx={{ borderRadius: 16}}>
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
                        </Box>
                    </Grid>
                </Grid>

                <Box className="slideButton">
                    <Fab
                        sx={{ ...slideButtonStyle, mr: 1 }}
                        size="small"
                        aria-label="previous"
                        onClick={() => paginate(-1)}
                    >
                        <ArrowLeftRoundedIcon />
                    </Fab>

                    <Fab
                        sx={{ ...slideButtonStyle }}
                        size="small"
                        aria-label="next"
                        onClick={() => paginate(1)}
                    >
                        <ArrowRightRoundedIcon />
                    </Fab>
                </Box>
            </AnimatePresence>
        </Container>
    )
}

export default Home
