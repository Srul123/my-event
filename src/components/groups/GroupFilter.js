import React, {useEffect, useRef} from 'react';
import { filterGroups, clearFilter} from '../../redux/actions/groupActions';
import {connect} from "react-redux";

const GroupFilter = ({group: { filtered }, filterGroups, clearFilter}) => {
    const text = useRef('');

    useEffect(() =>{
       if (filtered===null) {
           text.current.value = '';
       }
    });

    const onChange = e => {
        console.log("filter caleed srula");
        filterGroups(e.target.value);
        if(text.current.value !== ''){
            filterGroups(e.target.value);
        } else {
            clearFilter();
        }
    }

    return (
        <form>
            <input
                ref={text}
                type="text"
                placeholder={"Filter Groups..."}
                onChange={onChange}
            />
        </form>
    );
};

const mapStateToProps = state => ({
    group: state.group
});


export default connect(mapStateToProps, { filterGroups, clearFilter })(GroupFilter);
