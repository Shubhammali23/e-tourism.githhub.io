
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
    FaFacebookF,
    FaTwitter,
    FaPinterest,
    FaInstagram,
    FaInstagramSquare,
} from "react-icons/fa";
import { IoIosPin, IoIosContact, IoIosMail } from "react-icons/io";


function Footer() {
    let navigate = useNavigate();
    const onSubcribe = () => {
        alert("Thanks For Subscribing")
        navigate('/homepage');
    }
    return (
        <div class="container">
            <footer class="py-5">

                <div class="row">
                    <div class="col-3">
                        <h4> <IoIosPin /> Contact Us</h4>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Maharashatra</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;India</p>
                        <p><IoIosContact />&nbsp;&nbsp; 9876543210</p>
                        <p><IoIosMail />&nbsp;&nbsp; Aimers@gmail.com</p>
                    </div>

                    <div class="col-2">
                        <h4>&nbsp;&nbsp;&nbsp;Company</h4>
                        <ul class="nav flex-column">
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/homepage"><button type="button" class="btn btn-outline-warning btn-sm">&nbsp; &nbsp; &nbsp; Home &nbsp; &nbsp; &nbsp;</button></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/homepage"><button type="button" class="btn btn-outline-warning btn-sm">&nbsp; &nbsp; &nbsp; Gallery&nbsp; &nbsp; &nbsp;</button></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/homepage"><button type="button" class="btn btn-outline-warning btn-sm">&nbsp; &nbsp; &nbsp; Videos&nbsp; &nbsp; &nbsp;</button></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/homepage"><button type="button" class="btn btn-outline-warning btn-sm">&nbsp; &nbsp; &nbsp; Offers &nbsp; &nbsp; &nbsp;</button></NavLink>
                            </li>
                        </ul>
                    </div>

                    <div class="col-2">
                        <h4>&nbsp;&nbsp;&nbsp;Support</h4>
                        <ul class="nav flex-column">
                            <li className="nav-item">
                                <NavLink className="nav-link " to={`/about`}><button type="button" class="btn btn-outline-warning btn-sm">&nbsp; &nbsp; About &nbsp; &nbsp; &nbsp;</button></NavLink>
                            </li> <li className="nav-item">
                                <NavLink className="nav-link " to={`/faqs`}><button type="button" class="btn btn-outline-warning btn-sm"> &nbsp; &nbsp; &nbsp; FAQ's &nbsp; &nbsp;&nbsp;</button></NavLink>
                            </li> <li className="nav-item">
                                <NavLink className="nav-link " to={`/feedback`}><button type="button" class="btn btn-outline-warning  btn-sm">&nbsp;&nbsp; Feedback&nbsp;&nbsp;</button></NavLink>
                            </li> <li className="nav-item">
                                <NavLink className="nav-link " to={`/tc`}><button type="button" class="btn btn-outline-warning btn-sm">&nbsp; &nbsp; &nbsp; T & C&nbsp; &nbsp; &nbsp;</button></NavLink>
                            </li>
                        </ul>
                    </div>



                    <div class="col-4 offset-1">
                        <form>
                            <h5>Subscribe to our Newsletter</h5>
                            <p>Get Latest Deals, Upcoming Offers and Travel Guides</p>
                            <div class="d-flex w-100 gap-2">
                                <label for="newsletter1" class="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" class="form-control" placeholder="Email address" required />
                                <button onClick={onSubcribe} class="btn btn-warning" type="button">Subscribe</button>
                            </div>
                            <p></p>
                        </form>
                    </div>
                </div>

                <hr></hr>
                <div class="row">
                    <div class="col-4">
                        <ul className="header__ul">
                            <li>
                                <FaFacebookF className="headerIcon" />
                            </li>
                            <li>
                                <FaTwitter className="headerIcon" />
                            </li>
                            <li>
                                <FaInstagramSquare className="headerIcon" />
                            </li>
                            <li>
                                <FaInstagram className="headerIcon" />
                            </li>
                        </ul>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &copy; All rights reserved.</p>
                    </div>

                    <div class="col-2"></div>
                    <div class="col-2"></div>

                    <div class="col-4">
                        <p>Group Aimers PG-DAC September-2021.</p>
                        <p> Powered By  MET, Mumbai.</p>
                    </div>
                </div>

            </footer>
        </div >
    );
}
export default Footer;