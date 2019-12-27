import React from 'react';
import PropTypes from "prop-types";
import './GrouptItem.scss';

function GrouptItem({group}) {
   return (
     <li id="edit-group-item" className="collection-item">
       <div className="wrap-details">
         <a
           href="#edit-group-modal"
           className={`modal-trigger ${
             group.attention ? "red-text" : "blue-text"
           }`}
         >
           {group.name}
         </a>
         <a href="#" className="secondary-content">
           <i className="material-icons grey-text">delete</i>
         </a>
       </div>
     </li>
   );
}

GrouptItem.propTypes = {
  group: PropTypes.object.isRequired
};

export default GrouptItem
