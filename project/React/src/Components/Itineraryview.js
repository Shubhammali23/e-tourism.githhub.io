import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Costdetails from "./Costdetails";
import Datedetails from "./Datedetails";
import Daysdetails from "./Daysdetails";

import { useContext } from 'react';
import notecontext from "../Contaxt/NoteContext";
import "../Css/Nav.css"

const Itineraryview = () => {

  const a = useContext(notecontext)
  const logcheck = a.state.logcheck

  const [itinerarypage, setItinerarypage] = useState([]);

  const { catmaster_id } = useParams();

  const sub_id = sessionStorage.getItem("sub_id");
  const itr_id = sessionStorage.getItem("itr_id");

  useEffect(() => {
    fetch("http://localhost:8070/crud/itinerary/" + catmaster_id)
      .then(res => res.json()).then((result) => { setItinerarypage(result); });
  }, []
  );

  const [costpage, setCostpage] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8070/crud/costpage/" + catmaster_id)
      .then(res => res.json()).then((result) => { setCostpage(result); });
  }, []
  );

  if (logcheck == "0") {
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
                      <NavLink className="link nvl" to={"/itinerarypage/" + itr_id}> {itr_id}  </NavLink>{" >> "}
                      <NavLink className="link nvl" to={"/itineraryviewpage/" + catmaster_id}> Details  </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* date details */}
          <div className="row justify-content-md-center">
            <div className="col col-lg-10">
              <table class="table table-bordered ">
                <thead>
                  <tr class="table-active">
                    <th colspan="2">
                      <div class="row justify-content-center">
                        <div class="col-2">
                          <h3>Date Details</h3>
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <thead>
                  <tr align="center" class="table-primary">
                    <th scope="col">Start From</th>
                    <th scope="col">&nbsp;&nbsp;End At&nbsp;&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    costpage.map((val) => {
                      return <Datedetails
                        key={val.cat_id}
                        valid_from={val.valid_from}
                        valid_to={val.valid_to}
                        cost={val.cost}
                        extra={val.extra}
                        cwb={val.cwb}
                        cwob={val.cwob}

                      />
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>

          {/* detail and cost  */}
          <div className="row justify-content-md-center">
            {/* detail code */}
            <div className="col col-lg-5">
              <table class="table table-bordered ">
                <thead>
                  <tr class="table-active">
                    <th colspan="2">
                      <div class="row justify-content-center">
                        <div class="col-4">
                          <h3>Tour Details</h3>
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <thead class="justify-content-center">
                  <tr align="center" class="table-primary">
                    <th >Day Wise</th>
                    <th >Activity Detail</th>
                  </tr>
                </thead>
                <tbody >
                  {
                    itinerarypage.map((val) => {
                      return <Daysdetails
                        key={val.catmaster_id}
                        day_no={val.day_no}
                        activity={val.activity}
                        cat_id={val.cat_id}
                      />
                    })
                  }
                </tbody>
              </table>
            </div>

            {/* cost code */}
            <div className="col col-lg-5">
              <table class="table table-bordered ">
                <thead>
                  <tr class="table-active">
                    <th colspan="3">
                      <div class="row justify-content-center">
                        <div class="col-4">
                          <h3>Cost Details</h3>
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <thead>
                  <tr align="center" class="table-primary">
                    <th scope="col"></th>
                    <th scope="col">Type</th>
                    <th scope="col">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    costpage.map((val) => {
                      return <Costdetails
                        key={val.cat_id}
                        type={val.Type}
                        price={val.Price}
                        cost={val.cost}
                        extra={val.extra}
                        cwb={val.cwb}
                        cwob={val.cwob}
                      />
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <div className="row justify-content-md-center">
              <div className="col col-lg-10 text-center">
                <NavLink className="nav-link " to={`/login`}>
                  <button type="button" class="w-20 btn btn-warning btn-details">Book Now</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


  if (logcheck == "1") {
    return (
      <div>
        <div>
          <div className="my-4">
            <div className="container-fluied mb-5">
              <div className="row">
                <div className="col-10 mx-auto">
                  <div className="row gy-4">
                    <div >
                      <NavLink className="link" to="/homepage"> Home </NavLink> {" >> "}
                      <NavLink className="link" to={"/subpage/" + sub_id}> {sub_id} </NavLink> {" >> "}
                      <NavLink className="link" to={"/itinerarypage/" + itr_id}> {itr_id}  </NavLink>{" >> "}
                      <NavLink className="link" to={"/itineraryviewpage/" + catmaster_id}> Details  </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* date details */}
          <div className="row justify-content-md-center">
            <div className="col col-lg-10">
              <table class="table table-bordered ">
                <thead>
                  <tr class="table-active">
                    <th colspan="2">
                      <div class="row justify-content-center">
                        <div class="col-2">
                          <h3>Date Details</h3>
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <thead>
                  <tr align="center" class="table-primary">
                    <th scope="col">Start From</th>
                    <th scope="col">&nbsp;&nbsp;End At&nbsp;&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    costpage.map((val) => {
                      return <Datedetails
                        key={val.cat_id}
                        valid_from={val.valid_from}
                        valid_to={val.valid_to}
                        cost={val.cost}
                        extra={val.extra}
                        cwb={val.cwb}
                        cwob={val.cwob}

                      />
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>

          {/* detail and cost  */}
          <div className="row justify-content-md-center">
            {/* detail code */}
            <div className="col col-lg-5">
              <table class="table table-bordered ">
                <thead>
                  <tr class="table-active">
                    <th colspan="2">
                      <div class="row justify-content-center">
                        <div class="col-4">
                          <h3>Tour Details</h3>
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <thead class="justify-content-center">
                  <tr align="center" class="table-primary">
                    <th >Day Wise</th>
                    <th >Activity Detail</th>
                  </tr>
                </thead>
                <tbody >
                  {
                    itinerarypage.map((val) => {
                      return <Daysdetails
                        key={val.catmaster_id}
                        day_no={val.day_no}
                        activity={val.activity}
                        cat_id={val.cat_id}
                      />
                    })
                  }
                </tbody>
              </table>
            </div>

            {/* cost code */}
            <div className="col col-lg-5">
              <table class="table table-bordered ">
                <thead>
                  <tr class="table-active">
                    <th colspan="3">
                      <div class="row justify-content-center">
                        <div class="col-4">
                          <h3>Cost Details</h3>
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <thead>
                  <tr align="center" class="table-primary">
                    <th scope="col"></th>
                    <th scope="col">Type</th>
                    <th scope="col">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    costpage.map((val) => {
                      return <Costdetails
                        key={val.cat_id}
                        type={val.Type}
                        price={val.Price}
                        cost={val.cost}
                        extra={val.extra}
                        cwb={val.cwb}
                        cwob={val.cwob}

                      />
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <div className="row justify-content-md-center">
              <div className="col col-lg-10 text-center">
                <NavLink className="nav-link " to={`/bookingpage/` + catmaster_id}>
                  <button type="button" class="w-20 btn btn-warning btn-details">Book Now</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Itineraryview;