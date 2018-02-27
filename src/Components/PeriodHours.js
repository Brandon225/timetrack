import React from "react";
import PropTypes from "prop-types";

const PeriodHours = props => {
    if (props.isEditing) 
    {
        console.log(`PeriodHours isEditing!`);
        return (
            <input 
                key={props.id}
                type="text" 
                value={props.children} 
                onChange={props.handleEdits}
                className="form-control"/>
        ); 
    }

    // console.log(`GuestName is NOT Editing!`);
    
    return (
        <span className={props.className}>
            {props.children}
        </span>
    ); 
};

PeriodHours.propTypes = {
    id: PropTypes.string.isRequired,
    isEditing: PropTypes.bool.isRequired,
    handleEdits: PropTypes.func.isRequired
}

export default PeriodHours;