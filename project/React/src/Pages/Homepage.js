import React from "react";

import Slider from "../Components/Slider";
import Navbar from "../Components/Navbar";
import Crawling from "../Components/Crawling";
import Homecard from "../Components/Homecard";
import Footer from "../Components/Footer";

function Homepage() {
    return (
        <div>
            <Slider />
            <Navbar />
            <Crawling />
            <Homecard />
            <hr></hr>
            <Footer />  
        </div>
    );
}

export default Homepage;

