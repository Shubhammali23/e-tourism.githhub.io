

import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

import Submid from "./Submid";
import "../Css/Nav.css"


function Subcard() {
  const [subpages, setSubpage] = useState([]);
  const { cat_id } = useParams();
  sessionStorage.setItem("sub_id", cat_id);

  useEffect(() => {
    fetch("http://localhost:8070/crud/subpage/" + cat_id)
      .then(res => res.json())
      .then((result) => { setSubpage(result); }
      );
  }, []);

  console.log(subpages);
  return (
    <div>
      <div>
        <div className="my-4">
          <div className="container-fluied mb-5">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row gy-4">
                  <div >
                    <NavLink className="link nvl" to="/homepage"> Home </NavLink> {" >> "}
                    <NavLink className="link nvl" to={"/subpage/" + cat_id}> {cat_id} </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container-fluied mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                {
                  subpages.map(sub => {
                    return <Submid
                      key={sub.cat_id}
                      imagepath={sub.imagepath}
                      catname={sub.catname}
                      cat_id={sub.cat_id}
                      days={sub.days}
                      cost={sub.cost}
                      flag={sub.flag}
                      catmaster_id={sub.catmaster_id}
                    />
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subcard;