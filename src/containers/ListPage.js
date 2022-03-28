import {useState, useEffect, useContext, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import { Modal } from 'react-bootstrap';
import 'boxicons';
import '../css/rawdata.css';

//component
import EditableRow from '../components/EditableRow';
import Navbar from '../components/Navbar';
import ReadOnlyRow from "../components/ReadOnlyRow";

//service
import { AuthContext } from '../services/Auth'
import HandleChange from '../services/HandleChange';

const ListPage = () => {
    const { currentUser, rooms } = useContext(AuthContext);
    
    const [allList, setAllList] = useState();

    const [Status, setStatus] = useState(null)

    const [EditCondo, setEditCondo] = useState();
    
    
    useEffect(() => {
      setAllList(rooms);
      console.log("HAHAHA")
    }, []);

    //EDIT
    const handleEditClick = (target) => {
        setStatus(target.roomId);
        setEditCondo(target);
    };

    const handleChangeEditForm = (event)=> HandleChange(event, setEditCondo);

    const handleSubmitEdit = (event) => {
      event.preventDefault();

      let cache = [...allList];

      const index = allList.findIndex((list) => list.roomId === Status);

      cache[index] = EditCondo;

      setAllList(cache)
      
      handleCancel();

    }

  const handleCancel = () => {
    setStatus(null);
    
    setEditCondo(null);
}

  const handleDelete = (itemToRemove) => {
    setAllList((prev) => prev.filter((item) => item.roomId !== itemToRemove));               
  };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
        
      return(
        <>
        {allList ?
        <>
          <body>
              <div class='list_content'>
                <div className='list_head'>
                  <h1>รายการห้องพัก</h1>
                  
                  <div class="gap-2 d-md-flex justify-content-md-end  ">
                      <button  class="btn btn-primary custombtn " variant="primary" onClick={handleShow}>
                          จัดการห้องพัก
                      </button>
                      {/* <Modal show={show} onHide={handleClose} animation={false}>
                          <Modal.Header closeButton>
                          <Modal.Title>จัดการห้องพัก</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                              <form onSubmit={handleAddFormSubmit}>
                                  <input
                                  type="text"
                                  name="fullName"
                                  required="required"
                                  placeholder="ชื่อโครงการ..."
                                  onChange={handleAddFormChange}
                                  />
                                  <input
                                  type="text"
                                  name="address"
                                  required="required"
                                  placeholder="ที่อยู่โครงการ..."
                                  onChange={handleAddFormChange}
                                  />
                                  <input
                                  type="text"
                                  name="phoneNumber"
                                  required="required"
                                  placeholder="ประเภทห้อง..."
                                  onChange={handleAddFormChange}
                                  />
                                  <input
                                  type="email"
                                  name="email"
                                  required="required"
                                  placeholder="ค่าเช่า..."
                                  onChange={handleAddFormChange}
                                  />
                                  <button type="submit">Add</button>
                              </form>
                          </Modal.Body>
                          <Modal.Footer>
                          <button variant="secondary"class="btn btn-primary modalbtn" onClick={handleClose}>
                              บันทึก
                          </button>
                          <button variant="primary" class="btn btn-primary modalbtn"onClick={handleClose}>
                          ยกเลิก
                          </button>
                          </Modal.Footer>
                      </Modal> */}
                  </div>
                  </div> 

                  <div className='content_tablelist'>
              <form >
                  <table>
                    <thead>
                      <tr>
                      <th >Status</th>
                      <th >เจ้าของ</th>
                      <th>เอเจ้น</th>
                      <th>โครงการ</th>
                      <th >เขต</th>
                      <th>ราคา</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allList.map((room) => 
                        room.roomId !== Status ?
                        <ReadOnlyRow room={room} handleDelete={handleDelete} handleEditClick={handleEditClick}/> :
                        <EditableRow editData={EditCondo} handleChange={handleChangeEditForm} handleSubmit={handleSubmitEdit} handleCancel={handleCancel}/>
                      )}
                    </tbody>
                  </table>
              </form>
              </div>
              </div>
          </body>
          <div>  
          </div>
      <Navbar>
      </Navbar>
    </>
    : <h1>ROOM NOT FOUND !!</h1>}

    </>
  );  
    
}

export default ListPage;