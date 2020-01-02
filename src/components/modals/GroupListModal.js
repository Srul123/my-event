import React, { useEffect, useState } from "react";
import ListGroups from "../groups/ListGroups";
import AddGroup from "../group/AddGroup";

function GroupListModal() {
  return (
    <div id="group-list-modal" className="modal">
      <div className="modal-content">
        <AddGroup />
        <ListGroups />
      </div>
    </div>
  );
}




export default GroupListModal;
