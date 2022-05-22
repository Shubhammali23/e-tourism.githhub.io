import React from "react";

import Slider from "../Components/Slider";
import Navbar from "../Components/Navbar";
import Crawling from "../Components/Crawling";
import About from "../Components/About";
import Footer from "../Components/Footer";

function Aboutpage() {
    return (
        <div>
            <Slider />
            <Navbar />
            <Crawling />
            <About />
            <hr></hr>
            <Footer />  
        </div>
    );
}

export default Aboutpage;

