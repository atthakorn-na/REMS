import React,{ useContext , useEffect, useState } from 'react';
import './css/App.css';
import vintage from './image/vintage-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import HandleChange from './containers/HandleChange'
import { AuthContext } from './components/Auth'
import { Navigate, useNavigate } from "react-router-dom";

const Login = ()=> {
  const [loginUser, setLoginUser] = useState();
  const { loginAuth } = useContext(AuthContext);
  const [wrongUser, setWrongUser] = useState(false);

  const handleSubmit = async () => {
    try {
      await loginAuth(loginUser);
      setWrongUser(true);
    } catch(error) {
      alert(error);
    }  
  }           
        
  const handleChange = (event) => {
    event.preventDefault();
    HandleChange(event, setLoginUser);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={vintage} className="App-logo" alt="logo" />
        <div className="textbox">
          <b>REMS</b>
          <p  className="t1" >REAL ESTATE</p><n></n><p className="t1">MANAGEMENT</p><n></n><p className="t2">SYSTEM</p>            
        </div>
        <div className="loginbox">
          <form /*onSubmit={handleSubmit}*/>
            <a2>ยินดีต้อนรับ</a2>
            <div className="form-email-login">
              <div class="form-email-real">
                <input /*type="email"*/ name="email" className="form-control" id="inputEmail3" placeholder="อีเมลล์หรือชื่อผู้ใช้" onChange={handleChange}></input>
              </div>
            </div>
            <br></br>
            <div className="form-password-login">
              <div className="form-pass-real">
                <input type="password" name="password" className="form-control" id="inputPassword3" placeholder="รหัสผ่าน" onChange={handleChange}></input>
                {wrongUser ? <label form='password'>รหัสผิดจ้า</label> : null}
              </div>
            </div>
            <br></br>
            <div className="form-button">
              <label className="btn btn-primary" onClick={handleSubmit}>ลงชื่อเข้าใช้</label>
            </div> 
            <br></br>
          
            <a className="App-link-create" href="/regis"  rel="noopener noreferrer">
                สร้างบัญชี |
            </a>
            <a className="App-link-pass" href="/home" target="_blank" rel="noopener noreferrer">
                ลืมรหัสผ่าน
            </a>
          </form>
        </div>
      </header>
    </div>
);
    
}
export default Login;