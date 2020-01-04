import React, { useState } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import { addGuest } from "../../redux/actions/guestActions";
import { useTranslation } from "react-i18next";


import M from "materialize-css/dist/js/materialize.min.js";

const AddGroupModal = ({ addGuest }) => {

  const { t, i18n } = useTranslation();

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
      return M.toast({
        html: `${t("guest.alert")}`,
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

      if (newGuest.groupName === "") {
        newGuest.groupName = `${t("guest.noGroup")}`;
      }

      addGuest(newGuest);

      M.toast({
        html: `${t("guest.guest")} ${newGuest.firstName} ${t("guest.success")}`,
        classes: "green"
      });

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
        <h4> {t("guest.addGuest")} </h4>
        <div className="row">
          <div className="input-field">
            <input
              id="firstName"
              className="validate"
              type="text"
              name="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName">{t("guest.firstName")} </label>
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
            <label htmlFor="lastName">{t("guest.firstName")} </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              id="email"
              className="validate"
              type="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <label htmlFor="email">{t("guest.email")} </label>
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
                {t("guest.groupChoice")}
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
                {t("guest.guestClass.class")}
              </option>
              <option value="0"> {t("guest.guestClass.mutual")}</option>
              <option value="1">{t("guest.guestClass.groom")}</option>
              <option value="2">{t("guest.guestClass.bride")}</option>
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
            <label htmlFor="comment">{t("guest.comments")}</label>
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
                <span>{t("guest.attension")}</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          id="submit"
          href="#!"
          className={"waves-effect blue waves-light btn"}
          onClick={onSubmit}
        >
          {t("guest.enterGuest")}
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
