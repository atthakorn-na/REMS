
import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.status}</td>
      <td>{contact.ownerEmail}</td>
      <td>{contact.agentEmail}</td>
      <td>{contact.project}</td>
      <td>{contact.location}</td>
      <td>{contact.fee}</td>
      <td>
        <button
          type="button" class="btn btn-primary modalbtn"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" class="btn btn-danger modalbtn" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;