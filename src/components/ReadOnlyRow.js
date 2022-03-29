
import React from "react";

const ReadOnlyRow = ({ room, handleDelete, handleEditClick }) => {
  return (
    <tr id={room.roomId} key={room.roomId}>
      <td>{room.status}</td>
      <td>{room.ownerEmail}</td>
      <td>{room.agentEmail}</td>
      {room.customerEmail ? <td>{room.customerEmail}</td> : <td> - </td>}
      <td>{room.project}</td>
      <td>{room.location}</td>
      <td>{room.unitNo}</td>
      <td>{room.direction}</td>
      <td>{room.building}</td>
      <td>{room.floor}</td>
      <td>{room.size}</td>
      <td>{room.type}</td>
      <td>{room.fee}</td>
      {room.negotiate ? <td>{room.negotiate}</td> : <td> - </td>}
      {room.remark ? <td>{room.remark}</td> : <td> - </td>}
      <td>{room.dateReceive}</td>
      {room.update ? <td>{room.update}</td> : <td> - </td>}
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