import React,{useContext , useState, useEffect} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

import 'boxicons';
import '../css/rawdata.css';
import Navbar from '../Navbar';
import { AuthContext } from './Auth'

const Home = () => {
  const { currentUser, rooms } = useContext(AuthContext);

  let roomValue = 0;
  for(let room in rooms) {
    roomValue += rooms[room].fee;
  }

  let avgPrice = roomValue/rooms.length;

  return (
      <div> 
        <div className='home_content'>
          <div className='home_head'>
            <h1>Dashboard</h1>
            <h5>Welcome Khun {currentUser?.firstName} {currentUser?.lastName}</h5>
            <h6>Total Room: {rooms.length} rooms</h6>
            <h6>Value: {roomValue} baht</h6>
            <h6>Average Price: {avgPrice} baht</h6>
          </div>
        </div>
            <Navbar> 
            </Navbar>
      </div>
);
 
}
export default Home;