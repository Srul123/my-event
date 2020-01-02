import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {  addGroup } from "../../redux/actions/groupActions";
import M from "materialize-css/dist/js/materialize.min.js";

const AddGroup = ({addGroup}) => {
  const [groupName, setGroupName] = useState("");

  const onSubmit = () => {
    if (groupName === "") {
      M.toast({
        html: "אנא הכנס שם לקבוצה"
      });
    } else {
      const newGroup = {
        name: groupName,
        attention: false,
        created: new Date()
      };

      addGroup(newGroup);

      M.toast({ html: `נוסף בהצלחה ${newGroup.name}` });

      // Clear Fields
      setGroupName("");
    }
  };
  return (
    <div>
      <ul className="collection">
        <li>
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
        </li>

        <li>
          <div className="modal-footer">
            <a
              href="#!"
              className="waves-effect blue waves-light btn"
              onClick={onSubmit}
            >
              הכנס
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default connect(null, {  addGroup })(
  AddGroup
);