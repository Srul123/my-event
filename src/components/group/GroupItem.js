import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteGroup } from "../../redux/actions/groupActions";
import M from "materialize-css/dist/js/materialize.min.js";
import { useTranslation } from "react-i18next";

const GroupItem = ({ group, deleteGroup }) => {
  const { t, i18n } = useTranslation();

  const onDelete = () => {
    deleteGroup(group.id);
    M.toast({ html: `${group.name} ${t("group.deleted")}`, classes: "red" });
  };

  return (
    <li className="collection-item">
      <div className="wrap-details">
        <div
          className="details"
          style={{
            display: "grid",
            gridAutoFlow: "column",
            gridAutoColumns: "95% 5%"
          }}
        >
          <span className="black-text"> {group.name}</span>
          <a href="#" onClick={onDelete} className="secondary-content">
            <i className="material-icons grey-text">delete</i>
          </a>
        </div>
      </div>
    </li>
  );
};

GroupItem.propTypes = {
  group: PropTypes.object.isRequired,
  deleteGroup: PropTypes.func.isRequired
};

export default connect(null, { deleteGroup })(GroupItem);
