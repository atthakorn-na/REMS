import React, { useContext } from 'react';

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
    avgPrice = roomValue/rooms.length;
  }
  

  

  return (
      <div> 
        <div className='home_content'>
          <div className='home_head'>
            <h1>Dashboard</h1>
            <h5>Welcome Khun {currentUser?.firstName} {currentUser?.lastName}</h5>
            {rooms.length > 0 ? (
            <>
              <h6>Total Room: {rooms.length} rooms</h6>
              <h6>Value: {roomValue} baht</h6>
              <h6>Average Price: {avgPrice} baht</h6>
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