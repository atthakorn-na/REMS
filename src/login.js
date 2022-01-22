import React,{Component} from 'react';
import './css/App.css';
import vintage from './image/vintage-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';


class login extends Component{
    render(){
        return(
            <div className="App">
            <header className="App-header">
              <img src={vintage} className="App-logo" alt="logo" />
              <div className="textbox">
                <a1>REMS</a1>
                <p class="t1">REAL ESTATE</p><n></n><p class="t1">MANAGEMENT</p><n></n><p class="t1">SYSTEM</p>
      
               
              </div>
              <div className="loginbox">
                <form>
                  <a2>ยินดีต้อนรับ</a2>
                  <div className="form-email-login">
                  <div class="form-email-real">
                    <input type="email" class="form-control" id="inputEmail3" placeholder="อีเมลล์หรือชื่อผู้ใช้"></input>
                  </div>
                </div>
                <br></br>
                <div class="form-password-login">
                  <div class="form-pass-real">
                    <input type="password" class="form-control" id="inputPassword3" placeholder="รหัสผ่าน"></input>
                  </div>
               </div>
               <br></br>
               <div class="form-button">
                 <button type="submit" class="btn btn-primary" >ลงชื่อเข้าใช้</button>
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
}
export default login;