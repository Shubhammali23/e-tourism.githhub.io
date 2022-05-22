import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Itinerarymid from "./Itinerarymid";
import "../Css/Nav.css"

function Itinerarycard() {
  const [subsectors, setSubsector] = useState([]);
  const { cat_id } = useParams();
  const sub_id = sessionStorage.getItem("sub_id");
  sessionStorage.setItem("itr_id", cat_id);

  useEffect(() => {
    fetch("http://localhost:8070/crud/subsector/" + cat_id)
      .then(res => res.json()).then((result) => { setSubsector(result); });
  }, []
  );

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
                    <NavLink className="link nvl" to={"/subpage/" + sub_id}> {sub_id} </NavLink> {" >> "}
                    <NavLink className="link nvl" to={"/itinerarypage/" + cat_id}> {cat_id}  </NavLink>
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
                    subsectors.map(sec => {
                      return <Itinerarymid
                        key={sec.cat_id}
                        imagepath={sec.imagepath}
                        catname={sec.catname}
                        days={sec.days}
                        cost={sec.cost}
                        catmaster_id={sec.catmaster_id}
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

export default Itinerarycard;