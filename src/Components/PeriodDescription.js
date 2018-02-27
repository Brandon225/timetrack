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
                onChange={props.handleEdits}
                className="form-control"/>
        ); 
    }

    // console.log(`GuestName is NOT Editing!`);
    
    return (
        <p className="card-text text-light">
            <span className="font-weight-bold text-dark">{props.type}:</span>
            <br />
            {props.children}
        </p>
    ); 
};

PeriodHours.propTypes = {
    isEditing: PropTypes.bool.isRequired,
    handleEdits: PropTypes.func.isRequired
}

export default PeriodHours;