const ChangePassword = ({ handleSubmit, handleChange, verify }) => {
    return (
        <>
            <div class="row mb-4">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="inputPassword4">Old Password</label>
                        <input type="password" class="form-control" id="inputPassword5" name="oldPassword" onChange={handleChange}/>
                    </div>
                    <div class="form-group">
                        <label for="inputPassword5">New Password</label>
                        <input type="password" class="form-control" id="inputPassword5" name="newPassword" onChange={handleChange}/>
                    </div>
                    <div class="form-group">
                        <label for="inputPassword6">Confirm Password </label>
                        <input type="password" class="form-control" id="inputPassword6" name="confirmPassword" onChange={handleChange}/>
                    </div>
                    {verify ? null : <label style={{color: 'Red'}}>!!! Password Don't Match !!!</label>}
                    <button class="btn btn-primary" onClick={(event) => handleSubmit(event)}>Save Change</button>
                    <div class="col-md-6">
                        <p class="mb-2">Password requirements</p>
                        <p class="small text-muted mb-2">To create a new password, you have to meet all of the following requirements:</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChangePassword;
