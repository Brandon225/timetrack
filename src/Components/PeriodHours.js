import React from "react";
import PropTypes from "prop-types";

const PeriodHours = props => {
    if (props.isEditing) 
    {
        console.log(`PeriodHours isEditing!`);
        return (
            <input 
                type="text" 
                value={props.children} 
                onChange={props.handleHourEdits}/>
        ); 
    }

    // console.log(`GuestName is NOT Editing!`);
    
    return (
        <span>
            {props.children}
        </span>
    ); 
};

PeriodHours.propTypes = {
    isEditing: PropTypes.bool.isRequired,
    handleHourEdits: PropTypes.func.isRequired
}

export default PeriodHours;