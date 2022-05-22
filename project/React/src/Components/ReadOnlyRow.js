import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr className="text-center" align="center">
      <td align="center">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{contact.fullname}
      </td>
      <td>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{contact.gender}
      </td>
      <td>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{contact.age}
      </td>
      <td>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{contact.bed}
      </td>

      <td className="text-left">
        <div>
          <button type="button" className="btn btn-success text-left" onClick={(event) => handleEditClick(event, contact)}>Edit</button>
          &nbsp;&nbsp;
          <button type="button" className="btn btn-danger text-left" onClick={(event) => handleDeleteClick(event, contact)}>Delete</button>
        </div>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;