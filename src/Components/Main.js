import React from 'react'
import { Switch, Route } from 'react-router-dom'
import  PropTypes  from 'prop-types'
import Timer from './Timer'
import List from './List'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = props => (
    <main>
        <Switch>
            <Route exact path='/' component={ () =>
                <Timer 
                    handleSubmit={props.handleSubmit} />
                // <Timer 
                //     displayTime={props.displayTime}
                //     running={props.running}
                //     // btnClass={props.btnClass}z
                //     // btnText={props.btnText}
                //     handlePlayToggle={props.handlePlayToggle}
                //     canSubmit={props.canSubmit}
                //     handleReset={props.handleReset}
                    // handleSubmit={props.handleSubmit}
                //     startTime={props.startTime} />
                
                } 
            />
            <Route path='/list' component={() => 
                <List />} 
            />
        </Switch>
    </main>
)

Main.propTypes = {
    handleSubmit: PropTypes.func.isRequired
}

export default Main