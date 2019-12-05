import React, { useState } from 'react';
import { Navbar, NavbarBrand, Container, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { actualPage } from '../../containers/computer/Computers.hook';
import { countComputers } from '../../containers/computer/Computers.hook'
import { exportDefaultSpecifier } from '@babel/types';

export function Footer() {

    const [objectToSend, setObject] = useState({ limite: 10, actPage: 1 })
    const [stategauche, setgauche] = useState()
    const [statedroite, setdroite] = useState()
    const [statecount, setcount] = useState(countComputers())
    const [statenumbers, setnumbers] = useState()

    function showLimit() {
        //limitPage(statelist);
    }

    function calculatePage(limite) {
        setObject({ ...objectToSend, limite: limite,actPage:1 })
        var resulte = Math.round(statecount / limite)
        setnumbers(resulte)
        // return statenumbers
    }

    function iterateButton() {
        if (objectToSend.actPage == 1) {
            return (
                <>
                    <button style={{ color: 'white', backgroundColor: 'blue' }} onClick={() => showButton(objectToSend.actPage + 1)}>{objectToSend.actPage + 1}</button>
                    <button style={{ color: 'white', backgroundColor: 'blue' }} onClick={() => showButton(objectToSend.actPage + 2)}>{objectToSend.actPage + 2}</button>
                </>
            )
        } else if (objectToSend.actPage == statenumbers) {
            return (
                <>
                    <button style={{ color: 'white', backgroundColor: 'blue' }} onClick={() => showButton(objectToSend.actPage - 2)}>{objectToSend.actPage - 2}</button>
                    <button style={{ color: 'white', backgroundColor: 'blue' }} onClick={() => showButton(objectToSend.actPage - 1)}>{objectToSend.actPage - 1}</button>
                </>
            )
        }else if(objectToSend.actPage==2){
            return(
            <>
            <button style={{ color: 'white', backgroundColor: 'red' }} onClick={() => showButton(objectToSend.actPage)}>{objectToSend.actPage}</button>
            <button style={{ color: 'white', backgroundColor: 'blue' }} onClick={() => showButton(objectToSend.actPage + 1)}>{objectToSend.actPage + 1}</button>
            <button style={{ color: 'white', backgroundColor: 'blue' }} onClick={() => showButton(objectToSend.actPage + 2)}>{objectToSend.actPage + 2}</button> 
            </>
            )
        }else if(objectToSend.actPage==3){
           return( <>
            <button style={{ color: 'white', backgroundColor: 'blue' }} onClick={() => showButton(objectToSend.actPage - 1)}>{objectToSend.actPage - 1}</button>
            <button style={{ color: 'white', backgroundColor: 'red' }} onClick={() => showButton(objectToSend.actPage)}>{objectToSend.actPage}</button>
            <button style={{ color: 'white', backgroundColor: 'blue' }} onClick={() => showButton(objectToSend.actPage + 1)}>{objectToSend.actPage + 1}</button>
            <button style={{ color: 'white', backgroundColor: 'blue' }} onClick={() => showButton(objectToSend.actPage + 2)}>{objectToSend.actPage + 2}</button> 
            </>
            )
        }else if(objectToSend.actPage==statenumbers-1){
            return( <>
                <button style={{ color: 'white', backgroundColor: 'blue' }} onClick={() => showButton(objectToSend.actPage - 2)}>{objectToSend.actPage - 2}</button>
                <button style={{ color: 'white', backgroundColor: 'blue' }} onClick={() => showButton(objectToSend.actPage - 1)}>{objectToSend.actPage - 1}</button>
                <button style={{ color: 'white', backgroundColor: 'red' }} onClick={() => showButton(objectToSend.actPage)}>{objectToSend.actPage}</button>
                </>
                )
        }else if(objectToSend.actPage==statenumbers-2){
            return( <>
                <button style={{ color: 'white', backgroundColor: 'blue' }} onClick={() => showButton(objectToSend.actPage - 2)}>{objectToSend.actPage - 2}</button>
                <button style={{ color: 'white', backgroundColor: 'blue' }} onClick={() => showButton(objectToSend.actPage - 1)}>{objectToSend.actPage - 1}</button>
                <button style={{ color: 'white', backgroundColor: 'red' }} onClick={() => showButton(objectToSend.actPage)}>{objectToSend.actPage}</button>
                <button style={{ color: 'white', backgroundColor: 'blue' }} onClick={() => showButton(objectToSend.actPage + 1)}>{objectToSend.actPage + 1}</button>
                </>
                )
        }else{
            return( <>
                <button style={{ color: 'white', backgroundColor: 'blue' }} onClick={() => showButton(objectToSend.actPage - 2)}>{objectToSend.actPage - 2}</button>
                <button style={{ color: 'white', backgroundColor: 'blue' }} onClick={() => showButton(objectToSend.actPage - 1)}>{objectToSend.actPage - 1}</button>
                <button style={{ color: 'white', backgroundColor: 'red' }} onClick={() => showButton(objectToSend.actPage)}>{objectToSend.actPage}</button>
                <button style={{ color: 'white', backgroundColor: 'blue' }} onClick={() => showButton(objectToSend.actPage + 1)}>{objectToSend.actPage + 1}</button>
                <button style={{ color: 'white', backgroundColor: 'blue' }} onClick={() => showButton(objectToSend.actPage + 2)}>{objectToSend.actPage + 2}</button>
                </>
                )
        }
    }

    function showButton(click) {
        if (click === 1) {
            setgauche(false);
            setdroite(true);
        } else if (click === statenumbers) {
            setgauche(true);
            setdroite(false);
        } else {
            setgauche(true);
            setdroite(true);
        }
        setObject({ ...objectToSend, actPage: click })
        actualPage(click);
    }

    function pageIteration(bool) {
        if (bool == true ) {
            showButton(objectToSend.actPage - 1)
        } else if(bool==false){
            showButton(objectToSend.actPage + 1)
        }
    }

    return (
        <div className="fixed-bottom">
            <Navbar color="dark" dark>
                <Container>
                    <NavbarBrand>2019-2020</NavbarBrand>
                    {stategauche ? <FontAwesomeIcon style={{ color: 'white' }} icon={faAngleDoubleLeft} onClick={() => pageIteration(true)} /> : <></>}
                    <button style={{ color: 'white', backgroundColor: 'blue' }} onClick={() => showButton(1)}>1</button>
                    {
                       objectToSend.actPage <=4?<></>:<button style={{ color: 'white', backgroundColor: 'blue' }} onClick={() => {}}>...</button>
                    }
                    {
                        iterateButton()
                    }
                    {
                       objectToSend.actPage >=statenumbers-3?<></>:<button style={{ color: 'white', backgroundColor: 'blue' }} onClick={() => {}}>...</button>
                    }
                    <button style={{ color: 'white', backgroundColor: 'blue' }} onClick={() => showButton(statenumbers)}>{statenumbers}</button>
                    {statedroite ? <FontAwesomeIcon style={{ color: 'white' }} icon={faAngleDoubleRight} onClick={() => pageIteration(false)} /> : <></>}
                    <Input style={{ width: '75px' }} type="select" onChange={(event) => calculatePage(event.target.value)} >
                        <option>10</option>
                        <option>30</option>
                        <option>60</option>
                    </Input>

                </Container>
            </Navbar>
        </div>
    )
                }
