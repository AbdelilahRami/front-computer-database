import React, { useState } from 'react';
import { Input, Button, Label } from 'reactstrap';
import { authentificatePage } from '../../containers/Login/Login.hook'
import { Redirect } from 'react-router-dom'

export function Login() {

    const [indetifiant, setIndetifiant] = useState({ username: "", password: "" })
    const [login, setLogin] = useState(false)
    const [error, setError] = useState(false)

    function show() {
        authentificatePage(indetifiant).then(responce => {
            console.log(responce)
            setLogin(true)
        })
        .catch(error=> setError(true))
    }

    return (
        <>
        {error? <div>Error de connection, identifiant ou mot de passe incorrect</div>:<></>}
            {login ? <Redirect to="/computers" /> :

            
                <form>
                    <Label> Login :</Label>
                    <Input type="text" name="username" onChange={event => setIndetifiant({ ...indetifiant, username: event.target.value })}></Input>

                    <Label> Password :</Label>
                    <Input type="password" name="password" onChange={event => setIndetifiant({ ...indetifiant, password: event.target.value })}></Input>

                    <Button onClick={() => show()}>Submit</Button>
                </form>}
        </>
    )
}