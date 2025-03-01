import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../services/Auth';
import 'boxicons';
import '../css/nav.css';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    
  const { currentUser, logoutAuth } = useContext(AuthContext);  
  const [user, setUser] = useState();
  let navigate = useNavigate();

  useEffect(() => {
    setUser(currentUser);
  },[currentUser])

  return ( 
    user ?
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
          {/* <li>
            <a onClick={() => navigate("../rent", { replace: true })}>
            <i class='bx bxs-book-open' ></i>
              <span class='links_name'>อนุมัติปล่อยเช่า</span>
            </a>
          </li> */}
          <li>
            <a onClick={() => navigate("../profile", { replace: true })}>
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
                <div class='name'>{currentUser?.firstName} {currentUser?.lastName}</div>
                <div class='job'>{currentUser.agent ? 'Agent': 'Owner'}</div>

              </div>
            </div>
          </div>
                    <button onClick={() => logoutAuth(currentUser)}>
          <i class='bx bxs-log-out'></i>
            Logout</button>
        </div>
      </div>
    </div>
    : <p>Loading</p>
  );
    
}

export default Navbar;