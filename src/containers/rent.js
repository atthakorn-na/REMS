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
        </div>
    </div>
    
    <Navbar>
    
    </Navbar>
    </div>
  );
    
    
}
export default Rent;