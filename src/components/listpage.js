import {useState,useEffect,Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons';
import '../css/rawdata.css';

import Navbar from '../Navbar';
class listpage extends Component{
    render(){
        return(
            <div>
                <body>
                    <div class='list_content'>
                        <div className='list_head'>
                        <h1>รายการห้องพัก</h1>

                        <div class="gap-2 d-md-flex justify-content-md-end  ">
                            <a href="/regis" class="btn btn-primary custombtn "   type="button">+เพิ่มห้องพัก</a>
                        </div>
                        </div>
                    </div>
                </body>
                
                <div>  
                 
                </div>
          <Navbar>
          
          </Navbar>
          
          </div>
        );
    }
    


}
export default listpage;