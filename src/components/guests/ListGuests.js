import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import GuestItem from "../guest/GuestItem";
import Preloader from "../layout/Preloader";
import { getGuests } from "../../redux/actions/guestActions";
import SearchBar from "../layout/SearchBar";
import { useTranslation } from "react-i18next";

import PropTypes from "prop-types";

import "./ListGuests.scss";

const ListGuests = ({ guest: { guests, loading }, getGuests }) => {
  const { t } = useTranslation();

  useEffect(() => {
    getGuests();
    //eslint-disable-next-line
  }, []);

  if (loading || guests === null) {
    return <Preloader />;
  }

  return (
    <div>
      <ul className="collection with-header get_guests">
        <li className="collection-header">
          <h4 className="center"> {t("guests.myGuests")} </h4>
        </li>
        <li style={{ position: "relative", bottom: "1vh" }}>
          <SearchBar />
        </li>
        {!loading && guests.length === 0 ? (
          <p className="center">{t("guests.noGuests")} </p>
        ) : (
          guests.map(guest => <GuestItem guest={guest} key={guest.id} />)
        )}
      </ul>
    </div>
  );
};

ListGuests.propTypes = {
  guest: PropTypes.object.isRequired,
  getGuests: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  guest: state.guest
});

export default connect(mapStateToProps, { getGuests })(ListGuests);
