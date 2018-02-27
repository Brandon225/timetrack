import React from 'react';
import Moment from 'moment';
import SessionForm from './SessionForm';
import PeriodHours from './PeriodHours';

const Period = props => {

    console.log(`props paid? ${props.paid}`);
    const startTime = Moment(props.start_time).format('MMMM Do YYYY, h:mm:ss a');
    return (
        <div className="col-sm-4 my-2">
            <div className="card bg-info text-white">
                <div className="card-body">
                    <PeriodHours 
                        isEditing={props.isEditing} 
                        handleHourEdits={e => props.handleHourEdits(e.target.value)}>
                        {props.hours}
                    </PeriodHours>
                    {/* <h2 className="card-title text-center display-3">{props.hours}</h2> */}
                    <p className="card-text text-light"><span className="font-weight-bold text-dark">start time:</span><br/>{startTime}</p>
                    <p className="card-text text-light"><span className="font-weight-bold text-dark">description:</span><br />{props.description}</p>
                    <p className="card-text text-light"><span className="font-weight-bold text-dark">paid:</span> {props.paid ? 'yes' : 'no'}</p>
                    
                </div>
                <div className='card-footer d-inline-block'>
                    {props.isEditing ?
                        <button className='btn btn-success' onClick={props.savePeriod}>save</button>
                        :
                        <button className='btn btn-warning' onClick={props.handleToggleEditing}>edit</button>
                    }
                    <button className={`btn btn-danger ml-2 d-inline-flex`} onClick={props.handleRemove}>remove</button>
                </div>
            </div>      
            {/* <ul className="list-group">
                <li className="list-group-item">hours: {props.hours} </li>
                <li className="list-group-item">date: {Moment(props.start_time).format('MMMM Do YYYY, h:mm:ss a')}</li>
                <li className="list-group-item">paid: {props.paid===false ? 'no' : 'yes'}</li>
                <li className="list-group-item">description: {props.description}</li>
            </ul> */}
        </div>
    );
}

export default Period;