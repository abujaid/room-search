import React from 'react'
import Signup from '../auth/signup'
import Home from '../home'
import Contact from '../contactus'
import { Switch, Route } from 'react-router-dom'
import Login from '../auth/login'
import PasswordReset from '../auth/password-reset'

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact-us" exact component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/password-reset" component={PasswordReset} />
        </Switch>
    )
}
