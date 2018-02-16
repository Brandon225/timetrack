import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            {/* <header className="App-header mb-4">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Time Track</h1>
            </header> */}
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-4 mx-auto">
                        <div className="card text-info border-info">
                            <form className="form">
                                <div className="card-body">
                                    <h2 className="card-title text-center display-2">0:00:00</h2>
                                    <input type="hidden" value="0:00:00" />
                                    
                                    <div className="form-group">
                                        <label className="card-title" htmlFor="start-time">Start Time: </label>
                                        <input type="text" className="form-control" name="start-time" value="" disabled />
                                    </div>

                                    <div className="form-group">
                                        <label className="card-title" htmlFor="start-time">Description: </label>
                                        <textarea className="form-control" name="description"></textarea>
                                    </div>

                                    <button type="button" className="btn btn-success">Start</button>
                                    <button type="submit" className="btn btn-info ml-2" disabled>Submit</button>                                
                                </div>
                                {/* <div className="card-footer bg-transparent border-info">
                                    <button type="button" className="btn btn-info">Start</button>
                                    <button type="submit" className="btn btn-success">Submit</button>
                                </div> */}
                            </form>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    );
  }
}

export default App;
