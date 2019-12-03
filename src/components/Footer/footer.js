import React  from 'react';
import { Navbar, NavbarBrand , Container ,Input} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft,faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

export function Footer() {
    
const numbers=[1,2,3,4,5,6,7,8,9,10]
    return(
<div className="fixed-bottom">  
            <Navbar color="dark" dark>
                <Container>
                 <NavbarBrand>2019-2020</NavbarBrand>
                   <FontAwesomeIcon style ={{color:'white'}} icon={faAngleDoubleLeft} onClick={() => {}}/>
                    {
                        numbers.map(number =>
                            
                         <button style={{color:'white',backgroundColor:'blue'}}>{number}</button>
                        )
                    }
                    <FontAwesomeIcon style ={{color:'white'}} icon={faAngleDoubleRight} onClick={() => {}}/>
               
               
                    <Input style ={{width:'75px'}} type="select">
                        <option>{numbers[5]}</option>
                        <option>{numbers[8]}</option>
                        <option>{numbers[9]}</option>
                    </Input>
                
                </Container>
            </Navbar>
        </div>
    )
}