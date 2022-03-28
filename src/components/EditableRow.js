import React from "react";
import '../css/rawdata.css';
const EditableRow = ({
  handleChange, 
  editData, 
  handleSubmit, 
  handleCancel
}) => {
  return (
  
    <tr id={editData.roomId} >
      <div className="edit-table">
      <td>
        <input className="ed1"
          type="text"
          required="required"
          placeholder="Status"
          name="status"
          value={editData.status}
          onChange={handleChange}
        />
      </td>
      <td>
        <input className="ed2"
          type="text"
          required="required"
          placeholder="Owner Email"
          name="ownerEmail"
          value={editData.ownerEmail}
          onChange={handleChange}
        />
      </td>
      <td> 
        <input className="ed3"
          type="text"
          required="required"
          placeholder="Agency Email"
          name="agentEmail"
          value={editData.agentEmail}
          onChange={handleChange}
        />
      </td>
      <td>
        <input className="ed4"
          type="text"
          required="required"
          placeholder="Project Name"
          name="project"
          value={editData.project}
          onChange={handleChange}
        />
      </td>
      <td>
        <textarea className="ed5"
          type="text"
          required="required"
          placeholder="Location"
          name="location"
          value={editData.location}
          onChange={handleChange}
        />
      </td>
      <td>
        <input className="ed6"
          type="text"
          required="required"
          placeholder="Rental Fee"
          name="fee"
          value={editData.fee}
          onChange={handleChange}
        />
      </td>
      <td><button class="btn btn-primary modalbtn " onClick={(event) => handleSubmit(event)}>Save</button></td>
      <td><button class="btn btn-danger closebtne" onClick={() => handleCancel()}>X</button></td>  
      </div>
    </tr>
   
  );
};

export default EditableRow;