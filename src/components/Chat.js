import {useState,useEffect,Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons';
import '../css/rawdata.css';
import Navbar from '../Navbar';
import {db} from '../utils/firebase';

const Chat = ()=>{
    const [messages,setMessages]= useState([])

    useEffect(()=>{
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot=>{
            setMessages(snapshot.docs.map(doc=>doc.data()))
        })
    },[])
    return(
        <div>
            <body>
                <div class='list_content'>
                    <div className='list_head'>
                    <h2>กล่องข้อความ</h2>

                    <div class="gap-2 d-md-flex justify-content-md-end  ">
                        <a href="/regis" class="btn btn-primary custombtn "   type="button">ติดต่อเพิ่มเติม</a>
                    </div>
                    </div>

                    <div>
                        {messages.map(({id,text,pho})=>(
                            <div key={id}>
                                <img src={pho} alt=""></img>
                                <p>{text}</p>
                            </div>
                        
                        
                        
                        ))}
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
export default Chat;