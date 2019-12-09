import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthenticationService from '../Login/AuthenticationService'
import {Companies} from '../Company/Companies';


export default function AuthenticatedRoute() {

    return (
        <>
            {AuthenticationService.isUserLoggedIn() ?
                <Route path="/companies">
                    <Companies />
                </Route>
                : <Redirect to="/login" />
            }

        </>
    )
}