import React from 'react';
import Header from './header/Header';
import Body from './body/Body';
import Footer from './footer/Footer';


const MainComponent=()=>{
    document.title = "Resturent"
    return(
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    )
}
export default MainComponent;