import React, { Component } from 'react'
// import { Field, reduxForm } from 'redux-form'
import axios from 'axios';

class PeriodForm extends Component 
{
    state = {
        hours: this.props.hours,
        start_time: this.props.start_time,
        paid: this.props.paid,
        description: this.props.description,
        error: false
    }

    onChange = (e) => {
        // Because we named the inputs to match their corresponding values in state, it's
        // super easy to update the state
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    handleSubmit = e => {
        e.preventDefault();

        const url = `https://timetrack-reimagin8d.herokuapp.com/api/periods/${this.props.id}`;

        // console.log(`handlePeriodUpdate url? ${url}`);

        const data = {
            hours: this.state.hours,
            start_time: this.state.start_time,
            paid: this.state.paid,
            description: this.state.description
        }

        const state = this.state;

        // USE AXIOS TO POST DATA TO API
        axios.put(url, data)
            .then(response => {
                console.log(`POST response? ${response}`);
                state['error'] = false;
                this.setState(state);
                this.props.handleToggleEditing;
            })
            .catch(error => {
                console.log(`Error posting ${error}`);
                state['error'] = true;
                this.setState(state);
            });

    }


    render () {
        const { id, handleSubmit, handleToggleEditing } = this.props;
        const { hours, start_time, description, paid } = this.state;

        return(
            <div className="col-sm-4 my-2">
                <form ref={(input) => this.form = input} onSubmit={this.handleSubmit} method="PUT">
                    <div className="card bg-info text-white">
                        <div className={this.state.error ? 'card-header d-block' : 'd-none'}>
                            <p className="card-text text-warning">Uh Oh! Couldn't save changes. Please try again.</p>
                        </div>
                        <div className="card-body">

                            <div className="form-group">
                                <input className="form-control" name="hours" type="text" value={hours} onChange={this.onChange} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="start_time" className="font-weight-bold text-dark">start time:</label>
                                <input className="form-control" name="start_time" type="text" value={start_time} onChange={this.onChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description" className="font-weight-bold text-dark">description</label>
                                <textarea className="form-control" name="description" value={description} onChange={this.onChange} required />
                            </div>
                            <label className="font-weight-bold text-dark">paid?</label><br />
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" name="paid" id="paid-yes" type="radio" value="true" onChange={this.onChange} />
                                <label className="form-check-label" htmlFor="paid-yes">Yes</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" name="paid" id="paid-no" type="radio" value="false" onChange={this.onChange} />
                                <label className="form-check-label" htmlFor="paid-no">No</label>
                            </div>
                        </div>
                        <div className='card-footer d-inline-block'>
                            <button className="btn btn-success" type="submit">save</button>
                            <button className="btn btn-danger ml-2" type="button" onClick={handleToggleEditing}>cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        )
        
    }
}
// hours, start_time, description, paid, handleToggleEditing
// PeriodForm = reduxForm({
//     // a unique name for the form
//     form: 'period',
//     enableReinitialize: true // this is needed!!
// })(PeriodForm)

// You have to connect() to any reducers that you wish to connect to yourself
// PeriodForm = connect(
//     state => ({
//         hours: this.props.hours,
//         start_time: this.props.start_time,
//         description: this.props.description,
//         paid: this.props.paid
//     })
// )(PeriodForm);

// The above ()() can be broken down to
// create new, "configured" function
// createReduxForm = reduxForm({ form: 'period' })
// evaluate it for PeriodForm component
// PeriodForm = createReduxForm(PeriodForm)

export default PeriodForm