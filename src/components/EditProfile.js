import React from "react";

const EditProfile = ({handleChange, handleSubmit, user}) => {
    return (
        <>
            <hr class="my-4" />
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="firstName">Firstname</label>
                        <input type="text" id="firstName" name="firstName" class="form-control" placeholder=" " onChange={handleChange} value={user.firstName} required/>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="lastName">Lastname</label>
                        <input type="text" id="lastName" name="lastName" class="form-control" placeholder=" " onChange={handleChange} value={user.lastName} required/>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="mobileNo">Mobile No.</label>
                        <input type="text" id="mobileNo" name="mobileNo" class="form-control" placeholder=" " maxlength="10" onChange={handleChange} value={user.mobileNo} required/>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="dateOfBirth">Date Of Birth</label>
                        <input type="text" id="dateOfBirth" name="dateOfBirth" class="form-control" placeholder=" " maxlength="10" onChange={handleChange} value={user.dateOfBirth} required/>
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Save Change</button>
                </div>
            <hr class="my-4" />
        </>
    )
}

export default EditProfile;