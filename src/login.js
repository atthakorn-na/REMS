import React,{useContext , useState} from 'react';
import './css/App.css';
import vintage from './image/vintage-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from './utils/firebase';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './components/Auth';

const Login = ()=> {
  // const [currentUser, setCurrentUser] = useState(null);
      const  currentUser  = useContext(AuthContext);
      const handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = e.target.elements;

        try {

          firebase.auth().signInWithEmailAndPassword(email.value, password.value);

        } catch(error) {
            alert(error);
        }
      }      

        
        if (currentUser) {
            return <Navigate to="/dashboard" />;
        }

        return(
            <div className="App">
            <header className="App-header">
              <img src={vintage} className="App-logo" alt="logo" />
              <div className="textbox">
                <b>REMS</b>
                <p  class="t1" >REAL ESTATE</p><n></n><p class="t1">MANAGEMENT</p><n></n><p class="t2">SYSTEM</p>
      
               
              </div>
              <div className="loginbox">
                <form onSubmit={handleSubmit}>
                  <a2>ยินดีต้อนรับ</a2>
                  <div className="form-email-login">
                  <div class="form-email-real">
                    <input type="email" name="email" class="form-control" id="inputEmail3" placeholder="อีเมลล์หรือชื่อผู้ใช้"></input>
                  </div>
                </div>
                <br></br>
                <div class="form-password-login">
                  <div class="form-pass-real">
                    <input type="password" name="password" class="form-control" id="inputPassword3" placeholder="รหัสผ่าน"></input>
                  </div>
               </div>
               <br></br>
               <div class="form-button">
                 <a type="submit" class="btn btn-primary"href="/home" >ลงชื่อเข้าใช้</a>
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