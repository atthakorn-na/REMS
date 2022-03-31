
import React, { useState, useCallback, useContext } from "react";

import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTransition,
} from '@atlaskit/modal-dialog';
import HandleChange from '../services/HandleChange'

import { AuthContext } from '../services/Auth'


const ReadOnlyRow = ({ room, handleDelete, handleEditClick, handleWatchLog, viewLog, setViewLog }) => {

  const { rent, allLog } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState({roomId: room.roomId, ownerEmail: room.ownerEmail, agentEmail: room.agentEmail, fee: room.fee});

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const handleChange = (event) => HandleChange(event, setInput);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input)
    rent(input);
  }

  return (
  <>
    <tr id={room.roomId} key={room.roomId}>
      <td>{room.status}</td>
      <td>{room.ownerEmail}</td>
      <td>{room.agentEmail}</td>
      {room.customerEmail ? <td>{room.customerEmail}</td> : <td> - </td>}
      <td>{room.project}</td>
      <td>{room.location}</td>
      <td>{room.unitNo}</td>
      <td>{room.direction}</td>
      <td>{room.building}</td>
      <td>{room.floor}</td>
      <td>{room.size}</td>
      <td>{room.type}</td>
      <td>{room.fee}</td>
      {room.negotiate ? <td>{room.negotiate}</td> : <td> - </td>}
      {room.remark ? <td>{room.remark}</td> : <td> - </td>}
      <td>{room.dateReceive}</td>
      {room.update ? <td>{room.update}</td> : <td> - </td>}
      <td>
        <DropdownMenu class="btn btn-primary modalbtn" trigger="More">
          <DropdownItemGroup>
            <DropdownItem onClick={() => handleEditClick(room)}>Edit</DropdownItem>
            <DropdownItem onClick={(event) => handleWatchLog(event, room)}>History</DropdownItem>
            <DropdownItem appearance="primary" onClick={openModal}>Rent</DropdownItem>
            <DropdownItem onClick={() => handleDelete(room.roomId)}>Delete</DropdownItem>
          </DropdownItemGroup>
        </DropdownMenu>
        <ModalTransition>
          {isOpen && (
            <Modal onClose={closeModal}>
              <ModalHeader>
                <ModalTitle>Rental Detail</ModalTitle>
              </ModalHeader>
              <ModalBody>
                <input type="text"
                  required="required"
                  placeholder="Customer Email"
                  name="customerEmail"
                  onChange={handleChange} 
                />
                <input type="text"
                  required="required"
                  placeholder="Rent Date"
                  name="date"
                  onChange={handleChange}
                />
              </ModalBody>
              <ModalFooter>
                <button appearance="subtle" onClick={closeModal} autoFocus>Cancel</button>
                <button appearance="primary" onClick={handleSubmit}>Rent</button>
              </ModalFooter>
            </Modal>
          )}
        </ModalTransition>
      </td>
      <td> 
        {/* <button 
          type="button" class="btn btn-danger modalbtn" 
          onClick={() => handleDelete(room.roomId)}
        >
          Delete
        </button> */}
      </td>
    </tr>
    {viewLog === room.roomId?
      allLog.length > 0 ?
      <>
          <tr onClick={() => setViewLog(null)}>
            <th> </th>
            <th> </th>
            <th>Customer</th>
            <th>Fee</th>
            <th>Date</th>
          </tr>
        {allLog.map((log) => 
          <tr>
            <td> </td>
            <td> </td>
            <td>{log.customerEmail}</td>
            <td>{log.fee}</td>
            <td>{log.date}</td>
          </tr>
        )}
      </> : <p onClick={() => setViewLog(null)}>No Customer Yet</p>
      : null}
  </>
  );
};

export default ReadOnlyRow;