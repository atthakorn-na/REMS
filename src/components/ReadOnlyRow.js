
import React from "react";

const ReadOnlyRow = ({ room, handleDelete, handleEditClick }) => {
  return (
    <tr id={room.roomId} key={room.roomId}>
      <td>{room.status}</td>
      <td>{room.ownerEmail}</td>
      <td>{room.agentEmail}</td>
      <td>{room.project}</td>
      <td>{room.location}</td>
      <td>{room.fee}</td>
      <td>
        <button
          type="button" class="btn btn-primary modalbtn"
          onClick={() => handleEditClick(room)}
        >
          Edit
        </button>
      </td>
      <td> 
        <button 
          type="button" class="btn btn-danger modalbtn" 
          onClick={() => handleDelete(room.roomId)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;