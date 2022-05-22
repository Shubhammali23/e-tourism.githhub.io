import React from "react";

import Slider from "../Components/Slider";
import Navbar from "../Components/Navbar";
import Crawling from "../Components/Crawling";
import Itinerarycard from "../Components/Itinerarycard";
import Footer from "../Components/Footer";


function Itinerarypage() {
    return (
        <div>
            <Slider />
            <Navbar />
            <Crawling />
            <Itinerarycard />
            <hr></hr>
            <Footer />
        </div>
    );
}

export default Itinerarypage;

