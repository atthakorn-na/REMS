import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/regis.css';
import HandleChange from '../services/HandleChange'
import { AuthContext } from '../services/Auth'
import { useNavigate } from "react-router-dom";

const Regis = () => {
  const { registration, role, setRole } = useContext(AuthContext);
  const [regisUser, setRegisUser] = useState(role);
  let navigate = useNavigate();
  console.log(regisUser)

  const handleSubmit = async (event) => {
    event.preventDefault();
    await registration(regisUser);
    setRole(null);
  }

  const handleChange = (event) => {
    event.preventDefault();
    HandleChange(event, setRegisUser);
  }

  return(
  <div className='regis'>
      <header className='regis-header'>
      <div className="regisbox">
      <form onSubmit={handleSubmit}>
        <a3>สร้างบัญชีผู้ใช้</a3>
        <p>ง่ายและรวดเร็ว</p><hr width="330"></hr>
        <br></br>
        <div className="form-name">
        <div class="form-name-real">
          <input type="name" name="firstName" class="form-control" id="inputname3" placeholder="ชื่อ" onChange={handleChange} />
          <br></br>
          <input type="name" name="lastName" class="form-control" id="inputname3" placeholder="นามสกุล" onChange={handleChange} />
        </div>
        </div>
        <br></br>
        <div className="form-email">
        <div class="form-email-real">
          <input /*type="email"*/ name="email" class="form-control" id="inputEmail3" placeholder="อีเมลล์หรือชื่อผู้ใช้" onChange={handleChange}/>
        </div>
        <br></br>
        <div class="form-email-real">
          <input name="mobileNo" class="form-control" id="inputname3" placeholder="เบอร์โทรศัพท์" onChange={handleChange}/>
        </div>
        <br></br>
        <div class="form-email-real">
          <input name="dateOfBirth" class="form-control" id="inputname3" placeholder="วัน/เดือน/ปีเกิด(พ.ศ.)" onChange={handleChange}/>
        </div>
      </div>
      <br></br>
      <div class="form-password">
        <div class="form-pass-real">
          <input type="password" name="password" class="form-control" id="inputPassword3" placeholder="รหัสผ่าน" onChange={handleChange} />
        </div>
      </div>
      <br></br>
      
      <div class="form-button">
        <button type="submit" class="btn btn-primary e" onClick={handleSubmit} >สมัครสมาชิก</button>
    
      </div> 
      <br></br>
      <button type="submit" class="btn btn-primary e" onClick={() => navigate("../", { replace: true })} >กลับหน้าแรก</button>
    </form>
    </div>
          
      </header>
  </div>
  );
    
}
export default Regis;