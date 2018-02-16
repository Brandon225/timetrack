import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

    state = {
        running: false,
        elapsedTime: 0,
        previousTime: 0
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
        console.log('onTick');

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
        this.setState({
            running: true,
            previousTime: Date.now(),
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
                        <div className="col-4 mx-auto">
                            <div className="card text-info border-info">
                                {/* <form className="form"> */}
                                    <div className="card-body">
                                    <h2 className="card-title text-center display-3">{displayTime}</h2>
                                        <input type="hidden" value="0:00:00" />
                                        
                                        <div className="form-group">
                                            <label className="card-title" htmlFor="start-time">Start Time: </label>
                                            <input type="text" className="form-control" name="start-time" value="" disabled />
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
