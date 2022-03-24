import 'bootstrap/dist/css/bootstrap.min.css';
import { Component,useContext  } from 'react';
import vintage from './image/vintage-logo.png';
import { AuthContext } from './components/Auth';
import 'boxicons';
import auth from './components/Auth';
import './css/nav.css';

const Navbar =()=>{
    
      const  currentUser  = useContext(AuthContext);
    return (
      <div>
      <head>
      <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'></link>
      </head>
      <div class='sidebar'>
        <div class='logo_content'>
          <div class='logo'>
            <i class='bx bxl-c-plus-plus'></i>
            <div class='logo_name'>REMS</div>
          </div>
          
        </div>
          <ul class='nav_list'>
            <li>
              <a href='/home'>
                <i class='bx bx-grid-alt'></i>
                <span class='links_name'>Dashboard</span>
              </a>
            </li>
            <li>
              <a href='/listpage'>
              <i class='bx bx-list-ul' ></i>
                <span class='links_name'>รายการห้องพัก</span>
              </a>
            </li>
            <li>
              <a href='/chat'>
                <i class='bx bx-chat'></i>
                <span class='links_name'>กล่องข้อความ</span>
              </a>
            </li>
            <li>
              <a href='/Rent'>
              <i class='bx bxs-book-open' ></i>
                <span class='links_name'>อนุมัติปล่อยเช่า</span>
              </a>
            </li>
            <li>
              <a href='/Profile'>
                <i class='bx bx-user'></i>
                <span class='links_name'>จัดการบัญชีผู้ใช้</span>
              </a>
            </li>
          </ul>
          <div class='profile_content'>
            <div class='profile'>
              <div class='profile_details'>
                <img src=''alt=''></img>
                <div class='name_job'>
                  <div class='name'>Pinpong kongkapun</div>
                  
                  <div class='job'>Owner</div>
                  </div>
              </div>
            </div>
            <button onClick={() =>auth.Navbar}><i class='bx bx-log-out' id="log_out"></i></button>
          </div>
      </div>
      </div>
    );
    
}

export default Navbar;