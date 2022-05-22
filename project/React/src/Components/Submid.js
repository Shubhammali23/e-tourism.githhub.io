

import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from 'react';
import notecontext from "../Contaxt/NoteContext";

const Submid = (props) => {
  let cat_id = props.cat_id;
  let flag = props.flag;
  let catmaster_id = props.catmaster_id;


  const a = useContext(notecontext)
  const logcheck = a.state.logcheck

  if (flag == "N") {
    return (
      <>
        <div className="col-md-4 col-10 mx-auto">
          <div className="card">
            <img src={props.imagepath} class="card-img-top" alt={props.imagepath} />
            <div className="card-body">
              <h5 className="card-title">{props.catname}</h5>
              <NavLink to={'/itinerarypage/' + cat_id} className='btn btn-warning btn-details'>View Details</NavLink>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (flag == "Y") {
    if (logcheck == "0") {
      return (
        <>
          <div className="col-md-4 col-10 mx-auto">
            <div className="card">
              <img src={props.imagepath} class="card-img-top" alt={props.imagepath} />
              <div className="card-body">
                <h5 className="card-title">{props.catname}</h5>
                <p className="card-title">{props.days}</p>
                <p className="card-title">{props.cost}</p>
                <NavLink to={`/itineraryviewpage/` + catmaster_id} className='btn btn-warning btn-details'>View Details</NavLink>&nbsp;&nbsp;
                <NavLink to={`/login`} className='btn btn-warning btn-details'>Book Now</NavLink>
              </div>
            </div>
          </div>
        </>
      );
    }
    if (logcheck == "1") {
      return (
        <>
          <div className="col-md-4 col-10 mx-auto">
            <div className="card">
              <img src={props.imagepath} class="card-img-top" alt={props.imagepath} />
              <div className="card-body">
                <h5 className="card-title">{props.catname}</h5>
                <p className="card-title">{props.days}</p>
                <p className="card-title">{props.cost}</p>
                <NavLink to={`/itineraryviewpage/` + catmaster_id} className='btn btn-warning btn-details'>View Details</NavLink>&nbsp;&nbsp;
                <NavLink to={`/bookingpage/` + catmaster_id} className='btn btn-warning btn-details'>Book Now</NavLink>
              </div>
            </div>
          </div>
        </>
      );
    }

  }
}

export default Submid;
