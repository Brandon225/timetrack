import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import SessionForm from './SessionForm';

export default class Timer extends Component {

    state = {
        running: false,
        elapsedTime: 0,
        previousTime: 0,
        startTime: '',
        paid: false
    }

    componentDidMount() {
        console.log(`componentDidMount`);
        this.interval = setInterval(this.onTick, 100);
    }

    componentWillUnMount() {
        console.log(`componentWillUnMount`);

        // cleanup interval
        clearInterval(this.interval);
    }

    onTick = () => {
        if (this.state.running) {
            var now = Date.now();
            this.setState({
                previousTime: now,
                elapsedTime: this.state.elapsedTime + (now - this.state.previousTime),
            });
        }
    };

    onStart = () => {

        console.log('onStart!');

        const now = Date.now();
        const start = new Date(now).toLocaleString();
        console.log(`start ${start}`);
        this.setState({
            running: true,
            previousTime: now,
            startTime: start
        });

    };

    onStop = () => {
        console.log('onStop!');
        this.setState({ running: false });
    };

    onReset = () => {
        console.log('onReset!');
        const now = Date.now();
        const start = new Date(now).toLocaleString();
        let startTime = this.state.running ? start : '';
        this.setState({
            elapsedTime: 0,
            previousTime: Date.now(),
            startTime: startTime,
        });
    };

    displayTime = () => {
        var seconds = Math.floor(this.state.elapsedTime / 1000);
        var date = new Date(null);
        date.setSeconds(seconds); // specify value for SECONDS here
        return date.toISOString().substr(11, 8);
    };

    handleSubmit = (description) => 
    {
        console.log(`Timer handleSubmit`);
        const data = {
            start_time: this.state.startTime,
            hours: this.displayTime(),
            paid: this.state.paid,
            description: description
        }

        // Send the data to the parent
        this.props.handleSubmit(data);

        // Reset time, date, and running
        this.setState({
            running: false,
            elapsedTime: 0,
            previousTime: Date.now(),
            startTime: '',
        });
    };

    canSubmit = () => {
        return this.state.elapsedTime > 0;
    };

    render() {

        return (
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="mx-auto">
                        <div className="card text-info border-info">
                            <div className="card-body">
                                <h2 className="card-title text-center display-3">{this.displayTime()}</h2>
                                <p className="card-text text-muted">{this.state.startTime}</p>
                                {this.state.running ? 
                                    <button className='btn btn-lg btn-outline-success'  onClick={this.onStop}>Stop</button>
                                    :
                                    <button className='btn btn-lg btn-outline-danger'  onClick={this.onStart}>Start</button>
                                }

                                <button type="button" title="reset" className={`btn btn-outline-info btn-lg ml-2 d-inline-flex`} onClick={this.onReset} disabled={!this.canSubmit()}><i className="material-icons">settings_backup_restore</i></button>
                            </div>
                            <div className={`card-footer bg-info ${this.state.elapsedTime > 0 ? 'd-inline-block' : 'd-none'}`}>
                                <SessionForm
                                    handleSubmit={this.handleSubmit}
                                    hours={this.displayTime()}
                                    startTime={this.state.startTime}
                                    paid={false}
                                    description={''} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}