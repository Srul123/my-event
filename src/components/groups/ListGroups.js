import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {getGroups} from "../../redux/actions/groupActions";
import Preloader from "../../components/layout/Preloader";
import GroupItem from "../group/GroupItem";
import {useTranslation} from "react-i18next";
import GroupFilter from "../groups/GroupFilter";


const ListGroups = ({group: {groups, loading, filtered}, getGroups}) => {
    const {t} = useTranslation();
    // const [currGroups, setCurrGroups] = useState([]);

    useEffect(() => {
        getGroups();
        //eslint-disable-next-line
        // setCurrGroups(groups);

    }, []);

    if (loading) {
        return <Preloader/>;
    }

    return (
        <div>
            <ul className="collection with-header get_guests">
                <li className="collection-header">
                    <h4 className="center"> {t("groups.groups")} </h4>
                </li>
                <li className="collection-item">
                    <GroupFilter/>
                </li>
                {filtered.length > 0 && !loading ? (
                    filtered.map(group => (
                        <GroupItem group={group} key={group.id}/>
                    ))
                ) : (
                    groups !== null && !loading &&
                    groups.map(group => (
                        <GroupItem group={group} key={group.id}/>
                    ))
                )}
            </ul>
        </div>
    );
};

{/*{filtered !== null || groups!== null*/
}
{/*    ? filtered.map(group => (*/
}
{/*        <GroupItem group={group} key={group.id}/>*/
}
{/*    ))*/
}
{/*    : currGroups.map(group => (*/
}
{/*        <GroupItem group={group} key={group.id}/>)*/
}
{/*    )}*/
}
const mapStateToProps = state => ({
    group: state.group
});


export default connect(mapStateToProps, {getGroups})(ListGroups);
