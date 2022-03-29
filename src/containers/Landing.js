import React,{ useContext, useState } from 'react';
import '../css/App.css';
import vintage from '../image/vintage-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import HandleChange from '../services/HandleChange'
import { AuthContext } from '../services/Auth';

const Login = ()=> {
  const [loginUser, setLoginUser] = useState();
  const { loginAuth, wrongPassword } = useContext(AuthContext);

  const handleSubmit = async () => {
    try {
      await loginAuth(loginUser);
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
          <form>
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
                {wrongPassword ? <label className='text-error' form='password'>Email address or password is either incorrect or not regitered with REMS.</label> : null}
              </div>
            </div>
            <br></br>
            <div className="form-button">
              <label className="btn btn-primary l" onClick={handleSubmit}>ลงชื่อเข้าใช้</label>
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