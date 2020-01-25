import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateGuest } from "../../redux/actions/guestActions";
import { useTranslation } from "react-i18next";
import GroupSelectOptions from "../groups/GroupSelectOptions";

import M from "materialize-css/dist/js/materialize.min.js";

const EditGuestModal = ({ current, updateGuest }) => {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [groupName, setGroupName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [table, setTable] = useState("");
  const [classification, setClassification] = useState("");
  const [ride, setRide] = useState(false);
  const [attention, setAttention] = useState(false);
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (current) {
      setName(current.name);
      setPhone(current.phone);
      setAddress(current.address);
      setGroupName(current.groupName);
      setQuantity(current.quantity);
      setTable(current.table);
      setClassification(current.classification);
      setRide(current.ride);
      setAttention(current.attention);
      setComment(current.comment);
    }
  }, [current]);

  const onSubmit = () => {
    if (name === "") {
      M.toast({
        html: `${t("guest.alert")}`,
        classes: "red"
      });
    } else {
      const editGuest = {
        id: current.id,
        name,
        phone,
        address,
        groupName,
        quantity,
        table,
        classification,
        ride,
        attention,
        comment
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
              id="name-edit"
              type="text"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              id="phone-edit"
              type="text"
              name="phone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              id="address"
              className="validate"
              type="text"
              name="address"
              value={address}
              onChange={e => setAddress(e.target.value)}
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
            <input
              id="quantity-edit"
              className="validate"
              type="number"
              name="quantity"
              value={quantity}
              onChange={e => setQuantity(e.target.value)}
            />
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
                  checked={ride}
                  value={ride}
                  onChange={e => setRide(!ride)}
                />
                <span>{t("guest.ride")}</span>
              </label>
            </p>
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
