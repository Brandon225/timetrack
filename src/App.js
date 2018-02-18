import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

    state = {
        running: false,
        elapsedTime: 0,
        previousTime: 0,
        startTime: 'Jan 1 12:00AM',
        description: ''
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
        
        console.log(`start? ${start}`);
        console.log('onStart!');

        const now = Date.now();
        const start = new Date(now).toLocaleString();
        console.log(`start ${start}`);
        this.setState({
            running: true,
            previousTime: now,
            startTime: start,
            
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
        });
    };

    render() {
        var seconds = Math.floor(this.state.elapsedTime / 1000);

        var date = new Date(null);
        date.setSeconds(seconds); // specify value for SECONDS here
        var displayTime = date.toISOString().substr(11, 8);

        return (
            <div className="App">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className=" mx-auto">
                            <div className="card text-info border-info">
                                {/* <form className="form"> */}
                                    <div className="card-body">
                                    <h2 className="card-title text-center display-3">{displayTime}</h2>
                                    {/* <p className="card-text text-muted">{this.state.startTime}</p> */}
                                        <input type="hidden" value={displayTime} />
                                        
                                        <div className="form-group">
                                            <label className="card-title" htmlFor="start-time">Start Time: </label>
                                        <input type="text" className="form-control" name="start-time" value={this.state.startTime} disabled />
                                        </div>

                                        <div className="form-group">
                                            <label className="card-title" htmlFor="start-time">Description: </label>
                                            <textarea className="form-control" name="description"></textarea>
                                        </div>

                                        <button type="button" className="btn btn-success" onClick={this.state.running ? this.onStop : this.onStart}>{this.state.running ? 'Stop' : 'Start'}</button>
                                        
                                        <button type="button" className="btn btn-danger ml-2" onClick={this.onReset}>Reset</button>

                                        {/* <button type="submit" className="btn btn-info ml-2" disabled>Submit</button>                                 */}
                                    </div>
                                    {/* <div className="card-footer bg-transparent border-info">
                                        <button type="button" className="btn btn-info">Start</button>
                                        <button type="submit" className="btn btn-success">Submit</button>
                                    </div> */}
                                {/* </form> */}
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
