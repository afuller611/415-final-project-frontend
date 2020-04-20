import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import App from './App'
import './App.css';


const AppRouter = (props) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/add">

                </Route>

                <Route path="/">
                    <App />
                </Route>
            </Switch>
        </Router>
    )
}
export default AppRouter
