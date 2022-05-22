import React from "react";

import Slider from "../Components/Slider";
import Navbar from "../Components/Navbar";
import Crawling from "../Components/Crawling";
import Subcard from "../Components/Subcard";
import Footer from "../Components/Footer";

function Subpage() {
    return (
        <div>
            <Slider />
            <Navbar />
            <Crawling />
            <Subcard />
            <hr></hr>
            <Footer />
        </div>
    );
}

export default Subpage;