import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';
import Header from './Components/Header';
import axios from 'axios';

class App extends Component {
    state = {
        periods: []
    }

    componentDidMount() {
        console.log(`componentDidMount`);
        this.getPeriods();
    }

    getPeriods = () => {

        console.log(`getPeriods!`);

        const url = 'https://timetrack-reimagin8d.herokuapp.com/api/periods';

        // USE AXIOS TO POST DATA TO API
        axios.get(url)
            .then(response => {
                console.log(`GET response? ${JSON.stringify(response)}`);
                this.setState({
                    periods: response.data
                });
            })
            .catch(error => {
                console.log(`Error fetching and parsing periods ${error}`);

                this.setState({
                    periods: [error]
                });
            });
    };

    handleSubmit = (data) => {

        console.log(`App Handle Submit! ${data}`);

        const url = 'https://timetrack-reimagin8d.herokuapp.com/api/periods';

        // USE AXIOS TO POST DATA TO API
        axios.post(url, data)
            .then(response => {
                console.log(`POST response? ${response}`);
            })
           .catch(error => {
               console.log(`Error posting ${error}`);
            });
    };

    render() {

        return (
            <div className="App">
                <Header />
                <Main 
                    handleSubmit={this.handleSubmit} 
                    data={this.state.periods}/>
            </div>
            
        );
    }
}

export default App;
