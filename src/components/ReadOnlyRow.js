
import React, { useState, useCallback, useContext } from "react";

// import Calendar from '@atlaskit/calendar';

import HandleChange from '../services/HandleChange'
import DropDown from './DropDown'
import { AuthContext } from '../services/Auth'
import ModalRent from "./ModalRent";
import ThaiDate from '../services/ThaiDate';
import Badge from '@atlaskit/badge';


const ReadOnlyRow = ({ room, handleDelete, handleEditClick, handleWatchLog, viewLog, setViewLog }) => {

  const { rent, allLog } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState({roomId: room.roomId, ownerEmail: room.ownerEmail, agentEmail: room.agentEmail, fee: room.fee});

  const closeModal = useCallback(() => setIsOpen(false), []);

  const handleChange = (event) => HandleChange(event, setInput);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input)
    rent(input);
  }

  return (
  <>
    <tr id={room.roomId} key={room.roomId} style={{}}>
      <td>{room.status === 'Available' ? <Badge appearance="primary">{room.status}</Badge> : <Badge appearance="important">{room.status}</Badge>}</td>
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
      <td>{ThaiDate(room.dateReceive)}</td>
      {room.update ? <td>{ThaiDate(room.update)}</td> : <td> - </td>}
      <td>
        <DropDown room={room} handleEditClick={handleEditClick} handleWatchLog={handleWatchLog} isOpen={isOpen} handleDelete={handleDelete} setIsOpen={setIsOpen}/>  
        {isOpen ? <ModalRent isOpen={isOpen} closeModal={closeModal} handleChange={handleChange} handleSubmit={handleSubmit}/> : null}
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