import React from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Feedback({ setfeedBack }) {
    let [good, setgood] = useState(0);
    let [bad, setbad] = useState(0);
    let navigate = useNavigate();

    const goodchange = () => {
        setgood(1)
        setbad(0)
    }

    const badchange = () => {
        setbad(1)
        setgood(0)
    }

    let [data, setData] = useState({
        Fname: "",
        Lname: "",
        Email: "",
        Review: "",
        Good: "0",
        Bad: "0",
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(values => ({ ...values, [name]: value }))
    }

    const onclick = () => {
        alert("Thanks For Your Suggesion")
        navigate('/homepage')
    }

    return (


        <div>
            <table class="table">
                <thead align="center" class="thead-dark">
                    <tr>
                        <th scope="col">Your Valuable Feedback</th>
                    </tr>
                </thead>
            </table>

            <div class="container">
                <div class="row">
                    <div class="col"></div>

                    <div class="col-6">
                        <div className="firstbox">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">First Name</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    name="Fname"
                                    type="text"
                                    maxlength="15"
                                    value={data.Fname}
                                    placeholder="Enter your first name here"
                                    onChange={handleChange} />
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Last Name</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    name="Lname"
                                    type="text"
                                    maxlength="15"
                                    value={data.Lname}
                                    placeholder="Enter your first name here"
                                    onChange={handleChange} />
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    name="Email"
                                    type="text"
                                    maxlength="40"
                                    value={data.Email}
                                    placeholder="Enter your first name here"
                                    onChange={handleChange} />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Give Your Suggesions</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    name="Review"
                                    type="text"
                                    maxlength="50"
                                    value={data.Review}
                                    placeholder="Tell us your thoughts here"
                                    onChange={handleChange} />
                            </div>

                            {good}&nbsp; &nbsp;<button type="button" class="btn btn-warning" onClick={goodchange}>Like 👍</button>
                            &nbsp; &nbsp; &nbsp;
                            {bad} &nbsp; &nbsp;<button type="button" class="btn btn-warning" onClick={badchange}>Dislike 👎</button>
                            <br /><br />
                            <button type="button" class="btn btn-warning" onClick={onclick}>Submit Suggestion</button>
                        </div>
                    </div>

                    <div class="col">
                    </div>
                </div>
            </div>
        </div>
    )
}