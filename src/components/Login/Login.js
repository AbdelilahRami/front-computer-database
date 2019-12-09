import React, { useState } from 'react';
import { Input, Button, Label } from 'reactstrap';
import { authentificatePage } from '../../containers/Login/Login.hook'
import { Redirect } from 'react-router-dom'
import AuthenticationService from './AuthenticationService'

export default function Login() {

    const [indentifiant, setIndentifiant] = useState({ username: "", password: "" })
    const [login, setLogin] = useState(false)
    const [error, setError] = useState(false)

    function show() {
        authentificatePage(indentifiant).then(responce => {
            AuthenticationService.registerSuccessfulLoginForJwt(indentifiant.username,responce.data)
            setLogin(true)
        })
        .catch(()=> setError(true))
    }

    return (
        <>
        {error? <div>Error de connection, identifiant ou mot de passe incorrect</div>:<></>}

            {login ? <Redirect to="/computers" /> :

                <form>
                    <Label> Login :</Label>
                    <Input type="text" name="username" onChange={event => setIndentifiant({ ...indentifiant, username: event.target.value })}></Input>

                    <Label> Password :</Label>
                    <Input type="password" name="password" onChange={event => setIndentifiant({ ...indentifiant, password: event.target.value })}></Input>

                    <Button onClick={() => show()}>Submit</Button>
                </form>}
        </>
    )
}