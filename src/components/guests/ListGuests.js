import React, { useEffect, Fragment } from "react";
import {connect} from 'react-redux';
import GuestItem from "../guest/GuestItem";
import Preloader from "../layout/Preloader";
import {getGuests} from '../../actions/guestActions';
import SearchBar from "../layout/SearchBar";


import PropTypes from 'prop-types';

import "./ListGuests.scss";

const ListGuests = ({ guest: { guests, loading }, getGuests }) => {
  useEffect(() => {
    getGuests();
    //eslint-disable-next-line
  }, []);

  if (loading || guests === null) {
    return <Preloader />;
  }

  return (
      <div>
        <SearchBar />

        <ul className="collection with-header get_guests">
          <li className="collection-header">
            <h4 className="center">המוזמנים שלי</h4>
          </li>
          {!loading && guests.length === 0 ? (
            <p className="center"> התחל להוסיף מוזמנים</p>
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
  guest: state.guest,
});


export default connect(mapStateToProps,{ getGuests })(ListGuests);