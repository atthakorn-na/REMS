import React, { useContext, useEffect, useState } from 'react';

import 'boxicons';
import '../css/rawdata.css';
import Navbar from '../components/Navbar';

import { AuthContext } from '../services/Auth'
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

const Home = () => {
  const { currentUser, rooms } = useContext(AuthContext);
  let avgPrice = 0;
  let roomValue = 0;
  const [totalRoom, setTotalRoom] = useState(null);

  useEffect(() => {
    setTotalRoom(rooms);
  }, [rooms])

  if (totalRoom !== null) {
    if (rooms.length > 0) {
      for(let room in rooms) {
        roomValue += rooms[room].fee;
      }
      avgPrice = Math.floor(roomValue/rooms.length);
    }
  }
  

  const data = [
    { name: "รายได้เฉลี่ย", prices: avgPrice},
    { name: "รายได้ทั้งหมด", prices: roomValue },
  ];
  const data2 = [
    { name: "ธันวาคม",salary:5875},
    { name: "มกราคม",salary:8476.85},
    { name: "กุมภาพันธ์",salary:12875},
    { name: "รายได้เฉลี่ย", salary: avgPrice},
  ];

  return (
    totalRoom ?
      <div> 
        <div className='home_content'>
          <div className='home_head'>
            <h1>Dashboard</h1>
            <h5 className='dohome'>Welcome {currentUser?.firstName} {currentUser?.lastName}</h5>
            {totalRoom.length > 0 ? (
            <>
              <div className='total-room-text'>
              <i class='bx bx-heart-circle'></i>
              <h6 className='texth-1'>{totalRoom.length}</h6>
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
              <div className='pie'>
                <div className='pietext'>
                  <br></br>
                <h5 >รายได้ทั้งหมดต่อรายได้เฉลี่ย</h5>
                </div>
                  <PieChart  width={400} height={400} margin={{top:-75,left:-20
                      }}>
                    <Pie
                      dataKey="prices"
                      isAnimationActive={false}
                      data={data}
                      cx={200}
                      cy={200}
                      outerRadius={80}
                      fill="#FF8F6B"
                      label
                    />
                    <Tooltip />
                  </PieChart>
                  </div>

                <div className='salarypermonth'>
                  <br></br>
                  <div className='salaryText'>
                    <h5>รายได้เฉลี่ยในแต่ละเดือน</h5>
                  </div>
                  <br></br>
                  <br></br>
                  <BarChart
                    width={500}
                    height={300}
                    data={data2}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 80,
                      bottom: 5,
                    }}
                    barSize={25}
        >
                {/*fix barchart */}
                <XAxis dataKey="name"
                  scale="point"
                  padding={{ left: 15, right: 10 }}
                />
                <YAxis />
                <Tooltip/>
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="salary" fill="#8884d8" background={{ fill: "#eee" }} />
                </BarChart>
              </div>


            </>)
            : <h6>You have no room</h6>}
          </div>
        </div>
            <Navbar> 
            </Navbar>
      </div>
      : <h1>Loading</h1>
);
 
}
export default Home;