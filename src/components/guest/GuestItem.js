import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteGuest, setCurrent } from "../../redux/actions/guestActions";
import M from "materialize-css/dist/js/materialize.min.js";
import { useTranslation } from "react-i18next";

import "./GuestItem.scss";

const GuestItem = ({ guest, deleteGuest, setCurrent }) => {
  const { t } = useTranslation();

  const onDelte = () => {
    deleteGuest(guest.id);

    M.toast({
      html: `${t("guest.guest")} ${guest.name} ${t("guest.DFL")} `
    });
  };

  return (
    <li id="add-group-item" className="collection-item">
      <div className="wrap-details">
        <a
          href="#edit-guest-modal"
          className={`modal-trigger ${
            guest.attention ? "red-text" : "blue-text"
          }`}
          onClick={() => setCurrent(guest)}
        >
          {guest.name}
        </a>
        <div className="details">
          <span className="black-text">
            {t("guest.group")}: {guest.group}
          </span>
          <span className="black-text">
            {t("guest.tableNum")}: {guest.table}
          </span>
          <a href="#" onClick={onDelte} className="secondary-content">
            <i className="material-icons grey-text">delete</i>
          </a>
        </div>
      </div>
    </li>
  );
};

GuestItem.protoTypes = {
  guest: PropTypes.object.isRequired,
  deleteGuest: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired
};

export default connect(null, { deleteGuest, setCurrent })(GuestItem);
