import React from 'react';
import { NavLink } from "react-router-dom";

function Card({ person }) {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={person.imagepath} class="card-img-top" alt={person.imagepath} />
                    <div className="card-body">
                        <h5 className="card-title">{person.catname}</h5>
                        <NavLink to={'/itineraryviewpage/' + person.catmaster_id} className='btn btn-warning btn-details'>View Details</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;