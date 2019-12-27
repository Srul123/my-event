import React, { useState } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import { addGuest } from "../../../../../actions/guestActions";

import M from "materialize-css/dist/js/materialize.min.js";

const AddGroupModal = ({ addGuest }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [groupName, setGroupName] = useState("");
  const [classification, setClassification] = useState("");
  const [comment, setComment] = useState("");
  const [attention, setAttention] = useState(false);

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({
        html: "אנא הכנס שם מלא",
        classes: "red"
      });
    } else {
     
      const newGuest = {
        firstName,
        lastName,
        phoneNumber,
        groupName,
        classification,
        email,
        comment,
        attention,
        created: new Date()
      };

      if (newGuest.groupName==="") {
        newGuest.groupName = "ללא קבוצה"
      }

      addGuest(newGuest);

      M.toast({ html: `המוזמן ${newGuest.firstName} נוסף בהצלחה`, classes: "green" });

      // Clear Fields
      setFirstName("");
      setLastName("");
      setPhoneNumber("");
      setEmail("");
      setGroupName("");
      setClassification("");
      setComment("");
      setAttention(false);
    }
  };
  return (
    <div id="add-guest-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>הכנס מוזמן חדש</h4>
        <div className="row">
          <div className="input-field">
            <input
              id="firstName"
              type="text"
              className="validate"
              name="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              שם פרטי{" "}
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              id="lastName"
              className="validate"
              type="text"
              name="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor="lastName" className="active">
              שם משפחה{" "}
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              className="validate"
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <label htmlFor="email" className="active">
              אימייל{" "}
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="groupName"
              value={groupName}
              className="browser-default"
              onChange={e => setGroupName(e.target.value)}
            >
              <option value="" disabled>
                בחר קבוצה
              </option>
              <option value="קבוצה1">קבוצה1</option>
              <option value="קבוצה2">קבוצה2</option>
              <option value="קבוצה3">קבוצה3</option>
              {/* <TechSelectOptions /> */}
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="classification"
              value={classification}
              className="browser-default"
              onChange={e => setClassification(e.target.value)}
            >
              <option value="" disabled>
                של מי האורח
              </option>
              <option value="משותף">משותף</option>
              <option value="חתן">חתן</option>
              <option value="כלה">כלה</option>
              {/* <TechSelectOptions /> */}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              id="comment"
              name="comment"
              type="text"
              data-length="10"
              className="validate"
              value={comment}
              onChange={e => setComment(e.target.value)}
            />
            <label htmlFor="comment">הערות</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={e => setAttention(!attention)}
                />
                <span>דרושה התייחסות</span>
              </label>
            </p>
          </div>
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
  );
};

AddGroupModal.propTypes = {
  addGuest: PropTypes.func.isRequired
};

const modalStyle = {
  width: "60%",
  height: "75%"
};




export default connect(null, { addGuest })(AddGroupModal);