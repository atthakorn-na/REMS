import React, { useContext } from 'react';
import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';
import { AuthContext } from '../services/Auth'

const DropDown = ({handleEditClick, handleWatchLog, handleDelete, setIsOpen, isOpen, room}) => {
    const { currentUser } = useContext(AuthContext)

    return (
    <DropdownMenu class="btn btn-primary modalbtn" trigger="≡">
        <DropdownItemGroup>
        {currentUser.agent ? <DropdownItem onClick={() => handleEditClick(room)}>Edit</DropdownItem> : null}
        <DropdownItem onClick={(event) => handleWatchLog(event, room)}>History</DropdownItem>
        {currentUser.agent ? 
            <>
            <DropdownItem appearance="primary" onClick={() => isOpen ? setIsOpen(false): setIsOpen(true)}>Rent</DropdownItem> 
            <DropdownItem onClick={() => handleDelete(room.roomId)}>Delete</DropdownItem>
            </>
        : null}
        
        </DropdownItemGroup>
    </DropdownMenu>
    )
}

export default DropDown;