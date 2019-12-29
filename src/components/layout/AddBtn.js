import React from "react";

const AddBtn = () => {
  return (
    <div className="fixed-action-btn">
      <a
        href="#"
        className="btn-floating btn-large blue darken-2 modal-trigger"
      >
        <i className="large material-icons">add</i>
      </a>
      <ul style={{paddingLeft:"6vw", paddingRight:"2vw"}}>
        <li>
          <a
            href="#add-guest-modal"
            className="btn-floating green modal-trigger"
          >
            <i className="material-icons">person</i>
          </a>
        </li>
        <li>
          <a href="#add-group-modal" className="btn-floating red modal-trigger">
            <i className="material-icons">person_add</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
