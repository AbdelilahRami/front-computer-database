import React, { useState } from 'react';
import { Navbar, NavbarBrand, Container, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import StickyFooter from 'react-sticky-footer';

export default function Footer({recupererLimite,statenumbers,recupererActualPage}) {
    
    const [actPage, setActPage] = useState(1)
    const [stategauche, setgauche] = useState(true)
    const [statedroite, setdroite] = useState(false)

    function iterateButton() {
        if (actPage === 1) {
            return (
                <>
                    <button style={{ color: 'white', backgroundColor: 'gray' }} onClick={() => showButton(actPage + 1)}>{actPage + 1}</button>
                    <button style={{ color: 'white', backgroundColor: 'gray' }} onClick={() => showButton(actPage + 2)}>{actPage + 2}</button>
                </>
            )
        } else if (actPage === statenumbers) {
            return (
                <>
                    <button style={{ color: 'white', backgroundColor: 'gray' }} onClick={() => showButton(actPage - 2)}>{actPage - 2}</button>
                    <button style={{ color: 'white', backgroundColor: 'gray' }} onClick={() => showButton(actPage - 1)}>{actPage - 1}</button>
                </>
            )
        }else if(actPage===2){
            return(
            <>
            <button style={{ color: 'white', backgroundColor: 'red' }} onClick={() => showButton(actPage)}>{actPage}</button>
            <button style={{ color: 'white', backgroundColor: 'gray' }} onClick={() => showButton(actPage + 1)}>{actPage + 1}</button>
            <button style={{ color: 'white', backgroundColor: 'gray' }} onClick={() => showButton(actPage + 2)}>{actPage + 2}</button> 
            </>
            )
        }else if(actPage===3){
           return( <>
            <button style={{ color: 'white', backgroundColor: 'gray' }} onClick={() => showButton(actPage - 1)}>{actPage - 1}</button>
            <button style={{ color: 'white', backgroundColor: 'red' }} onClick={() => showButton(actPage)}>{actPage}</button>
            <button style={{ color: 'white', backgroundColor: 'gray' }} onClick={() => showButton(actPage + 1)}>{actPage + 1}</button>
            <button style={{ color: 'white', backgroundColor: 'gray' }} onClick={() => showButton(actPage + 2)}>{actPage + 2}</button> 
            </>
            )
        }else if(actPage===statenumbers-1){
            return( <>
                <button style={{ color: 'white', backgroundColor: 'gray' }} onClick={() => showButton(actPage - 2)}>{actPage - 2}</button>
                <button style={{ color: 'white', backgroundColor: 'gray' }} onClick={() => showButton(actPage - 1)}>{actPage - 1}</button>
                <button style={{ color: 'white', backgroundColor: 'red' }} onClick={() => showButton(actPage)}>{actPage}</button>
                </>
                )
        }else if(actPage===statenumbers-2){
            return( <>
                <button style={{ color: 'white', backgroundColor: 'gray' }} onClick={() => showButton(actPage - 2)}>{actPage - 2}</button>
                <button style={{ color: 'white', backgroundColor: 'gray' }} onClick={() => showButton(actPage - 1)}>{actPage - 1}</button>
                <button style={{ color: 'white', backgroundColor: 'red' }} onClick={() => showButton(actPage)}>{actPage}</button>
                <button style={{ color: 'white', backgroundColor: 'gray' }} onClick={() => showButton(actPage + 1)}>{actPage + 1}</button>
                </>
                )
        }else{
            return( <>
                <button style={{ color: 'white', backgroundColor: 'gray' }} onClick={() => showButton(actPage - 2)}>{actPage - 2}</button>
                <button style={{ color: 'white', backgroundColor: 'gray' }} onClick={() => showButton(actPage - 1)}>{actPage - 1}</button>
                <button style={{ color: 'white', backgroundColor: 'red' }} onClick={() => showButton(actPage)}>{actPage}</button>
                <button style={{ color: 'white', backgroundColor: 'gray' }} onClick={() => showButton(actPage + 1)}>{actPage + 1}</button>
                <button style={{ color: 'white', backgroundColor: 'gray' }} onClick={() => showButton(actPage + 2)}>{actPage + 2}</button>
                </>
                )
        }
    }

    function showButton(page) {
        if (page === 1) {
            setgauche(false);
            setdroite(true);
        } else if (page === statenumbers) {
            setgauche(true);
            setdroite(false);
        } else {
            setgauche(true);
            setdroite(true);
        }
        setActPage(page)
        recupererActualPage(page)
    }

    function pageIteration(bool) {
        if (bool === true ) {
            showButton(actPage - 1)
        } else if(bool===false){
            showButton(actPage + 1)
        }
    }

    return (
        <StickyFooter
        bottomThreshold={50}
        normalStyles={{
        backgroundColor: "dark",
        padding: "2rem"
        }}
        stickyStyles={{
        backgroundColor: "dark",
        padding: "2rem"
        }}
    >
            <Navbar color="dark" dark>
                <Container>
                    <NavbarBrand>2019-2020</NavbarBrand>
                    {stategauche ? <FontAwesomeIcon style={{ color: 'white' }} icon={faAngleDoubleLeft} onClick={() => pageIteration(true)} /> : <></>}
                    <button style={{ color: 'white', backgroundColor: 'gray' }} onClick={() => showButton(1)}>1</button>
                    {
                       actPage <=4?<></>:<button style={{ color: 'white', backgroundColor: 'gray' }} onClick={() => {}}>...</button>
                    }
                    {
                        iterateButton()
                    }
                    {
                       actPage >=statenumbers-3?<></>:<button style={{ color: 'white', backgroundColor: 'gray' }} onClick={() => {}}>...</button>
                    }
                    <button style={{ color: 'white', backgroundColor: 'gray' }} onClick={() => showButton(statenumbers)}>{statenumbers}</button>
                    {statedroite ? <FontAwesomeIcon style={{ color: 'white' }} icon={faAngleDoubleRight} onClick={() => pageIteration(false)} /> : <></>}
                    <Input style={{ width: '75px' }} type="select" onChange={(event) => recupererLimite(event.target.value)} >
                        <option>10</option>
                        <option>30</option>
                        <option>60</option>
                    </Input>

                </Container>
            </Navbar>
            </StickyFooter>
    )
                }
