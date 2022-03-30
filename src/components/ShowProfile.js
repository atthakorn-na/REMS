const ShowProfile = ({ user, handleClick, handleClickChangePassword }) => {
    
    return (
        <>
            <hr class="my-4" />
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="firstName">Firstname: {user.firstName}</label>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="lastName">Lastname: {user.lastName}</label>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="mobileNo">Mobile No: {user.mobileNo}</label>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="dateOfBirth">Date Of Birth: {user.dateOfBirth}</label>
                    </div>
                    <br></br>
                    <button type="submit" class="btn btn-primary" onClick={handleClick}>Edit</button>
                    <h1>  </h1>
                    <button type="submit" class="btn btn-primary" onClick={handleClickChangePassword}>Change Password</button>
                </div>
            <hr class="my-4" />
        </>
    )    
}

export default ShowProfile;