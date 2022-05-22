import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
import "../Css/Bookcard.css"
import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup';
import { useParams } from "react-router-dom";

import CostTable from "./BillingPage";



const Pax = (props) => {

    const cost = props.cost;
    const extra = props.extra;
    const cwb = props.cwb;
    const cwob = props.cwob;

    const forminisc =
    {
        gender: ''
    }

    let [formValidation, setValid] = useState({});


    const [contacts, setContacts] = useState(data);
    let [addFormData, setAddFormData] = useState({
        fullname: "",
        gender: '',
        age: "",
        bed: "",
    });


    const [editFormData, setEditFormData] = useState({
        fullname: "",
        gender: '',
        age: "",
        bed: "yes",
    });


    const [editContactId, setEditContactId] = useState(null);


    const handleAddFormChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;
        setAddFormData(newFormData);
    };


    const handleEditFormChange = (event) => {
        event.preventDefault();
        console.log(event)
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;
        setEditFormData(newFormData);
        console.log(editContactId)
    };


    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newContact = {
            id: nanoid(),

            fullname: addFormData.fullname,
            gender: addFormData.gender,
            age: addFormData.age,
            bed: addFormData.bed || 'yes',

        };
        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
        setDescription(false);
        setReviews(false);
        console.log(newContacts)
        if (newContact.age > 12) {
            if (single == 0)
                setsingle(single + 1)
            else
                setcount_adult(count_adult + 1)
        }

        if (newContact.age <= 12 && newContact.bed == 'yes')
            setcount_child_with_bed(count_child_with_bed + 1)
        if (newContact.age <= 12 && newContact.bed == 'no')
            setchild_wo_bed(count_child_wo_bed + 1)


    };



    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedContact = {
            id: editContactId,

            fullname: editFormData.fullname,
            gender: editFormData.gender,
            age: editFormData.age,
            bed: editFormData.bed,

        };

        const newContacts = [...contacts];
        console.log(editedContact)
        console.log(editedContact.age)
        if (editedContact.age > 12) {

            if (single == 0)
                setsingle(single + 1)
            else
                setcount_adult(count_adult + 1)
        }

        if (editedContact.age <= 12 && editedContact.bed == 'yes')
            setcount_child_with_bed(count_child_with_bed + 1)
        if (editedContact.age <= 12 && editedContact.bed == 'no')
            setchild_wo_bed(count_child_wo_bed + 1)
        const index = contacts.findIndex((contact) => contact.id === editContactId);
        console.log(index)

        newContacts[index] = editedContact;

        setContacts(newContacts);
        setEditContactId(null);
    };

    const handleEditClick = (event, contact) => {
        event.preventDefault();
        setEditContactId(contact.id);
        console.log('hii')
        console.log(contact)
        const formValues = {

            fullname: contact.fullname,
            gender: contact.gender,
            age: contact.age,
            bed: contact.bed,
        };

        setEditFormData(formValues);
        if (contact.age > 12) {
            if (count_adult == 0)
                setsingle(single - 1)
            else
                setcount_adult(count_adult - 1)
        }

        if (contact.age <= 12 && contact.bed == 'yes')
            setcount_child_with_bed(count_child_with_bed - 1)
        if (contact.age <= 12 && contact.bed == 'no')
            setchild_wo_bed(count_child_wo_bed - 1)
    };



    const handleCancelClick = (event, contact) => {
        console.log(editContactId)
        const index = contacts.findIndex((contact) => contact.id === editContactId);
        console.log(index)
        console.log(contacts)
        const obj = contacts[index];
        console.log(obj)
        if (obj.age > 12) {
            if (single == 0)
                setsingle(single + 1)
            else
                setcount_adult(count_adult + 1)
        }

        if (obj.age <= 12 && obj.bed == 'yes')
            setcount_child_with_bed(count_child_with_bed + 1)
        if (obj.age <= 12 && obj.bed == 'no')
            setchild_wo_bed(count_child_wo_bed + 1)
        setEditContactId(null);
    };

    const handleDeleteClick = (contactId, age, bed) => {

        const newContacts = [...contacts];
        console.log(contactId)
        console.log(age)
        const index = contacts.findIndex((contact) => contact.id === age.id);
        console.log(index)
        newContacts.splice(index, 1);

        setContacts(newContacts);

        if (age.age > 12) {
            if (count_adult == 0)
                setsingle(single - 1)
            else
                setcount_adult(count_adult - 1)
        }

        if (age.age <= 12 && age.bed == 'yes')
            setcount_child_with_bed(count_child_with_bed - 1)
        if (age.age <= 12 && age.bed == 'no')
            setchild_wo_bed(count_child_wo_bed - 1)



    };


    const [single, setsingle] = useState(0);
    const [count_adult, setcount_adult] = useState(0);
    const [count_child_with_bed, setcount_child_with_bed] = useState(0);
    const [count_child_wo_bed, setchild_wo_bed] = useState(0);

    const [ab, setDescription] = useState(false);
    const [cd, setReviews] = useState(false);


    const descriptionHandler = () => {
        let newformValidation = yup.object().shape(
            {
                fullname: yup.string().required('Name is required'),
                gender: yup.string().required('Gender is required'),
                age: yup
                    .number("Must be number")
                    .required("Is required")
                    .positive()
                    .integer()
                    .min(13, "Min is 13")
                    .max(70, "max is 70"),
                bed: yup.string().required('Select Bed'),
            }
        )
        setValid(newformValidation)
        setDescription(true);
        setReviews(false);
        console.log(ab)
        console.log(cd)
    };


    const reviewsHandler = () => {
        setDescription(false);
        setReviews(true);
    }


    return (
        <div className="app-container">
            <form className="all formpax" onSubmit={handleEditFormSubmit}>

                <table className="pax">
                    <thead >
                        <tr>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Extra Bed Details</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact) => (
                            <Fragment>
                                {editContactId === contact.id ? (
                                    <EditableRow
                                        editFormData={editFormData}
                                        handleEditFormChange={handleEditFormChange}
                                        handleCancelClick={handleCancelClick}
                                    />
                                ) : (
                                        <ReadOnlyRow
                                            contact={contact}
                                            handleEditClick={handleEditClick}
                                            handleDeleteClick={handleDeleteClick}
                                        />
                                    )}
                            </Fragment>
                        ))}
                    </tbody>
                </table>
            </form>

            <div>
                <button type="button" className="btn btn-primary" onClick={descriptionHandler}>Add Customer</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button" className="btn btn-primary" onClick={reviewsHandler}>Add Child</button>
            </div>

            {ab &&
                <form className="all formpax" onSubmit={handleAddFormSubmit}>
                    <input
                        type="text"
                        name="fullname"
                        required="required"
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                    />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                {/* <label for="cars">Gender</label>  */}
                    <select required id="cars" onChange={handleAddFormChange} name="gender" >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                        type="number"
                        name="age"
                        required="required"
                        placeholder="Enter an Age..."
                        onChange={handleAddFormChange}
                        min="13"
                    />
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {/* <label for="bed">Select Bed</label> */}
                    <select name="bed" id="bed" disabled>
                        <option >Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='submit' value='submit'></input>
                </form>
            }

            {cd &&
                <form className="all formpax" onSubmit={handleAddFormSubmit}>
                    <input
                        type="text"
                        name="fullname"
                        required="required"
                        placeholder="Enter a name..."
                        onChange={handleAddFormChange}
                    />

                    {/* <label for="cars">Select Gender:</label> */}
                    <select required id="cars" onChange={handleAddFormChange} name="gender" >
                        <option value="">None</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>

                    <input
                        type="number"
                        name="age"
                        required="required"
                        placeholder="Enter an Age..."
                        onChange={handleAddFormChange}
                        max="12"
                    />

                    {/* <label for="bed">Select Bed:</label> */}
                    <select name="bed" id="bed" onChange={handleAddFormChange}>
                        <option >Select</option>
                        <option value="yes">yes</option>
                        <option value="no">no</option>

                    </select>
                    <input type='submit' value='submit'></input>
                </form>}
            &nbsp;


            <table class="table text-center">
                <thead>
                    <tr >
                        <th scope="col"><h3>Bill Details</h3></th>
                    </tr>
                </thead>
            </table>

            <table className="table text-center" bgcolor="#FEF3BD">
                <thead className="text-left">
                    <tr>
                        {/* <th scope="col"></th> */}
                        <th scope="col" >Description</th>
                        <th scope="col">Number</th>
                        <th scope="col">  </th>
                        <th scope="col">Cost ₹</th>
                        <th scope="col">Total Cost ₹</th>
                    </tr>
                </thead>
                <tbody className='text-left'>
                    <tr >
                        {/* <th scope="row">1</th> */}
                        <th scope="row">Single Person Cost</th>
                        <th scope="row">{single}</th>
                        <th scope="row">x</th>
                        <th scope="row">{cost}</th>
                        <th scope="row">{eval(single * cost)}</th>
                    </tr>
                    <tr>
                        {/* <th scope="row">2</th> */}
                        <th scope="row">Extra Person Cost</th>
                        <th scope="row">{count_adult}</th>
                        <th scope="row">x</th>
                        <th scope="row">{extra}</th>
                        <th scope="row">{eval(count_adult * extra)}</th>
                    </tr>
                    <tr>
                        {/* <th scope="row">3</th> */}
                        <th scope="row">Child With Bed</th>
                        <th scope="row">{count_child_with_bed}</th>
                        <th scope="row">x</th>
                        <th scope="row">{cwb}</th>
                        <th scope="row">{eval(count_child_with_bed * cwb)}</th>
                    </tr>
                    <tr>
                        {/* <th scope="row">4</th> */}
                        <th scope="row">Child Without Bed</th>
                        <th scope="row">{count_child_wo_bed}</th>
                        <th scope="row">x</th>
                        <th scope="row">{cwob}</th>
                        <th scope="row">{eval(count_child_wo_bed * cwob)}</th>
                    </tr>
                    <tr>
                    <th scope="row">TOTAL TOUR COST ₹</th>
                        <td ></td>
                        <td ></td>
                        <td ></td>
                        <th scope="row">{eval(single * cost) + eval(count_adult * extra) + eval(count_child_with_bed * cwb) + eval(count_child_wo_bed * cwob)}</th>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default Pax