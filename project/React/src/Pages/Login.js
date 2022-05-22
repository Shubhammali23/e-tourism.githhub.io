import React, { useState, useContext, useEffect } from 'react';
import loginpic from "../Images/login.svg";
import { NavLink } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import '../Css/Log.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import notecontext from "../Contaxt/NoteContext";

const Login = () => {

    const a = useContext(notecontext)
    const { catmaster_id } = useParams();

    console.log(catmaster_id);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [user, setUser] = useState([]);
    const [userenter, setUserenter] = useState({});

    let navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8070/crud/signup")
            .then(res => res.json())
            .then((result) => { setUser(result); }
            );
    }, []);

    console.log(user)

    const onLogin = () => {
        let id = document.getElementById("email")
        let pass = document.getElementById("password")

        console.log(id.value);
        console.log(pass.value);

        var verify;
        user.map(val => {
            if (val.email == id.value && val.password == pass.value) {
                let obj = { email: val.email, pwd: val.password, fname: val.fname, lname:val.lname, phone:val.phone ,flag:val.flag }
                verify = obj;

                // fetch("http://localhost:8070/crud/search/" + obj.password)
                //     .then(res => res.json())
                //     .then((result) => {
                //         setUserenter(result);
                //     });

                a.setState({
                    "fname": obj.fname,
                    "lname": obj.lname,
                    "email": obj.email,
                    "phone": obj.phone,
                    "flag": obj.flag,
                    "logcheck": "1",
                })

                alert("Login Successfull");
                navigate('/homepage');
            }
            console.log(verify);
        }
        )
        if (verify == null) {
            alert("Incorrect User Id or Password");
        }
    };

    return (
        <>
            <section className="sign-in">
                <div className="container mt-5">
                    <div className="signin-content">

                        <div className="signin-image">
                            <figure>
                                <img src={loginpic} alt="Login pic" />
                            </figure>
                            <NavLink to="/signup" className="signup-image-link">Create an Account</NavLink>
                        </div>

                        <div className="signin-form">
                            <h2 className="form-title">Login</h2>
                            <form className="register-form" id="register-form">

                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i className="zmdi zmdi-email material-icons-name"></i>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="off"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Your Email"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i className="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        autoComplete="off"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Your Password"
                                    />
                                </div>

                                <div className="form-group form-button">
                                    <input type="submit" name="signin" id="signin" className="form-submit"
                                        value="Log In"
                                        onClick={onLogin}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login