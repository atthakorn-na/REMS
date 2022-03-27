import {useState, useEffect, useContext, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import { Modal } from 'react-bootstrap';
import 'boxicons';
import { nanoid } from "nanoid";
import '../css/rawdata.css';
import { AuthProvider } from './Auth';
import Navbar from '../Navbar';
import data from "./mock-data.json";
import ReadOnlyRow from "../components/ReadOnlyRow";
import EditableRow from "../components/EditableRow";
import { AuthContext } from './Auth'

const Listpage = ()=>{
    const [list, setList] = useState([]);
    const { currentUser, rooms } = useContext(AuthContext);

    const [contacts, setContacts] = useState(data);

    const [addFormData, setAddFormData] = useState({
        fullName: "",
        address: "",
        phoneNumber: "",
        email: "",
      });

    const [editFormData, setEditFormData] = useState({
        fullName: "",
        address: "",
        phoneNumber: "",
        email: "",
      });

    const [editContactId, setEditContactId] = useState(null);

    //add
    const handleAddFormChange = (event) => {
        event.preventDefault();
        
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        
        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;
        
        setAddFormData(newFormData);
    };
    const handleAddFormSubmit = (event) => {
        event.preventDefault();
    
        const newContact = {
          id: nanoid(),
          fullName: addFormData.fullName,
          address: addFormData.address,
          phoneNumber: addFormData.phoneNumber,
          email: addFormData.email,
        };
    
        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
      };

    //edit
    const handleEditFormChange = (event) => {
        event.preventDefault();
    
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
    
        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;
    
        setEditFormData(newFormData);
      };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();
    
        const editedContact = {
          id: editContactId,
          fullName: editFormData.fullName,
          address: editFormData.address,
          phoneNumber: editFormData.phoneNumber,
          email: editFormData.email,
        };
    
        const newContacts = [...contacts];
    
        const index = contacts.findIndex((contact) => contact.id === editContactId);
    
        newContacts[index] = editedContact;
    
        setContacts(newContacts);
        setEditContactId(null);
      };
    
      const handleEditClick = (event, contact) => {
        event.preventDefault();
        setEditContactId(contact.id);
    
        const formValues = {
          fullName: contact.fullName,
          address: contact.address,
          phoneNumber: contact.phoneNumber,
          email: contact.email,
        };
    
        setEditFormData(formValues);
      };
    
    const handleCancelClick = () => {
        setEditContactId(null);
      };
    
    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts];
    
        const index = contacts.findIndex((contact) => contact.id === contactId);
    
        newContacts.splice(index, 1);
    
        setContacts(newContacts);
      };


    //modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
        
      return(
        <>
          <body>
              <div class='list_content'>
                <div className='list_head'>
                  <h1>รายการห้องพัก</h1>
                  <div class="gap-2 d-md-flex justify-content-md-end  ">
                      <button  class="btn btn-primary custombtn " variant="primary" onClick={handleShow}>
                          จัดการห้องพัก
                      </button>
                      <Modal show={show} onHide={handleClose} animation={false}>
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
                      </Modal>
                  </div>
                  </div>

                  <div className='content_tablelist'>
              <form >
                  <table>
                  <thead>
                      <h3>ห้องพักว่าง</h3>
                      <tr>
                      <th>Status</th>
                      <th>เจ้าของ</th>
                      <th>เอเจ้น</th>
                      <th>โครงการ</th>
                      <th>เขต</th>
                      <th>ราคา</th>
                      </tr>
                  </thead>
                  <tbody>
                      {rooms.map((room) => (
                      <>
                          {editContactId === room.id ? (
                          <EditableRow
                              editFormData={editFormData}
                              handleEditFormChange={handleEditFormChange}
                              handleCancelClick={handleCancelClick}
                          />
                          ) : (
                          <ReadOnlyRow
                              contact={room}
                              handleEditClick={handleEditClick}
                              handleDeleteClick={handleDeleteClick}
                          />
                          )}
                      </>
                      ))}
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
  );  
    
}
export default Listpage;