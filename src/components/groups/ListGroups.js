import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getGroups } from "../../redux/actions/groupActions";
import Preloader from "../../components/layout/Preloader";
import GroupItem from "../group/GroupItem";
import { useTranslation } from "react-i18next";

const ListGroups = ({ group: { groups, loading }, getGroups }) => {
  const { t, i18n } = useTranslation();


  useEffect(() => {
    getGroups();
    //eslint-disable-next-line
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div>
      <ul className="collection with-header get_guests">
        <li className="collection-header">
          <h4 className="center"> {t("groups.groups")} </h4>
        </li>
        {!loading &&
          groups !== null &&
          groups.map(group => <GroupItem group={group} key={group.id} />)}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  group: state.group
});




export default connect(mapStateToProps, { getGroups })(ListGroups);
