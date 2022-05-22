import React from "react";

import Slider from "../Components/Slider";
import Navbar from "../Components/Navbar";
import Crawling from "../Components/Crawling";
import FAQs from "../Components/FAQs";
import Footer from "../Components/Footer";

function Faqspage() {
    return (
        <div>
            <Slider />
            <Navbar />
            <Crawling />
            <FAQs />
            <hr></hr>
            <Footer />  
        </div>
    );
}

export default Faqspage;

