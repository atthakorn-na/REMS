import React from "react";
import '../css/rawdata.css';
const EditableRow = ({
  handleChange, 
  handleSubmit,
  user,
  handleClose
}) => {
  return (
  
    <tr>
      <div className="edit-table">
      {user.owner ? null:
      <td>
        <label className="textadd1-1">Owner Email</label>
        <input className="add1-1"
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
        <label className="textadd1">Agency Email</label> 
        <input className="add1"
          type="text"
          required="required"
          placeholder="Agency "
          name="agentEmail"
          onChange={handleChange}
        />
      </td>
      }
      <td>
        <label className="textadd2">Project Name</label>
        <input className="add2"
          type="text"
          required="required"
          placeholder="Name"
          name="project"
          onChange={handleChange}
        />
      </td>
      <td>
        <label className="textadd3">Location</label>
        <input className="add3"
          type="text"
          required="required"
          placeholder="Location"
          name="location"
          onChange={handleChange}
        />
      </td>
      <td>
        <label className="textadd4">Unit No.</label>
        <input className="add4"
          type="text"
          required="required"
          placeholder="Unit No."
          name="unitNo"
          onChange={handleChange}
        />
      </td>
      <td>
        <label className="textadd5">Direction</label>
        <input className="add5"
          type="text"
          required="required"
          placeholder="Direction"
          name="direction"
          onChange={handleChange}
        />
      </td>
      <td>
        <label className="textadd6">Building</label>
        <input className="add6"
          type="text"
          required="required"
          placeholder="Building"
          name="building"
          onChange={handleChange}
        />
      </td>
      <td>
        <label  className="textadd7">Floor</label>
        <input className="add7"
          type="text"
          required="required"
          placeholder=""
          name="floor"
          onChange={handleChange}
        />
      </td>
      <td>
        <label className="textadd8">Size</label>
        <input className="add8"
          type="text"
          required="required"
          placeholder="Size"
          name="size"
          onChange={handleChange}
        />
      </td>
      <td>
        <label className="textadd9">Type</label>
        <input className="add9"
          type="text"
          required="required"
          placeholder="Type"
          name="type"
          onChange={handleChange}
        />
      </td>
      <td>
        <label className="textadd10">Rental Fee</label>
        <input className="add10"
          type="text"
          required="required"
          placeholder="Rental Fee"
          name="fee"
          onChange={handleChange}
        />
      </td>
      <td>
        <label className="textadd11">Negotiate</label>
        <input className="add11"
          type="text"
          required="required"
          placeholder="Negotiate"
          name="negotiate"
          onChange={handleChange}
        />
      </td>
      <td>
        <label className="textadd12">Remark</label>
        <input className="add12"
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