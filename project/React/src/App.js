import React, { useState, useEffect } from "react"; //{} means javascript function we import , we import two function

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"   // for responsive side
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/Css/App.css";

import NoteState from "./Contaxt/NoteState";

import Showcasepage from "./Pages/Showcasepage";
import Homepage from "./Pages/Homepage";
import Subpage from "./Pages/Subpage";
import Itinerarypage from "./Pages/Itinerarypage";
import Itineraryviewpage from "./Pages/Itineraryviewpage";
import Bookingpage from "./Pages/Bookingpage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

import About from "./Pages/Aboutpage";
import FAQs from "./Pages/Faqspage";
import Feedback from "./Pages/Feedbackpage";
import Tc from "./Pages/Tcpage";
import Search from "./Components/Search1";

function App() {

  const [searchpage, setSearchpage] = useState([]);

        useEffect(() => {
            fetch("http://localhost:8070/crud/searchpage")
                .then(res => res.json()).then((result) => { setSearchpage(result); });
        }, []
        ); //we create array

  return (
    <>
      <NoteState>
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Showcasepage />} />
              <Route path="/homepage" element={<Homepage />} />
              <Route path="/subpage/:cat_id" element={<Subpage />} />
              <Route path="/itinerarypage/:cat_id" element={<Itinerarypage />} />
              <Route path="/itineraryviewpage/:catmaster_id" element={<Itineraryviewpage />} />

              <Route path="/bookingpage/:catmaster_id" element={<Bookingpage />} />
              <Route path="/login" element={<Login />} />
              {/* <Route path="/login/:catmaster_id" element={<Login />} /> */}
              <Route path="/signup" element={<Signup />} />

              <Route path="/about" element={<About />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/tc" element={<Tc />} />

              <Route path="/search" element={<Search details={searchpage} />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;