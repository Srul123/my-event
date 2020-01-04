import React, { useRef } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { searchGuests } from "../../redux/actions/guestActions";
import { useTranslation } from "react-i18next";
import "./SearchBar.scss";

const SearchBar = ({ searchGuests }) => {
  const { t, i18n } = useTranslation();

  const text = useRef("");

  const onChange = e => {
    searchGuests(text.current.value);
  };

  return (
    <nav id="nav" style={{ marginBottom: "30px" }} className="blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder={`${t("searchBar.searchGuests")}`}
              ref={text}
              onChange={onChange}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
          </div>
        </form>
      </div>
    </nav>
  );
};

SearchBar.propTypes = {
  searchGuests: PropTypes.func.isRequired
};

export default connect(null, { searchGuests })(SearchBar);
