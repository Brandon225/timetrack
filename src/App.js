import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SessionForm from './Components/SessionForm';
import axios from 'axios';

class App extends Component {

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
        if (this.state.running)
        {
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
        this.setState({
            elapsedTime: 0,
            previousTime: Date.now(),
            startTime: '',
        });
    };

    displayTime = () => {
        var seconds = Math.floor(this.state.elapsedTime / 1000);
        var date = new Date(null);
        date.setSeconds(seconds); // specify value for SECONDS here
        return date.toISOString().substr(11, 8);
    }

    handleSubmit = (description) => {

        console.log(`Handle Submit!`);

        // stop the timer
        this.onStop();

        const data = {
            start_time: this.state.startTime,
            hours: this.displayTime(),
            paid: this.state.paid,
            description: description
        }

        const url = 'https://timetrack-reimagin8d.herokuapp.com/api/periods';

        // USE AXIOS TO POST DATA TO API
        axios.post(url, data)
            .then(response => {
                console.log(`POST response? ${response}`);
            })
           .catch(error => {
               console.log(`Error fetching and parsing data ${error}`);
            });
    }

    render() {
        // var seconds = Math.floor(this.state.elapsedTime / 1000);

        // var date = new Date(null);
        // date.setSeconds(this.getSeconds); // specify value for SECONDS here
        // var displayTime = date.toISOString().substr(11, 8);

        var btnClass = this.state.running ? 'btn-outline-danger' : 'btn-outline-success';
        var btnText = this.state.running ? 'stop' : 'start';
        return (
            <div className="App">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="mx-auto">
                            <div className="card text-info border-info">
                                <div className="card-body">
                                    <h2 className="card-title text-center display-3">{this.displayTime()}</h2>
                                    <p className="card-text text-muted">{this.state.startTime}</p>
                                    <button type="button" title={btnText} className={`btn btn-lg ${btnClass}`} onClick={this.state.running ? this.onStop : this.onStart}>{btnText}</button>

                                    <button type="button" title="reset" className={`btn btn-outline-info btn-lg ml-2 ${this.state.elapsedTime > 0 ? 'd-inline-flex' : 'd-none'}`} onClick={this.onReset}><i className="material-icons">settings_backup_restore</i></button>

                                </div>
                                <div className={`card-footer bg-info ${this.state.elapsedTime > 0 ? 'd-inline-block' : 'd-none'}`}>
                                    <SessionForm
                                        onSubmit={this.handleSubmit}
                                        hours={this.displayTime()}
                                        startTime={this.state.startTime}
                                        paid={false}
                                        description={''} />
                                        {/* The description prop will only be needed in the future when SessionForm is loaded to edit data */}
                                </div>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
