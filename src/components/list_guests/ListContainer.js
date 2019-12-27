import React from 'react';
import ListGuests from './guests/ListGuests/ListGuests';
import ListGropus from "./groups/ListGroups/ListGroups";
import AddBtn from "./AddBtn";
import AddGuestModal from "./guests/guest/modals/AddGuestModal";
import EditGuestModal from "./guests/guest/modals/EditGuestModal";
import AddGroupModal from "./groups/group/modals/AddGroupModal";
import EditGroupModal from "./groups/group/modals/EditGroupModal";


import "../list_guests/ListContainer.scss";


const ListContainer = () => {

    return (
      <div className="list_container">
        <AddBtn />
        <ListGuests />
        <ListGropus />
        <AddGuestModal />
        <EditGuestModal />
        <AddGroupModal />
        <EditGroupModal />
      </div>
    );
}

export default ListContainer;