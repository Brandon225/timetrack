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
                id={period._id}
                hours={period.hours}
                start_time={period.start_time}
                paid={period.paid}
                description={period.description}
                isEditing={period.isEditing ? true : false}
                handleToggleEditing={() => props.toggleEditing(period._id)}/>
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