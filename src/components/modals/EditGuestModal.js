import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateGuest, setCurrent } from "../../actions/guestActions";

import M from "materialize-css/dist/js/materialize.min.js";

const EditGuestModal = ({ current, updateGuest }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [groupName, setGroupName] = useState("");
  const [classification, setClassification] = useState("");
  const [comment, setComment] = useState("");
  const [attention, setAttention] = useState(false);

  useEffect(() => {
    if (current) {
      setFirstName(current.firstName);
      setLastName(current.lastName);
      setPhoneNumber(current.phoneNumber);
      setEmail(current.email);
      setGroupName(current.groupName);
      setClassification(current.classification);
      setComment(current.comment);
      setAttention(current.attention);
    }
  }, [current]);

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({
        html: "אנא הכנס שם מלא"
      });
    } else {
      const editGuest = {
        id: current.id,
        firstName,
        lastName,
        phoneNumber,
        groupName,
        classification,
        email,
        comment,
        attention,
        created: current.created,
        lastEdited: new Date()
      };

      updateGuest(editGuest);

      M.toast({ html: ` הפעולה הצליחה `, classes: "green" });
      
    }
  };
  return (
    <div id="edit-guest-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4> ערוך מוזמן </h4>
        <div className="row">
          <div className="input-field">
            <input
              id="firstName-edit"
              type="text"
              className="validate"
              name="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              placeholder=""
            />
            <label htmlFor="firstName" className="active">
              שם פרטי{" "}
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              id="lastName-edit"
              className="validate"
              type="text"
              name="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              placeholder=""
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
              id="email-edit"
              type="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder=""
            />
            <label htmlFor="email" className="">
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
              <option value="ללא">ללא</option>
              <option value="חתן">חתן</option>
              <option value="כלה">כלה</option>
              {/* <TechSelectOptions /> */}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              id="comment-edit"
              type="text"
              data-length="10"
              className="validate"
              placeholder=""
              value={comment}
              onChange={e => setComment(e.target.value)}
            />
            <label htmlFor="input_text">הערות</label>
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
          ערוך
        </a>
      </div>
    </div>
  );
};

EditGuestModal.propTypes = {
  current: PropTypes.object,
  updateGuest: PropTypes.func.isRequired
};

const modalStyle = {
  width: "60%",
  height: "75%"
};

const mapStateToProps = state => ({
  current: state.guest.current
});

export default connect(mapStateToProps, { updateGuest })(EditGuestModal);
