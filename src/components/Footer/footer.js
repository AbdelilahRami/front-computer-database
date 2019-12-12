import React, { useState } from 'react';
import { Navbar, NavbarBrand, Container, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import StickyFooter from 'react-sticky-footer';

export default function Footer({ recupererLimite, maxPage, recupererActualPage, limite }) {

    const [actPage, setActPage] = useState(1)
    const [stategauche, setgauche] = useState(false)
    const [statedroite, setdroite] = useState(true)

    function iterateButton() {
        if(actPage>maxPage){setActPage(1) 
            setgauche(false)}
        if (actPage === 1) {
            if (maxPage === 3) {
                return (
                    <>
                        <button style={{ color: 'gray', backgroundColor: 'white', borderColor: 'white' }} onClick={() => showButton(actPage + 1)}>{actPage + 1}</button>
                    </>
                )
            } else if (actPage !== maxPage && maxPage !== 2) {
                return (
                    <>
                        <button style={{ color: 'gray', backgroundColor: 'white', borderColor: 'white' }} onClick={() => showButton(actPage + 1)}>{actPage + 1}</button>
                        <button style={{ color: 'gray', backgroundColor: 'white', borderColor: 'white' }} onClick={() => showButton(actPage + 2)}>{actPage + 2}</button>
                    </>
                )
            }
        } else if (actPage === maxPage) {
            if (maxPage === 3) {
                return (
                    <>
                        <button style={{ color: 'gray', backgroundColor: 'white', borderColor: 'white' }} onClick={() => showButton(actPage - 1)}>{actPage - 1}</button>
                    </>
                )
            } else if (maxPage !== 2) {
                return (
                    <>
                        <button style={{ color: 'gray', backgroundColor: 'white', borderColor: 'white' }} onClick={() => showButton(actPage - 2)}>{actPage - 2}</button>
                        <button style={{ color: 'gray', backgroundColor: 'white', borderColor: 'white' }} onClick={() => showButton(actPage - 1)}>{actPage - 1}</button>
                    </>
                )
            }

        } else if (actPage === 2) {
            if (maxPage === 3) {
                return (
                    <>
                        <button style={{ color: 'white', backgroundColor: '#dc3545', borderColor: '#dc3545' }} onClick={() => showButton(actPage)}>{actPage}</button>
                    </>
                )
            } else if (maxPage === 4) {
                return (
                    <>
                        <button style={{ color: 'white', backgroundColor: '#dc3545', borderColor: '#dc3545' }} onClick={() => showButton(actPage)}>{actPage}</button>
                        <button style={{ color: 'gray', backgroundColor: 'white', borderColor: 'white' }} onClick={() => showButton(actPage + 1)}>{actPage + 1}</button>
                    </>
                )
            } else {
                return (
                    <>
                        <button style={{ color: 'white', backgroundColor: '#dc3545', borderColor: '#dc3545' }} onClick={() => showButton(actPage)}>{actPage}</button>
                        <button style={{ color: 'gray', backgroundColor: 'white', borderColor: 'white' }} onClick={() => showButton(actPage + 1)}>{actPage + 1}</button>
                        <button style={{ color: 'gray', backgroundColor: 'white', borderColor: 'white' }} onClick={() => showButton(actPage + 2)}>{actPage + 2}</button>
                    </>
                )
            }

        } else if (actPage === 3) {
            if (maxPage === 4) {
                return (
                    <>
                        <button style={{ color: 'gray', backgroundColor: 'white', borderColor: 'white' }} onClick={() => showButton(actPage - 1)}>{actPage - 1}</button>
                        <button style={{ color: 'white', backgroundColor: '#dc3545', borderColor: '#dc3545' }} onClick={() => showButton(actPage)}>{actPage}</button>
                    </>
                )
            } else {
                return (
                    <>
                        <button style={{ color: 'gray', backgroundColor: 'white', borderColor: 'white' }} onClick={() => showButton(actPage - 1)}>{actPage - 1}</button>
                        <button style={{ color: 'white', backgroundColor: '#dc3545', borderColor: '#dc3545' }} onClick={() => showButton(actPage)}>{actPage}</button>
                        <button style={{ color: 'gray', backgroundColor: 'white', borderColor: 'white' }} onClick={() => showButton(actPage + 1)}>{actPage + 1}</button>
                        <button style={{ color: 'gray', backgroundColor: 'white', borderColor: 'white' }} onClick={() => showButton(actPage + 2)}>{actPage + 2}</button>
                    </>
                )
            }
        } else if (actPage === maxPage - 1) {
            return (
                <>
                    <button style={{ color: 'gray', backgroundColor: 'white', borderColor: 'white' }} onClick={() => showButton(actPage - 2)}>{actPage - 2}</button>
                    <button style={{ color: 'gray', backgroundColor: 'white', borderColor: 'white' }} onClick={() => showButton(actPage - 1)}>{actPage - 1}</button>
                    <button style={{ color: 'white', backgroundColor: '#dc3545', borderColor: '#dc3545' }} onClick={() => showButton(actPage)}>{actPage}</button>
                </>
            )
        } else if (actPage === maxPage - 2) {
            return (
                <>
                    <button style={{ color: 'gray', backgroundColor: 'white', borderColor: 'white' }} onClick={() => showButton(actPage - 2)}>{actPage - 2}</button>
                    <button style={{ color: 'gray', backgroundColor: 'white', borderColor: 'white' }} onClick={() => showButton(actPage - 1)}>{actPage - 1}</button>
                    <button style={{ color: 'white', backgroundColor: '#dc3545', borderColor: '#dc3545' }} onClick={() => showButton(actPage)}>{actPage}</button>
                    <button style={{ color: 'gray', backgroundColor: 'white', borderColor: 'white' }} onClick={() => showButton(actPage + 1)}>{actPage + 1}</button>
                </>
            )
        } else {
            return (<>
                <button style={{ color: 'gray', backgroundColor: 'white', borderColor: 'white' }} onClick={() => showButton(actPage - 2)}>{actPage - 2}</button>
                <button style={{ color: 'gray', backgroundColor: 'white', borderColor: 'white' }} onClick={() => showButton(actPage - 1)}>{actPage - 1}</button>
                <button style={{ color: 'white', backgroundColor: '#dc3545', borderColor: '#dc3545' }} onClick={() => showButton(actPage)}>{actPage}</button>
                <button style={{ color: 'gray', backgroundColor: 'white', borderColor: 'white' }} onClick={() => showButton(actPage + 1)}>{actPage + 1}</button>
                <button style={{ color: 'gray', backgroundColor: 'white', borderColor: 'white' }} onClick={() => showButton(actPage + 2)}>{actPage + 2}</button>
            </>
            )
        }
    }

    function sendlimite(limite) {
        setActPage(1)
        recupererLimite(limite)
        setgauche(false);
        setdroite(true);
    }

    function showButton(page) {
        if (page === 1) {
            setgauche(false);
            setdroite(true);
        } else if (page === maxPage) {
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
        if (bool === true) {
            showButton(actPage - 1)
        } else if (bool === false) {
            showButton(actPage + 1)
        }
    }

    return (
        <StickyFooter
            bottomThreshold={50}
            normalStyles={{
                backgroundColor: '17a2b8',
                padding: "2rem"
            }}
            stickyStyles={{
                backgroundColor: '17a2b8',
                padding: "2rem"
            }}
        >
            <Navbar color="info" dark style={{ width: '100%' }}>
                <Container>
                    <NavbarBrand>2019-2020</NavbarBrand>
                    {stategauche ? <FontAwesomeIcon style={{ color: 'white', width: '3%', height: '1%' }} icon={faAngleDoubleLeft} onClick={() => pageIteration(true)} /> : <></>}
                    <button style={{ color: 'white', backgroundColor: actPage === 1 ? '#dc3545' : 'gray', borderColor: actPage === 1 ? '#dc3545' : 'gray' }} onClick={() => showButton(1)}>1</button>
                    {
                        actPage <= 4 ? <></> : <button style={{ color: 'gray', backgroundColor: 'white', borderColor: 'white' }} onClick={() => { }}>...</button>
                    }
                    {
                        iterateButton()
                    }
                    {
                        actPage >= maxPage - 3 ? <></> : <button style={{ color: 'gray', backgroundColor: 'white' }} onClick={() => { }}>...</button>
                    }

                    {1 === maxPage ? <></>
                        : <button style={{ color: 'white', backgroundColor: actPage === maxPage ? '#dc3545' : 'gray', borderColor: actPage === maxPage ? '#0069d9' : 'gray' }} onClick={() => showButton(maxPage)}>{maxPage}</button>
                    }
                    {statedroite && 1 !== maxPage ? <FontAwesomeIcon style={{ color: 'white', width: '3%', height: '1%' }} icon={faAngleDoubleRight} onClick={() => pageIteration(false)} /> : <></>}

                    <Input style={{ width: '75px' }} value={limite} type="select" onChange={(event) => sendlimite(event.target.value)} >
                        <option>10</option>
                        <option>30</option>
                        <option>60</option>
                    </Input>

                </Container>
            </Navbar>
        </StickyFooter>
    )
}
