import {useState,useEffect,Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

import 'boxicons';
import '../css/profile.css';
import Navbar from '../Navbar';
const Profile =()=>{
    useEffect(()=>{
        const inpFile = document.getElementById("inpFile");
        const previewContainer =document.getElementById("imagePreview");
        const previewImage = previewContainer.querySelector(".image-preview__image");
        const previewDefaultText =  previewContainer.querySelector(".image-preview__default-text");
    
        inpFile.addEventListener("change",function(){
            const file = this.files[0];

            if(file){
                const reader = new FileReader();

                previewDefaultText.style.display ="none";
                previewImage.style.display = "block";

                reader.addEventListener("load",function(){
                 previewImage.setAttribute("src",this.result);
                });
                reader.readAsDataURL(file);
            }
        });
    },[]);


    
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
                        <input type="file" name="inpFile" id="inpFile"></input>
                        <div class="image-preview" id="imagePreview">
                            <img src='' alt='Image Preview' className='image-preview__image'></img>
                            <span className='image-preview__default-text'>Upload Image</span>
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
                            <label for="inputPassword5">New Password</label>
                            <input type="password" class="form-control" id="inputPassword5" />
                        </div>
                        <div class="form-group">
                            <label for="inputPassword6">Confirm Password</label>
                            <input type="password" class="form-control" id="inputPassword6" />
                        </div>
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
export default Profile;