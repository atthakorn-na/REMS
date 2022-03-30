import React from "react";
import '../css/rawdata.css';
const EditableRow = ({
  handleChange, 
  handleSubmit,
  user
}) => {
  return (
  
    <tr>
      <div className="edit-table">
      {user.owner ? null:
      <td>
        <label>Owner Email</label>
        <input className="ed2"
          type="text"
          required="required"
          placeholder="Owner Email"
          name="ownerEmail"
          onChange={handleChange}
        />
      </td>
      }
      {user.agent ? null:
      <td>
        <label>Agency Email</label> 
        <input className="ed3"
          type="text"
          required="required"
          placeholder="Agency Email"
          name="agentEmail"
          onChange={handleChange}
        />
      </td>
      }
      <td>
        <label>Project Name</label>
        <input className="ed4"
          type="text"
          required="required"
          placeholder="Project Name"
          name="project"
          onChange={handleChange}
        />
      </td>
      <td>
        <label>Location</label>
        <input className="ed4"
          type="text"
          required="required"
          placeholder="Location"
          name="location"
          onChange={handleChange}
        />
      </td>
      <td>
        <label>Unit No.</label>
        <input className="ed6"
          type="text"
          required="required"
          placeholder="Unit No."
          name="unitNo"
          onChange={handleChange}
        />
      </td>
      <td>
        <label>Direction</label>
        <input className="ed1"
          type="text"
          required="required"
          placeholder="Direction"
          name="direction"
          onChange={handleChange}
        />
      </td>
      <td>
        <label>Building</label>
        <input className="ed1"
          type="text"
          required="required"
          placeholder="Building"
          name="building"
          onChange={handleChange}
        />
      </td>
      <td>
        <label>Floor</label>
        <input className="ed1"
          type="text"
          required="required"
          placeholder="Floor"
          name="floor"
          onChange={handleChange}
        />
      </td>
      <td>
        <label>Size</label>
        <input className="ed1"
          type="text"
          required="required"
          placeholder="Size"
          name="size"
          onChange={handleChange}
        />
      </td>
      <td>
        <label>Type</label>
        <input className="ed1"
          type="text"
          required="required"
          placeholder="Type"
          name="type"
          onChange={handleChange}
        />
      </td>
      <td>
        <label>Rental Fee</label>
        <input className="ed1"
          type="text"
          required="required"
          placeholder="Rental Fee"
          name="fee"
          onChange={handleChange}
        />
      </td>
      <td>
        <label>Negotiate</label>
        <input className="ed1"
          type="text"
          required="required"
          placeholder="Negotiate"
          name="negotiate"
          onChange={handleChange}
        />
      </td>
      <td>
        <label>Remark</label>
        <input className="ed1"
          type="text"
          required="required"
          placeholder="Remark"
          name="remark"
          onChange={handleChange}
        />
      </td>
      <td><button class="btn btn-primary modalbtn " onClick={handleSubmit}>เพิ่ม</button></td>
      </div>
    </tr>
   
  );
};

export default EditableRow;