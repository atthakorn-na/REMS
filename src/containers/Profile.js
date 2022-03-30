import { useContext, useEffect, useState } from 'react';

import 'boxicons';
import '../css/profile.css';
import Navbar from '../components/Navbar';
import EditProfile from '../components/EditProfile';
import HandleChange from '../services/HandleChange';
import { AuthContext } from '../services/Auth'
import ShowProfile from '../components/ShowProfile';
import ChangePassword from '../components/ChangePassword';

const Profile = () => {

    const { currentUser, changePassword, updateProfile } = useContext(AuthContext);

    const [newProfile, setNewProfile] = useState();
    const [newPassword, setPassword] = useState();
    const [updateProfileStatus, setUpdateProfileStatus] = useState(false);
    const [changePasswordStatus, setChangePassword] = useState(false);
    const [passwordPair, setPasswordPair] = useState(true);

    useEffect(() => {
        setNewProfile(currentUser);
    },[])

    const handleProfileChange = (event) => HandleChange(event, setNewProfile);
    const handleEditProfileBtn = () => setUpdateProfileStatus(true);
    const handleProfileUpdateSubmit = async (event) => {
        event.preventDefault();
        await updateProfile({email: currentUser.email, firstName: newProfile.firstName, lastName: newProfile.lastName, mobileNo: newProfile.mobileNo, dateOfBirth: newProfile.dateOfBirth});
        setUpdateProfileStatus(false);
    }

    const handlePasswordChange = (event) => HandleChange(event, setPassword);
    const handleChangePasswordBtn = () => setChangePassword(true);
    const handleChangePasswordSubmit = async (event) => {
        event.preventDefault();
        if (newPassword.newPassword === newPassword.confirmPassword) {
            await changePassword({email: currentUser.email, password: newPassword.oldPassword, newPassword: newPassword.newPassword});
            setPasswordPair(true);
            setChangePassword(false);
        } else {
            setPasswordPair(false);
        }
    }

    return (
        <div>
            
            <div className='home_content'>
                <div className='home_head'>
                    <h2>จัดการบัญชีผู้ใช้</h2>
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-12 col-lg-10 col-xl-8 mx-auto">
                                    <div class="my-4">
                                        <form>
                                            <div class="row mt-5 align-items-center">
                                                <div class="col-md-3 text-center mb-5">
                                                    <div class="img-thumbnail img-circle">
                                                        <div  type="file">
                                                            <label for="file-input">
                                                                <span className='upload'>Upload</span>  
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <div class="row align-items-center">
                                                        <div class="col-md-7">
                                                            <h4 class="mb-1"></h4>
                                                            <div class="image-upload">
                                                                <input id="file-input" type="file"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {newProfile ?  
                                                updateProfileStatus ?
                                                    <EditProfile handleChange={handleProfileChange} user={newProfile} handleSubmit={handleProfileUpdateSubmit}/>
                                                    : changePasswordStatus ? 
                                                        <ChangePassword handleChange={handlePasswordChange} verify={passwordPair} handleSubmit={handleChangePasswordSubmit}/>
                                                        : <ShowProfile user={newProfile} handleClick={handleEditProfileBtn} handleClickChangePassword={handleChangePasswordBtn}/>
                                            :<h1>Loading</h1>
                                            }
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
                <Navbar>
                </Navbar>
        </div>
    );
}

export default Profile;