import React, { useEffect, useState } from "react";

function GroupModal(props) {
    
  const [groupName, setGroupName] = useState("");

  useEffect(() => {
    if (props.mode === "add") {
    } else {
    }
  });

  return (
    <div>
      <div id={props.idModal} className="modal">
        <div className="modal-content">
          <h4> {props.idModal} </h4>
          <div className="row">
            <div className="input-field">
              <input
                id={`groupName-${props.mode}`}
                type="text"
                name="groupName"
                value={groupName}
                onChange={e => setGroupName(e.target.value)}
              />
              <label htmlFor="groupName" className="active">
                שם הקבוצה{" "}
              </label>
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
    </div>
  );
}

export default GroupModal;
