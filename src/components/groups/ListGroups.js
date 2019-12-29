import React, { useEffect, useState } from "react";
import GrouptItem from "../group/GrouptItem";
import Preloader from "../layout/Preloader";


const ListGroups = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getGroups();
    //eslint-disable-next-line
  }, []);

  const getGroups = async () => {
    setLoading(true);
    const res = await fetch("/groups");
    const data = await res.json();

    setGroups(data);
    setLoading(false);
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header get_guests">
      <li className="collection-header">
        <h4 className="center">הקבוצות שלי </h4>
      </li>
      {!loading && groups.length === 0 ? (
        <p className="center"> התחל להוסיף קבוצות</p>
      ) : (
        groups.map(group => <GrouptItem group={group} key={group.id} />)
      )}
    </ul>
  );
};

export default ListGroups;

