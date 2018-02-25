import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class SessionForm extends Component {

    // Handles the state of the inputs text
    state = {
        descriptionText: this.props.description
    }

    onDescriptionChange = e => {
        this.setState({ descriptionText: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();

        // Send data to the App state
        this.props.handleSubmit(this.description.value);

        // this.props.onSearch(this.state.searchText);
        e.currentTarget.reset();
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit} >
                <input type="hidden" name="hours" value={this.props.hours} />
                <input type="hidden" name="start_time" value={this.props.startTime} />
                <input type="hidden" name="paid" value={this.props.paid} />
                <div className="form-group">
                    <label htmlFor="description" className="text-white">Description</label>
                    <textarea
                        className="form-control"
                        onChange={this.onDescriptionChange}
                        name="description"
                        value={this.state.descriptionText}
                        ref={(input) => this.description = input}
                        required />
                </div>
                <button type="submit" title="submit" className="btn btn-light">submit</button>
            </form>
        );
    }

}

SessionForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    hours: PropTypes.string.isRequired
}