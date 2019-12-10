import React, { useState } from 'react';
import { Container, Col, Row } from 'reactstrap';
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { authentificatePage } from '../../containers/Login/Login.hook'
import { Redirect } from 'react-router-dom'
import AuthenticationService from './AuthenticationService'
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormGroup, Form, Button } from 'react-bootstrap';

export default function Login() {

    const [indentifiant, setIndentifiant] = useState({ username: "", password: "" })
    const [login, setLogin] = useState(false)
    const [error, setError] = useState(false)

    function show() {
        authentificatePage(indentifiant).then(responce => {
            AuthenticationService.registerSuccessfulLoginForJwt(indentifiant.username, responce.data)
            setLogin(true)
        })
            .catch(() => setError(true))
    }
    return (
        <>
            {error ? <div>Error de connection, identifiant ou mot de passe incorrect</div> : <></>}

            {login ? <Redirect to="/computers" /> :


                <Container>
                    <Form className="form">
                        <Row>
                            <Col sm="4"></Col>
                            <Col sm="5"><h1 style={{ color: '#17a2b8', display: 'block' }}>Sign In :</h1></Col></Row>
                        <Form.Group>
                            <Form.Label> Username :</Form.Label>
                            <Form.Control type="text" placeholder="Enter a valid username" onChange={event => setIndentifiant({ ...indentifiant, username: event.target.value })} />
                        </Form.Group>
                        <FormGroup>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={event => setIndentifiant({ ...indentifiant, password: event.target.value })} />
                        </FormGroup>
                        <div style={{textAlign:'center'}}>
                                <Button style={{backgroundColor:'#17a2b8',borderColor:'#17a2b8',marginLeft:'auto',width:'20%'}} size="lg" type="submit" onClick={() => show()}>
                                    Submit

                                </Button>
                        </div>
                    </Form>
                </Container>}
        </>

    )
}