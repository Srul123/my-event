import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getGroups } from "../../redux/actions/groupActions";
import Preloader from "../../components/layout/Preloader";
import GroupItem from "../group/GroupItem";

const ListGroups = ({ group: { groups, loading }, getGroups }) => {
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
          <h4 className="center"> כל הקבוצות </h4>
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
