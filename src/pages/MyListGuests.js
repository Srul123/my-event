import React from "react";
import ListGuests from "../components/guests/ListGuests";
import AddBtn from "../components/layout/AddBtn";
import AddGuestModal from "../components/modals/AddGuestModal";
import EditGuestModal from "../components/modals/EditGuestModal";
import AddGroupModal from "../components/modals/AddGroupModal";
import EditGroupModal from "../components/modals/EditGroupModal";
import GroupListModal from "../components/modals/GroupListModal";

import "./MyListGuests.scss";

const MyListGuests = () => {
    return (
      <div className="list_container">
        <AddBtn
          modalIdGuest="#add-guest-modal"
          modalIdGroup="#group-list-modal"
        />
        <ListGuests />
        <AddGuestModal />
        <EditGuestModal />
        <AddGroupModal />
        <EditGroupModal />
        <GroupListModal />
        {/* <GroupModal
        idModal="#add-group-modal"
        mode="add"
        title="הכנס קבוצה חדשה">
        </GroupModal> */}
        {/* <GroupModal
        idModal="#edit-group-modal
        mode="edit"
        title="ערוך קבוצה"">
        </GroupModal> */}
      </div>
    );
}

export default MyListGuests
