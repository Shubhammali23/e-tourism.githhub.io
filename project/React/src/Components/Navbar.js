import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../Css/Navbar.css";
import image from "../Images/logo.png";

import { useContext } from 'react';
import notecontext from "../Contaxt/NoteContext";

function Navbar() {

    const a = useContext(notecontext)
    const logcheck = a.state.logcheck
    const fname = a.state.fname
    const lname = a.state.lname
    const flag = a.state.flag

    let navigate = useNavigate();

    const onLogout = () => {
        a.setState({
            "fname": "",
            "lname": "",
            "email": "",
            "phone": "",
            "flag": "",
            "logcheck": "0",
        })
        navigate('/homepage');
    }

    if (logcheck == "0") {
        return (
            <nav className="backgd navbar navbar-expand-lg " >
                <div className="container-fluid">
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    <NavLink className="navbar-brand" to={`/`}>
                        <img src={image} class="card-img-top" alt="LOGO" />
                    </NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav justify-content-center">
                            <li className="nav-item">
                                <NavLink className="nav-link " to={`/homepage`}><button type="button" class="btn btn-outline-warning">Home</button></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to={`/homepage`}><button type="button" class="btn btn-outline-warning">Gallery</button></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to={`/homepage`}><button type="button" class="btn btn-outline-warning">Videos</button></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to={`/about`}><button type="button" class="btn btn-outline-warning">About</button></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to={`/tc`}><button type="button" class="btn btn-outline-warning">Terms & Conditions</button></NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav justify-content-center">

                            <li>&nbsp;&nbsp;</li>
                            <li className="nav-item">
                                <div className="justify-content-end">
                                    <NavLink to={`/search`}>
                                        <buttom className="btn btn-outline-warning mx-6" data-toggle="modal" data-target="#loginModal">Search</buttom>
                                    </NavLink>&nbsp;&nbsp;
                                    <NavLink to={`/login`}>
                                        <buttom className="btn btn-warning mx-6" data-toggle="modal" data-target="#loginModal">Login</buttom>
                                    </NavLink>
                                    <NavLink to={`/signup`}>
                                        <buttom className="btn btn-warning mx-2" data-toggle="modal" data-target="#signupModal">SignUp</buttom>
                                    </NavLink>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        );
    }

    if (logcheck == "1") {
        if (flag == "N") {

            return (
                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <div className="container-fluid">
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        <NavLink className="navbar-brand" to={`/`}>
                            <img src={image} class="card-img-top" alt="LOGO" />
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                            <ul className="navbar-nav justify-content-center">
                                <li className="nav-item">
                                    <NavLink className="nav-link " to={`/homepage`}><button type="button" class="btn btn-outline-secondary">Home</button></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link " to={`/homepage`}><button type="button" class="btn btn-outline-secondary">My Tours</button></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link " to={`/homepage`}><button type="button" class="btn btn-outline-secondary">Profile</button></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link " to={`/homepage`}><button type="button" class="btn btn-outline-secondary">Gallary</button></NavLink>
                                </li>
                                <NavLink to={`/search`}>
                                    <buttom className="btn btn-outline-secondary mx-6" data-toggle="modal" data-target="#loginModal">Search</buttom>
                                </NavLink>&nbsp;&nbsp;

                            </ul>
                        </div>

                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                            <ul className="navbar-nav justify-content-center">

                                <li>&nbsp;&nbsp;</li>
                                <li className="nav-item">
                                    <div className="justify-content-end">
                                        <buttom className="btn btn-light mx-6" data-toggle="modal" data-target="#loginModal">Hi User, {fname} {lname}
                                        </buttom>
                                        <buttom onClick={onLogout} className="btn btn-warning mx-2" data-toggle="modal" data-target="#signupModal">Logout</buttom>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav >
            );
        }
        if (flag == "Y") {
            return (
                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <div className="container-fluid">
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        <NavLink className="navbar-brand" to={`/`}>
                            <img src={image} class="card-img-top" alt="LOGO" />
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                            <ul className="navbar-nav justify-content-center">
                                <li className="nav-item">
                                    <NavLink className="nav-link " to={`/homepage`}><button type="button" class="btn btn-outline-secondary">Home</button></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link " to={`/homepage`}><button type="button" class="btn btn-outline-secondary">Add Tours</button></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link " to={`/homepage`}><button type="button" class="btn btn-outline-secondary">Customer Details</button></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link " to={`/homepage`}><button type="button" class="btn btn-outline-secondary">Tours Details</button></NavLink>
                                </li>
                                <NavLink to={`/search`}>
                                    <buttom className="btn btn-outline-secondary mx-6" data-toggle="modal" data-target="#loginModal">Search</buttom>
                                </NavLink>&nbsp;&nbsp;
                            </ul>
                        </div>

                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                            <ul className="navbar-nav justify-content-center">

                                <li>&nbsp;&nbsp;</li>
                                <li className="nav-item">
                                    <div className="justify-content-end">
                                        <buttom className="btn btn-light mx-6" data-toggle="modal" data-target="#loginModal">Welcome Admin, {fname} {lname}
                                        </buttom>
                                        <buttom onClick={onLogout} className="btn btn-warning mx-2" data-toggle="modal" data-target="#signupModal">Logout</buttom>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav >
            );
        }
    }
}

export default Navbar;