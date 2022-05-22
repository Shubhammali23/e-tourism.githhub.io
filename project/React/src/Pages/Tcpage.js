import React from "react";

import Slider from "../Components/Slider";
import Navbar from "../Components/Navbar";
import Crawling from "../Components/Crawling";
import Tc from "../Components/Tc";
import Footer from "../Components/Footer";

function Homepage() {
    return (
        <div>
            <Slider />
            <Navbar />
            <Crawling />
            <Tc />
            <hr></hr>
            <Footer />  
        </div>
    );
}

export default Homepage;

