import React from "react";

const EditableRow = ({
  handleChange, 
  editData, 
  handleSubmit, 
  handleCancel
}) => {
  return (
    <tr id={editData.roomId}>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Status"
          name="status"
          value={editData.status}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Owner Email"
          name="ownerEmail"
          value={editData.ownerEmail}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Agency Email"
          name="agentEmail"
          value={editData.agentEmail}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Project Name"
          name="project"
          value={editData.project}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Location"
          name="location"
          value={editData.location}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Rental Fee"
          name="fee"
          value={editData.fee}
          onChange={handleChange}
        />
      </td>
      <td><button onClick={(event) => handleSubmit(event)}>Save</button></td>
      <td><button onClick={() => handleCancel()}>X</button></td>  
    </tr>
  );
};

export default EditableRow;