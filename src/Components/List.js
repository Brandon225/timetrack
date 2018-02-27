import React from "react";
import Period from './Period';

const List = props =>
{
    const results = props.data;
    let periods;
    if (results.length) {
        periods = results.map(period =>
            <Period
                key={period._id}
                hours={period.hours}
                start_time={period.start_time}
                paid={period.paid}
                description={period.description}
                handleUpdate={props.handleUpdate} 
                isEditing={period.isEditing ? true : false}
                handleToggleEditing={() => props.toggleEditing(period._id)}
                handleHourEdits={text => props.setHours(text, period._id)}
                savePeriod={() => props.savePeriod(period)} />
        );
    } else {
        console.log(`empty results!!`);
        // gifs = <NoGifs />
    }

    return (
    <div className="container mt-5 pt-5">
        <div className="row">
            {periods}
        </div>
    </div>);
}

export default List;