import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateGuest, setCurrent } from "../../redux/actions/guestActions";
import { useTranslation } from "react-i18next";
import GroupSelectOptions from "../groups/GroupSelectOptions";


import M from "materialize-css/dist/js/materialize.min.js";

const EditGuestModal = ({ current, updateGuest }) => {
  const { t, i18n } = useTranslation();

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
        html: `${t("guest.alert")}`,
        classes: "red"
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

      M.toast({
        html: `${t("guest.alertSuccess")}`,
        classes: "green"
      });
      
    }
  };
  return (
    <div id="edit-guest-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4> {t("guest.editGuest")} </h4>
        <div className="row">
          <div className="input-field">
            <input
              id="firstName-edit"
              type="text"
              name="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              id="lastName-edit"
              type="text"
              className="validate"
              name="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            {(() => {
              if (current) {
                return (
                  <label
                    htmlFor="lastName"
                    className={(() => {
                      if (current.lastName) {
                        return "active";
                      } else {
                        return "";
                      }
                    })()}
                  >
                    {t("guest.lastName")}
                  </label>
                );
              } else {
                return null;
              }
            })()}
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              id="email-edit"
              type="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder={t("guest.email")}
            />
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
              <GroupSelectOptions />
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
              <option value="0">{t("guest.guestClass.mutual")}</option>
              <option value="1">{t("guest.guestClass.groom")}</option>
              <option value="2">{t("guest.guestClass.bride")}</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              id="comment-edit"
              type="text"
              data-length="10"
              placeholder={t("guest.comments")}
              value={comment}
              onChange={e => setComment(e.target.value)}
            />
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
          href="#!"
          className="modal-close waves-effect blue waves-light btn"
          onClick={onSubmit}
        >
          {t("guest.editGuest")}
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
