import React, { useContext, useEffect } from 'react';

import 'boxicons';
import '../css/rawdata.css';
import Navbar from '../components/Navbar';

import { AuthContext } from '../services/Auth'

const Home = () => {
  const { currentUser, rooms } = useContext(AuthContext);
  let avgPrice = 0;
  let roomValue = 0;

  if (rooms.length > 0) {
    for(let room in rooms) {
      roomValue += rooms[room].fee;
    }
    avgPrice = Math.floor(roomValue/rooms.length);
  }

  return (
      <div> 
        <div className='home_content'>
          <div className='home_head'>
            <h1>Dashboard</h1>
            <h5 className='dohome'>Welcome {currentUser?.firstName} {currentUser?.lastName}</h5>
            {rooms.length > 0 ? (
            <>
              <div className='total-room-text'>
              <i class='bx bx-heart-circle'></i>
              <h6 className='texth-1'>{rooms.length}</h6>
              <h6 className='texth-11'>ห้องทั้งหมด</h6>
              </div>
              <div className='total-room-value'>
              <i class='bx bx-wallet-alt'></i>
              <h6 className='texth-2'>{roomValue} 💸</h6>
              <h6 className='texth-22'>รายได้ทั้งหมด</h6>
              </div>
              <div className='total-room-average'>
              <i class='bx bx-scatter-chart'></i>
              <h6 className='texth-3'>~ {avgPrice} 💸</h6>
              <h6 className='texth-33'>รายได้เฉลี่ย/ห้อง</h6>
              </div>
            </>)
            : <h6>You have no room</h6>}
          </div>
        </div>
            <Navbar> 
            </Navbar>
      </div>
);
 
}
export default Home;