import React , { useState } from 'react';
import { Navbar, NavbarBrand , Container ,Input} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft,faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { limitPage , actualPage } from '../../containers/computer/Computers.hook';

export function Footer() {
const [statelist,setlist]=useState() 
const [stategauche,setgauche]=useState() 
const [statedroite,setdroite]=useState() 
const numbers=[1,2,3,4,5,6,7,8,9,10]


function showButton(click){
   if(click==1){
        setgauche(false);
        setdroite(true);
   }else if(click==10){
        setgauche(true);
        setdroite(false);
   }else{
        setgauche(true);
        setdroite(true);
   }
   actualPage(click);
}

function showLimit(){
    limitPage(statelist);
}
console.log(showLimit());



    return(
<div className="fixed-bottom">  
            <Navbar color="dark" dark>
                <Container>
                 <NavbarBrand>2019-2020</NavbarBrand>
                  {stategauche? <FontAwesomeIcon style ={{color:'white'}} icon={faAngleDoubleLeft} onClick={() => {}}/>:<></>}
                    {
                        numbers.map(number =>
                            
                         <button style={{color:'white',backgroundColor:'blue'}} onClick={() => showButton(number)}> {number}</button>
                        )
                    }
                   {statedroite? <FontAwesomeIcon style ={{color:'white'}} icon={faAngleDoubleRight} onClick={() => {}}/>:<></>}
               
               
                    <Input style ={{width:'75px'}} type="select" onChange={event =>setlist(event.target.value)} >
                        <option>{numbers[5]}</option>
                        <option>{numbers[8]}</option>
                        <option>{numbers[9]}</option>
                    </Input>
                
                </Container>
            </Navbar>
        </div>
    )
}