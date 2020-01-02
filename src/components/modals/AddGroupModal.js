import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getGroups } from "../../redux/actions/groupActions";
// import PropTypes from "./node_modules/prop-types";

import M from "materialize-css/dist/js/materialize.min.js";

const AddGroupModal = ({ getGroups }) => {
  const [groupName, setGroupName] = useState("");

  const onSubmit = () => {
    if (groupName === "") {
      M.toast({
        html: "אנא הכנס שם לקבוצה"
      });
    } else {
      console.log(groupName);
      const newGuest = {
        groupName,
        created: new Date()
      };

      // addGuest(newGuest);

      M.toast({ html: `שויך לקבוצה ${groupName}` });

      // Clear Fields
      setGroupName("");
    }
  };
  return (
    <div id="add-group-modal" className="modal">
      <div className="modal-content">
        <h4>הכנס קבוצה חדשה</h4>
        <div className="row">
          <div className="input-field">
            <input
              id="groupName"
              type="text"
              className="validate"
              name="groupName"
              value={groupName}
              onChange={e => setGroupName(e.target.value)}
            />
            <label htmlFor="groupName">שם הקבוצה </label>
          </div>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            className="modal-close waves-effect blue waves-light btn"
            onClick={onSubmit}
          >
            הכנס
          </a>
        </div>
      </div>
    </div>
  );
};

// AddLogModal.propTypes = {
//   addLog: PropTypes.func.isRequired
// };



export default connect(null, { getGroups })(AddGroupModal);

