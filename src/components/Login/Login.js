import React, { useState } from 'react';
import { Input, Button } from 'reactstrap';
import { authentificatePage } from '../../containers/Login/Login.hook'
import { Container, Col, Row, Form, FormGroup, Label, } from 'reactstrap';
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export function Login() {
    const authentificate = { username: "", password: "" }
    const [stateLogin, setLogin] = useState(authentificate)

    function show() {
        authentificatePage(stateLogin)
    }

    return (
        <>
            <Container>
                <Form className="form">
                <Row><Col sm="3"><h2>Sign In</h2></Col></Row>

                    <Row>
                        <Col xs="3"><Label>Username</Label></Col>
                        <Col xs="3"><Input type="text" name="username" onChange={event => setLogin({ ...stateLogin, username: event.target.value })} /></Col>
                    </Row>
                    <Row>
                        <Col xs="3"><Label for="examplePassword">Password</Label></Col>
                        <Col xs="3"><Input type="password" name="password" onChange={event => setLogin({ ...stateLogin, password: event.target.value })} /></Col>
                    </Row>
                    <p></p>
                    <Row><Col xs="3"><Button onClick={() => show()}>Submit</Button></Col></Row>
                </Form>
            </Container>
        </>
                )
}