import React from 'react';

const Period = props => {

    return (
        <div className="col-sm-4">        
            <ul className="list-group">
                <li className="list-group-item">{props.key} </li>
                <li className="list-group-item">{props.hours} </li>
                <li className="list-group-item">{props.start_time}</li>
                <li className="list-group-item">{props.paid}</li>
                <li className="list-group-item">{props.description}</li>
            </ul>
        </div>
    );
}

export default Period;