import React from 'react'
import { useContext } from 'react';
import notecontext from "../Contaxt/NoteContext";

const Form = (props) => {
    const title = props.catname;
    const from = props.valid_from;
    const to = props.valid_to;

    const a = useContext(notecontext)
    const fname = a.state.fname
    const lname = a.state.lname
    const email = a.state.email
    const phone = a.state.phone

    return (
        <>
            <div>
                <div class="container">
                    <div class="row">
                        <div class="col"></div>

                        <div class="col-11">
                            <table class="table">
                                <thead>
                                    <tr >
                                        <th scope="col"><h3>User Details</h3></th>
                                    </tr>
                                </thead>
                            </table>
                            <div className="form-group row" >
                                <div class="col-2">
                                    <label for="staticEmail" class="col-sm-2 col-form-label">
                                        <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User Name</b>
                                    </label>
                                </div>
                                <div class="col-8">
                                    <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={fname} />
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-2">
                                    <label for="staticEmail" class="col-sm-2 col-form-label">
                                        <b>&nbsp;&nbsp;&nbsp;Email</b>
                                    </label>
                                </div>
                                <div class="col-8">
                                    <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={email} />
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-2">
                                    <label for="staticEmail" class="col-sm-2 col-form-label">
                                        <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mobile No</b>
                                    </label>
                                </div>
                                <div class="col-10">
                                    <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={phone} />
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-2">
                                    <label for="staticEmail" class="col-sm-2 col-form-label">
                                        <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Address</b>
                                    </label>
                                </div>
                                <div class="col-10">
                                    <input type="text" class="form-control" id="inputPassword" placeholder="street" />
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-2">
                                    <label for="staticEmail" class="col-sm-2 col-form-label">
                                        <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Address 2</b>
                                    </label>
                                </div>
                                <div class="col-10">
                                    <input type="text" class="form-control" id="inputPassword" placeholder="Apartment, Floor" />
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-2">
                                    <label for="staticEmail" class="col-sm-2 col-form-label">
                                        <b>City</b>
                                    </label>
                                </div>
                                <div class="col-5">
                                    <input type="text" class="form-control" id="inputPassword" placeholder="City" />
                                </div>

                                <div class="col-5">
                                    <input type="text" class="form-control" id="inputPassword" placeholder="State" />
                                </div>
                            </div>


                            <div class="form-group row">
                                <div class="col-2">
                                    <label for="staticEmail" class="col-sm-2 col-form-label">
                                        <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Zip Code</b>
                                    </label>
                                </div>
                                <div class="col-10">
                                    <input type="text" class="form-control" id="inputPassword" placeholder="Zip Code" />
                                </div>
                            </div>
                        </div>
                        <div class="col"></div>
                    </div>
                </div>
            </div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>


            <div>
                <div class="container">
                    <div class="row">
                        <div class="col"></div>

                        <div class="col-11">

                            <table class="table text-center">
                                <thead>
                                    <tr >
                                        <th scope="col"><h3>Tour Details</h3></th>
                                    </tr>
                                </thead>
                            </table>
                            <div class="form-group row">
                                <div class="col-sm-1">
                                    <b>Tour Name</b>
                                </div>
                                <div class="col-sm-3">
                                    <input type="text" readonly class="form-control" id="staticEmail" value={title} />
                                </div>
                                <div class="col-sm-1">
                                    <b>Start From</b>
                                </div>
                                <div class="col-sm-3">
                                    <input type="text" readonly class="form-control" id="inputPassword" value={from} />
                                </div>
                                <div class="col-sm-1"><b>End At</b>
                                </div>
                                <div class="col-sm-3">
                                    <input type="text" readonly class="form-control" id="inputPassword" value={to} />
                                </div>
                            </div>

                            &nbsp;
                        </div>
                        <div class="col"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form
