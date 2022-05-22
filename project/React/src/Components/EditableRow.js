import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>

      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullname"
          value={editFormData.fullname}
          onChange={handleEditFormChange}
        ></input>
      </td>

      <label for="cars">Select Gender:</label>

      <select name="gender" id="cars" onChange={handleEditFormChange}>
        <option >Select</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>

      </select>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an Age..."
          name="age"
          value={editFormData.age}
          onChange={handleEditFormChange}
        ></input>
      </td>

      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an Extra Bed..."
          name="bed"
          value={editFormData.bed}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;