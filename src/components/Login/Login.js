import React, { useState } from 'react';
import { Container, Col, Row, Form, Label,Input, Button } from 'reactstrap';
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
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

            <Container>
            <Form className="form">
            <Row><Col sm="3"><h2>Sign In</h2></Col></Row>

                <Row>
                    <Col xs="3"><Label>Username</Label></Col>
                    <Col xs="3"><Input type="text" name="username" onChange={event => setIndentifiant({ ...indentifiant, username: event.target.value })} /></Col>
                </Row>
                <Row>
                    <Col xs="3"><Label for="examplePassword">Password</Label></Col>
                    <Col xs="3"><Input type="password" name="password" onChange={event => setIndentifiant({ ...indentifiant, password: event.target.value })} /></Col>
                </Row>
                <p></p>
                <Row><Col xs="3"><Button onClick={() => show()}>Submit</Button></Col></Row>
            </Form>
        </Container>}
        </>
    )
}