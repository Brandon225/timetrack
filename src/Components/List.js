import React from "react";
import Period from './Period';

const List = props =>
{
    const results = props.data;
    let periods;
    if (results.length) {
        periods = results.map(period =>
            <Period
                key={period.id}
                hours={period.hours}
                start_time={period.time_started}
                paid={period.paid}
                description={period.description} />
        );
    } else {
        console.log(`empty results!!`);
        // gifs = <NoGifs />
    }

    return (
    <div className="container">
        <div className="row">
            {periods}
        </div>
    </div>);
}

export default List;