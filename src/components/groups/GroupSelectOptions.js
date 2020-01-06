import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import {getGroups} from '../../redux/actions/groupActions';


const GroupSelectOptions = ({ getGroups , group: {groups, loading}}) => {
    useEffect(() => {
     getGroups();
     // eslint-disable-next-line
    }, [])
  return (
    !loading &&
    groups !== null &&
    groups.map(group => (
      <option key={group.id} value={`${group.name}`}>
        {group.name}
      </option>
      
    ))
  );
};

GroupSelectOptions.protoTypes = {
  group: PropTypes.object.isRequired,
  getGroups: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    group: state.group
});

export default connect(mapStateToProps, { getGroups })(GroupSelectOptions);
