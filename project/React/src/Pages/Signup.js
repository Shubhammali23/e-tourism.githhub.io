import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import signpic from "../Images/signup.svg";
import '../Css/Log.css';
import { useNavigate, useParams } from "react-router-dom"
import { Fragment } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup';

const Signup = () => {

    let navigate = useNavigate();


    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8070/crud/signup")
            .then(res => res.json())
            .then((result) => { setUser(result); }
            );
    }, []);

    const forminisc = {
        fname: "",
        lname: "",
        email: "",
        phone: "",
        password: "",
        cpassword: "",

    }

    const phoneRegExp = /^[7-9]\d{9}$/

    const formValidation = yup.object().shape(
        {
            fname: yup.string().required('First Name is required'),
            lname: yup.string().required('Last Name is required'),
            email: yup.string().email().required("Email is required"),
            phone: yup.string().required("Phone Number is  required").matches(phoneRegExp, 'Phone number is not valid'),
            password: yup.string().required('Please Enter your password')
                .matches(
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),
            cpassword: yup.string().required("please confirm your password").oneOf([yup.ref('password'), null], 'Password does not match')
        }
    )

    const flaguser = "N";

    const onSubmit = (values) => {

        var verify;
        user.map(val => {
            if (val.email == values.email) {
                verify = "N";
                alert("Email already Register")
                navigate('/signup')
            }
        })

        if (verify == null) {
            console.log(values)
            let obj = { fname: values.fname, lname: values.lname, email: values.email, phone: values.phone, password: values.password, flag: flaguser }

            console.log(obj)

            let demo = JSON.stringify(obj);

            console.log(JSON.parse(demo));

            fetch("http://localhost:8070/crud/add", {
                method: 'Post',
                headers: { 'Content-type': 'application/json' },
                body: demo
            })

            alert("registerd successfully")
            navigate('/login')
        }
    }

    return (
        <>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>

                            <Fragment>
                                <Formik initialValues={forminisc} onSubmit={onSubmit} validationSchema={formValidation}>
                                    {/* <form method="POST" className="register-form" id="register-form"> */}
                                    <Form>
                                        <div className="form-group">
                                            <label htmlFor="fname"> <i className="zmdi zmdi-account material-icons-name"></i></label>
                                            <Field id="fname" type='text' name='fname' placeholder='Enter First Name' >

                                            </Field>
                                            <p className='text-danger'>
                                                <ErrorMessage name='fname' />
                                            </p>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="lname"></label>
                                            <Field id="lname" type='text' name='lname' placeholder='Enter Last Name' >

                                            </Field>
                                            <p className='text-danger'>
                                                <ErrorMessage name='lname' />
                                            </p>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email"></label>
                                            <Field id="email" type='text' name='email' placeholder='Enter Email' >

                                            </Field>
                                            <p className='text-danger'>
                                                <ErrorMessage name='email' />
                                            </p>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="phone"></label>
                                            <Field id="phone" type='number' name='phone' placeholder='Enter Phone Number' >

                                            </Field>
                                            <p className='text-danger'>
                                                <ErrorMessage name='phone' />
                                            </p>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="password"></label>
                                            <Field id="password" type='password' name='password' placeholder='Enter Password' >

                                            </Field>
                                            <p className='text-danger'>
                                                <ErrorMessage name='password' />
                                            </p>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="cpassword"></label>
                                            <Field id="cpassword" type='password' name='cpassword' placeholder='Confirm Password' >

                                            </Field>
                                            <p className='text-danger'>
                                                <ErrorMessage name='cpassword' />
                                            </p>
                                        </div>


                                        <button className='btn btn-warning btn-details'>Register</button>
                                    </Form>
                                </Formik>
                            </Fragment>
                        </div>

                        <div className="signup-image">
                            <figure>
                                <img src={signpic} alt="registration pic" />
                            </figure>
                            <NavLink to="/login" className="signup-image-link">I am already register</NavLink>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup