
import React, { useState, useCallback } from "react";

import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTransition,
} from '@atlaskit/modal-dialog';

const ReadOnlyRow = ({ room, handleDelete, handleEditClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
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
            <DropdownItem>History</DropdownItem>
            <DropdownItem appearance="primary" onClick={openModal}>Rent</DropdownItem>
          </DropdownItemGroup>
        </DropdownMenu>
        <ModalTransition>
        {isOpen && (
          <Modal onClose={closeModal}>
            <ModalHeader>
              <ModalTitle>Rental Detail</ModalTitle>
            </ModalHeader>
            <ModalBody>
              
            </ModalBody>
            <ModalFooter>
              <button appearance="subtle">Cancel</button>
              <button appearance="primary" onClick={closeModal} autoFocus>
                Duplicate
              </button>
            </ModalFooter>
          </Modal>
        )}
      </ModalTransition>
      </td>
      <td> 
        <button 
          type="button" class="btn btn-danger modalbtn" 
          onClick={() => handleDelete(room.roomId)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;