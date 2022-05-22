import React from "react";

import Slider from "../Components/Slider";
import Navbar from "../Components/Navbar";
import Crawling from "../Components/Crawling";
import Feedback from "../Components/Feedback";
import Footer from "../Components/Footer";

function Homepage() {
    return (
        <div>
            <Slider />
            <Navbar />
            <Crawling />
            <Feedback />
            <hr></hr>
            <Footer />  
        </div>
    );
}

export default Homepage;

