import React from "react";
import ListGuests from "../components/guests/ListGuests";
import AddBtn from "../components/layout/AddBtn";
import AddGuestModal from "../components/modals/AddGuestModal";
import EditGuestModal from "../components/modals/EditGuestModal";
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
        <GroupListModal />
      </div>
    );
}

export default MyListGuests
