import React, { useContext, useEffect,useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

import 'boxicons';
import '../css/rent.css';
import Navbar from '../components/Navbar';
import { AuthContext } from '../services/Auth'

const Rent = () => {
  const { currentUser, getAllLog, allLog } = useContext(AuthContext);
  const [log, setLog] = useState();
  useEffect(() => {
    getAllLog(currentUser);
    setLog(allLog)
  }, [allLog])

  return(
    <div> 
    <div className='home_content'>
      <div className='home_head'>
          <h2>อนุมัติการปล่อยเช่า</h2>
      </div>
      <div class="container">
      {log.length > 0 ?
        <>
            <tr>
              <th> </th>
              <th> </th>
              <th>Customer</th>
              <th>Fee</th>
              <th>Date</th>
            </tr>
          {log.map((log) => 
            <tr>
              <td> </td>
              <td> </td>
              <td>{log.customerEmail}</td>
              <td>{log.fee}</td>
              <td>{log.date}</td>
            </tr>
          )}
        </> : <p>No Customer Yet</p>}
        {/* <div class="row it">
        <div class="col-sm-offset-1 col-sm-10" id="one">
        <p>
          ไฟล์สัญญาเป็นไฟล์ประเภท 'pdf' เท่านั้น
        </p><br></br>
        <div class="row">
          <div class="col-sm-offset-4 col-sm-4 form-group">
            <h3 class="text-center">E-Documents</h3>
          </div>
        </div>
        <div id="uploader">
        <div class="row uploadDoc">
          <div class="col-sm-3">
            <div class="docErr">Please upload valid file</div>
            <div class="fileUpload btn btn-orange">
              <img src="https://image.flaticon.com/icons/svg/136/136549.svg" class="icon"></img>
              <span class="upl" id="upload">Upload document</span>
              <input type="file" class="upload up" id="up" onchange="readURL(this);" />
            </div>
          </div>
          <div class="col-sm-8">
            <input type="text" class="form-control" name="" placeholder="โปรดระบุ 'ชื่อโครงการ-ตามด้วยชื่อนามสกุลจริงผู้ให้เช่า' "></input>
          </div>
          <div class="col-sm-1"><a class="btn-check"><i class="fa fa-times"></i></a></div>
        </div>
        </div>
        <div class="text-center">
        
        <button type="submit" class="btn btn-primary rent"><i class="fa fa-paper-plane"></i> Submit</button>
        </div>
        </div>
        </div> */}
        </div>


    </div>
    
    <Navbar>
    
    </Navbar>
    </div>
  );
    
    
}
export default Rent;