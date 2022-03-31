import React from "react";
import '../css/rawdata.css';
const EditableRow = ({
  handleChange, 
  editData, 
  handleSubmit, 
  handleCancel
}) => {

  return (
    <tr id={editData.roomId} key={editData.roomId}>
      <div className="edit-table">
      <td>
        <p>{editData.status}</p>
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
        <p>{editData.customerEmail ? editData.customerEmail: '-'}</p>
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
        <input className="ed4"
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
          placeholder=" "
          name="unitNo"
          value={editData.unitNo}
          onChange={handleChange}
        />
      </td>
      <td>
        <input className="ed1"
          type="text"
          required="required"
          placeholder="Direction"
          name="direction"
          value={editData.direction}
          onChange={handleChange}
        />
      </td>
      <td>
        <input className="ed6"
          type="text"
          required="required"
          placeholder="Building"
          name="building"
          value={editData.building}
          onChange={handleChange}
        />
      </td>
      <td>
        <input className="ed7"
          type="text"
          required="required"
          placeholder="Floor"
          name="floor"
          value={editData.floor}
          onChange={handleChange}
        />
      </td>
      <td>
        <input className="ed8"
          type="text"
          required="required"
          placeholder="Size"
          name="size"
          value={editData.size}
          onChange={handleChange}
        />
      </td>
      <td>
        <input className="ed9"
          type="text"
          required="required"
          placeholder="Type"
          name="type"
          value={editData.type}
          onChange={handleChange}
        />
      </td>
      <td>
        <input className="ed9f"
          type="text"
          required="required"
          placeholder="Rental Fee"
          name="fee"
          value={editData.fee}
          onChange={handleChange}
        />
      </td>
      <td>
        <input className="ed10"
          type="text"
          required="required"
          placeholder="Negotiate"
          name="negotiate"
          value={editData.negotiate}
          onChange={handleChange}
        />
      </td>
      <td>
        <input className="ed11"
          type="text"
          required="required"
          placeholder="Remark"
          name="remark"
          value={editData.remark}
          onChange={handleChange}
        />
      </td>
      <td>
        <p>{editData.dateReceive}</p>
      </td>
      <td>
        <p>{editData.update ? editData.update: '-' }</p>
      </td>
      <td><button class="btn btn-primary modalbtn " onClick={(event) => handleSubmit(event)}>Save</button></td>
      <td><button class="btn btn-danger closebtne" onClick={() => handleCancel()}>X</button></td>  
      </div>
    </tr>
   
  );
};

export default EditableRow;