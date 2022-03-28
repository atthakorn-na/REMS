import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { AuthContext } from '../services/Auth';
import 'boxicons';
import '../css/nav.css';
import { useNavigate } from "react-router-dom";

const Navbar =()=>{
    
  const { currentUser, logoutAuth } = useContext(AuthContext);  
  let navigate = useNavigate();

  return ( 
    <div>
      <head>
      <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'></link>
      </head>
      <div class='sidebar'>
        <div class='logo_content'>
          <div class='logo' onClick={() => navigate("../home", { replace: true })}>
            <i class='bx bxl-c-plus-plus'></i>
              <div class='logo_name'>REMS</div>
          </div>
        
        </div>

        <ul class='nav_list'>
          <li>
            <a onClick={() => navigate("../home", { replace: true })}>
              <i class='bx bx-grid-alt'></i>
              <span class='links_name'>Dashboard</span>
            </a>
          </li>
          <li>
            <a onClick={() => navigate("../listpage", { replace: true })}>
            <i class='bx bx-list-ul' ></i>
              <span class='links_name'>รายการห้องพัก</span>
            </a>
          </li>
          <li>
            <a onClick={() => navigate("../chat", { replace: true })}>
              <i class='bx bx-chat'></i>
              <span class='links_name'>กล่องข้อความ</span>
            </a>
          </li>
          <li>
            <a onClick={() => navigate("../rent", { replace: true })}>
            <i class='bx bxs-book-open' ></i>
              <span class='links_name'>อนุมัติการปล่อยเช่า</span>
            </a>
          </li>
          <li>
            <a onClick={() => navigate("../profile", { replace: true })}>
              <i class='bx bx-user'></i>
              <span class='links_name'>จัดการบัญชีผู้ใช้</span>
            </a>
          </li>
        </ul>
        <div class='profile_content'>
          <a onClick={() => logoutAuth(currentUser)}>Logout</a>
          <div class='profile'>
            <div class='profile_details'>
              <img src=''alt=''></img>
              <div class='name_job'>
                <div class='name'>{currentUser?.firstName} {currentUser?.lastName}</div>
                <div class='job'>Owner</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
    
}

export default Navbar;