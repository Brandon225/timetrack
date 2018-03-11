import React from 'react';
import Moment from 'moment';
import PeriodForm from './PeriodForm';

const Period  = props => {

    const startTime = Moment(props.start_time).format('MMMM Do YYYY, h:mm:ss a');
    const { id, isEditing, handleToggleEditing, hours, description, paid } = props;
    if (isEditing) 
    {
        return (
            // let InitializeFromStateForm = reduxForm({
            //     form: 'initializeFromState',
            //     enableReinitialize: true // this is needed!!
            // })(UserEdit)
            <PeriodForm 
                id={id}
                handleToggleEditing={handleToggleEditing} 
                hours={hours}
                start_time={props.start_time}
                display_time={startTime}
                description={description}
                paid={paid}
                 />
        )
    } 
    return (
        <div className="col-sm-4 my-2">
            <div className="card bg-info text-white">
                <div className="card-body">
                    
                    <h2 className="card-title text-center display-3">{hours}</h2>
                    <p className="card-text text-light"><span className="font-weight-bold text-dark">start time:</span><br/>{startTime}</p>
                    <p className="card-text text-light"><span className="font-weight-bold text-dark">description:</span><br />{description}</p>

                    <p className="card-text text-light"><span className="font-weight-bold text-dark">paid:</span> {paid ? 'yes' : 'no'}</p>
                    
                </div>
                <div className='card-footer d-inline-block'>
                    <button className='btn btn-warning' onClick={handleToggleEditing}>edit</button>
                    <button className={`btn btn-danger ml-2 d-inline-flex`} >remove</button>
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