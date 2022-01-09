import vintage from './image/vintage-logo.png';
import textureBG from './image/textureBackground.jpg';
import './navbar/App.css';
import React from 'react';
import Navbar from './Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <header className="App-header">
        <img src={vintage} className="App-logo" alt="logo" />
        <div className="textbox">
          <a1>REMS</a1>
          <p class="t1">REAL ESTATE</p><n></n><p class="t1">MANAGEMENT</p><n></n><p class="t1">SYSTEM</p>

          {/* <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Example
          </a> */}
        </div>
        <div className="loginbox">
          <form>
            <a2>ยินดีต้อนรับ</a2>
            <div className="form-email">
            <div class="form-email-real">
              <input type="email" class="form-control" id="inputEmail3" placeholder="อีเมลล์หรือชื่อผู้ใช้"></input>
            </div>
          </div>
          <n></n>
          <div class="form-password">
            <div class="form-pass-real">
              <input type="password" class="form-control" id="inputPassword3" placeholder="รหัสผ่าน"></input>
            </div>
         </div>
         <div class="form-button">
           <button type="submit" class="btn btn-primary" >ลงชื่อเข้าใช้</button>
        </div>
      </form>
      </div>
      </header>
      
    </div>
  );
}

export default App;
