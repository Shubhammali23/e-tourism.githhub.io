import React from "react";

import Slider from "../Components/Slider";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Itineraryview from "../Components/Itineraryview";


function Itineraryviewpage() {
    return (
        <div>
            <Slider />
            <Navbar />
            <Itineraryview/>
            <hr></hr>
            <Footer />
        </div>
    );
}

export default Itineraryviewpage;

