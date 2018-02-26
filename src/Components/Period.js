import React from 'react';
import Moment from 'moment';
import SessionForm from './SessionForm';
import PeriodHours from './PeriodHours';

const Period = props => {

    console.log(`props paid? ${props.paid}`);
    const startTime = Moment(props.start_time).format('MMMM Do YYYY, h:mm:ss a');
    return (
        <div className="col-sm-4 my-2">
            <div className="card text-info border-info">
                <div className="card-body">
                    <PeriodHours 
                        isEditing={props.isEditing} 
                        handleHourEdits={e => props.handleHourEdits(e.target.value)} >
                        {props.hours}
                    </PeriodHours>
                    {/* <h2 className="card-title text-center display-3">{props.hours}</h2> */}
                    <p className="card-text text-muted">{startTime}</p>

                    <button className='btn btn-outline-success' onClick={props.handleToggleEditing}>{props.isEditing ? 'save' : 'edit'}</button>
                    <button className={`btn btn-outline-danger ml-2 d-inline-flex`} onClick={props.handleRemove}>remove</button>

                    {/* <button className='btn btn-lg btn-outline-success' onClick={this.onStop}>Edit</button> */}

                    {/* <button type="button" title="reset" className={`btn btn-outline-info btn-lg ml-2 d-inline-flex`} onClick={this.onReset} disabled={!this.canSubmit()}><i className="material-icons">settings_backup_restore</i></button> */}
                </div>
                <div className='card-footer bg-info d-inline-block'>
                    <SessionForm
                        handleUpdate={props.handleSubmit}
                        hours={props.hours}
                        startTime={startTime}
                        paid={props.paid}
                        description={props.description} />
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