import {useState,useEffect,Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

import 'boxicons';
import '../css/rawdata.css';
import Navbar from '../Navbar';
class Home extends Component{
    render(){
        return(
          <div> 
          <div className='home_content'>
            <div className='home_head'>
          <h2>Dashboard</h2>
          </div>
          </div>
          <Navbar>
         
          </Navbar>
          </div>
        );
    }
    
}
export default Home;