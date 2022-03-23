import {useState,useEffect,Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

import 'boxicons';
import '../css/profile.css';
import Navbar from '../Navbar';
class Profile extends Component{
    render(){
        return(
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
                                <h4 class="mb-1"> </h4>
                                   <div class="image-upload">
                                    <input id="file-input" type="file"/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <hr class="my-4" />
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="firstname">Firstname</label>
                        <input type="text" id="firstname" class="form-control" placeholder=" " />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="lastname">Lastname</label>
                        <input type="text" id="lastname" class="form-control" placeholder=" " />
                    </div>
                </div>

                <hr class="my-4" />
                <div class="row mb-4">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="inputPassword4">Old Password</label>
                            <input type="password" class="form-control" id="inputPassword5" />
                        </div>
                        <div class="form-group">
                            <label for="inputPassword5">New Password</label>
                            <input type="password" class="form-control" id="inputPassword5" />
                        </div>
                        <div class="form-group">
                            <label for="inputPassword6">Confirm Password</label>
                            <input type="password" class="form-control" id="inputPassword6" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <p class="mb-2">Password requirements</p>
                        <p class="small text-muted mb-2">To create a new password, you have to meet all of the following requirements:</p>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Save Change</button>
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
    
}
export default Profile;