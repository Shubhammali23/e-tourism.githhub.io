import React from "react";
import { NavLink } from "react-router-dom";


const Homemid = (props) => {
  let cat_id = props.cat_id;

  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={props.imagepath} class="card-img-top" alt={props.imagepath} />
          <div className="card-body">
            <h5 className="card-title">{props.catname}</h5>
            <NavLink to={'/subpage/' + cat_id} className='btn btn-warning btn-details'>Details</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homemid;
