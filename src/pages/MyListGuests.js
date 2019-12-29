import React from "react";
import ListGuests from "../components/guests/ListGuests";
import ListGropus from "../components/groups/ListGroups";
import AddBtn from "../components/layout/AddBtn";
import AddGuestModal from "../components/modals/AddGuestModal";
import EditGuestModal from "../components/modals/EditGuestModal";
import AddGroupModal from "../components/modals/AddGroupModal";
import EditGroupModal from "../components/modals/EditGroupModal";

import "./MyListGuests.scss";

const MyListGuests = () => {
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

export default MyListGuests
