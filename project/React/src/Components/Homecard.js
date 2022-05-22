import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import Homemid from "./Homemid";
import "../Css/Nav.css"

function Homecard() {
  const [homepages, setHomepage] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8070/crud/homepage")
      .then(res => res.json()).then((result) => { setHomepage(result); });
  }, []);

  return (
    <div>
      <div>
        <div className="my-4">
          <div className="container-fluied mb-5">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row gy-4">
                  <div >
                    <NavLink className="link nvl" to="/homepage"> Home </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="my-4">
          <div className="container-fluied mb-5">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row gy-4">
                  {
                    homepages.map(home => {
                      return <Homemid
                        key={home.catmaster_id}
                        imagepath={home.imagepath}
                        catname={home.catname}
                        cat_id={home.cat_id}
                      />
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homecard;