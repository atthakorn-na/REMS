import React,{Component,useState } from 'react';
import { Navigate  ,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/regis.css';
import firebase  from 'firebase/compat';
const Regis= () =>{
  const [currentUser, setCurrentUser] = useState(null);

  const handleSubmit = (e) => {
      e.preventDefault();
      const { email, password } = e.target.elements;

      try {

        firebase.auth().createUserWithEmailAndPassword(email.value, password.value);
          setCurrentUser(true);

      } catch(error) {
          alert(error);
      }
  }

     if (currentUser) {
      return <Navigate  to="/home" />
      }
        return(
            <div className='regis'>
                <header className='regis-header'>
                <div className="regisbox">
                <form onSubmit={handleSubmit}>
                  <a3>สร้างบัญชีผู้ใช้</a3>
                  <p>ง่ายและรวดเร็ว</p>
                  <br></br>
                  <div className="form-name">
                  <div class="form-name-real">
                    <input type="name" class="form-control" id="inputname3" placeholder="ชื่อ-นามสกุล"></input>
                  </div>
                  </div>
                  <br></br>
                  <div className="form-email">
                  <div class="form-email-real">
                    <input type="email" name="email" class="form-control" id="inputEmail3" placeholder="อีเมลล์หรือชื่อผู้ใช้"></input>
                  </div>
                </div>
                <br></br>
                <div class="form-password">
                  <div class="form-pass-real">
                    <input type="password" name="password" class="form-control" id="inputPassword3" placeholder="รหัสผ่าน"></input>
                  </div>
               </div>
               <br></br>
               
               <div class="form-password">
                  <div class="form-pass-real">
                    <input type="password" class="form-control" id="inputPassword3" placeholder="ยืนยันรหัสผ่าน"></input>
                  </div>
               </div>
               <br></br>
               <div class="form-number">
                  <div class="form-pass-real">
                    <input type="name" class="form-control" id="inputPassword3" placeholder="เบอร์โทรศัพท์"></input>
                  </div>
               </div>
               <br></br>
               <div class="form-group">
                 
                <label for="exampleFormControlSelect1">วัน</label>
                <select class="form-control-day" id="exampleFormControlSelect1">
                <option>--</option>
                  <option>1</option> <option>2</option> <option>3</option>
                  <option>4</option> <option>5</option><option>6</option>
                  <option>7</option> <option>8</option> <option>9</option>
                  <option>10</option><option>11</option><option>12</option>
                  <option>13</option><option>14</option><option>15</option>
                  <option>16</option><option>17</option><option>18</option>
                  <option>19</option><option>20</option><option>21</option>
                  <option>22</option><option>23</option><option>24</option>
                  <option>25</option><option>26</option><option>27</option>
                  <option>28</option><option>29</option><option>30</option>
                  <option>31</option>
                </select>
                <label for="exampleFormControlSelect1">ㅤเดือน</label>
                <select class="form-control-month" id="exampleFormControlSelect1">
                  <option>--------</option>
                  <option>มกราคม</option>
                  <option>กุมภาพันธ์</option>
                  <option>มีนาคม</option>
                  <option>เมษายน</option>
                  <option>พฤษภาคม</option>
                  <option>มิถุนายน</option>
                  <option>กรกฎาคม</option>
                  <option>มิถุนายน</option>
                  <option>กันยายน</option>
                  <option>ตุลาคม</option>
                  <option>พฤศจิกายน</option>
                  <option>ธันวาคม</option>
                </select>
                <label for="exampleFormControlSelect1">ㅤปีเกิด</label>
                <select class="form-control-year" id="exampleFormControlSelect1">
                <option>----</option>
                  <option>1999</option>
                  <option>2000</option>
                  <option>2001</option>
                  <option>2002</option>
                  <option>2003</option>
                  <option>2004</option>
                </select>
              </div>
              <br></br>
               <div class="form-button">
                 <button type="submit" class="btn btn-primary e" onClick={"/home"} >สมัครสมาชิก</button>
              </div> 
              </form>
              </div>
                    
                </header>
            </div>
        );
    
}
export default Regis;