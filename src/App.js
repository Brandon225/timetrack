import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';
import Header from './Components/Header';
import axios from 'axios';

class App extends Component {

    state = {
        paid: false
    }

    // componentDidMount() {
    //     console.log(`componentDidMount`);
    //     this.interval = setInterval(this.onTick, 100);
    // }

    // componentWillUnMount() {
    //     console.log(`componentWillUnMount`);
        
    //     // cleanup interval
    //     clearInterval(this.interval);
    // }

    // onTick = () => {
    //     if (this.state.running)
    //     {
    //         var now = Date.now();
    //         this.setState({
    //             previousTime: now,
    //             elapsedTime: this.state.elapsedTime + (now - this.state.previousTime),
    //         });
    //     }
    // };

    // onStart = () => {
        
    //     console.log('onStart!');

    //     const now = Date.now();
    //     const start = new Date(now).toLocaleString();
    //     console.log(`start ${start}`);
    //     this.setState({
    //         running: true,
    //         previousTime: now,
    //         startTime: start
    //     });

    // };

    // onStop = () => {
    //     console.log('onStop!');
    //     this.setState({ running: false });
    // };

    // onReset = () => {
    //     console.log('onReset!');
    //     const now = Date.now();
    //     const start = new Date(now).toLocaleString();
    //     let startTime = this.state.running ? start : '';
    //     this.setState({
    //         elapsedTime: 0,
    //         previousTime: Date.now(),
    //         startTime: startTime,
    //     });
    // };

    // displayTime = () => {
    //     var seconds = Math.floor(this.state.elapsedTime / 1000);
    //     var date = new Date(null);
    //     date.setSeconds(seconds); // specify value for SECONDS here
    //     return date.toISOString().substr(11, 8);
    // }

    handleSubmit = (data) => {

        console.log(`App Handle Submit! ${data}`);

        // stop the timer
        // this.onStop();

        // const data = {
        //     start_time: this.state.startTime,
        //     hours: this.displayTime(),
        //     paid: this.state.paid,
        //     description: description
        // }

        const url = 'https://timetrack-reimagin8d.herokuapp.com/api/periods';

        // USE AXIOS TO POST DATA TO API
        axios.post(url, data)
            .then(response => {
                console.log(`POST response? ${response}`);
            })
           .catch(error => {
               console.log(`Error fetching and parsing data ${error}`);
            });
    };

    render() {

        return (
            <div className="App">
                <Header />
                <Main 
                    // displayTime={this.displayTime()}
                    // running={this.state.running}
                    // btnClass={this.buttonData().class}
                    // btnText={this.state.running ? 'stop' : 'start'}
                    // handlePlayToggle={this.handlePlayToggle()}
                    // canSubmit={this.state.elapsedTime > 0}
                    // handleReset={this.onReset}
                    handleSubmit={this.handleSubmit}
                    // startTime={this.state.startTime}
                    />
            </div>
            
        );
    }
}

export default App;
