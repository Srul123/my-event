import React from "react";
import ListGuests from "../guests/ListGuests";
import AddBtn from "../layout/AddBtn";
import AddGuestModal from "../modals/AddGuestModal";
import EditGuestModal from "../modals/EditGuestModal";
import GroupListModal from "../modals/GroupListModal";
import GuestModal from "../modals/GuestModal";

import M from "materialize-css/dist/js/materialize.min.js";



const MyListGuests = () => {

    return (
      <div className="container list_container" style={{display: "grid"}}>
        <AddBtn
          modalIdGuest="#add-guest-modal"
          modalIdGroup="#group-list-modal"
        />
        <ListGuests />
        <AddGuestModal />
        <EditGuestModal />
        <GuestModal />
        <GroupListModal />
      </div>
    );
}

export default MyListGuests
