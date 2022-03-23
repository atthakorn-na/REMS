import React,{useContext , useState, useEffect} from 'react';
import './css/App.css';
import vintage from './image/vintage-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate } from 'react-router-dom';
import { HTTP } from './axios/axios'
import HandleChange from './containers/HandleChange'
import { useNavigate } from "react-router-dom";

const Login = ()=> {
  const [currentUser, setCurrentUser] = useState(null);
  const [loginUser, setLoginUser] = useState();
  const [loading, setLoading] = useState(false);
  const [wrongUser, setWrongUser] = useState(false);

  let navigate = useNavigate();
      // const  currentUser  = useContext(AuthContext);

  useEffect(() => {
    getUserData();

  }, [loading])
  
  function getUserData() {
    try {
      const requestOptions = {
        method: 'PUT',
        url: 'user/login',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify(loginUser)
      };

      HTTP(requestOptions)
        .then(response => {
          setCurrentUser(response.data)
          setLoading(false);
          if (currentUser) {
            // return (<Navigate to="/dashboard" replace={true} />)
            navigate("../Home", { replace: true })
          }
          setWrongUser(true);
        })
    } catch(error) {
          alert(error);
      }
  }      

  const handleSubmit = () => {
    setLoading(true);
  }             
        
  const handleChange = (event) => {
    event.preventDefault();
    HandleChange(event, setLoginUser)
  }

        return(
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