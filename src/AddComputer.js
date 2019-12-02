import React from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import {useCompanies} from './Companies.hook'

export function AddComputer(){
    const companies = useCompanies();
   
    const company ={};
    function addCompany(computer){
        companies.push(computer);
    }
    return(
        <Container >
                <h2>Add Computer</h2>
            <Form className="form" sm={2}>
                <Col>
                        <FormGroup>
                            <Label>Computer name :</Label>
                            <Input 
                            type="text"
                            name="name"
                            
                            id="computerName"
                            placeholder="Enter computer name"
                            />
                            
                        </FormGroup>
                </Col>
                <Col>
                        <FormGroup>
                            <Label>Introduced date :</Label>
                            <Input 
                            type="text"
                            name="introduced"
                            id="introducedDate"
                            placeholder="Enter introduced date"
                            />
                        </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label>Discontinued date :</Label>
                        <Input 
                        type="text"
                        name="discontinued"
                        id="discontinueddDate"
                        placeholder="Enter discontinued date"
                        />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label>Company name :</Label>
                        <Input 

                        type="select"
                        name="companyName"
                        id="companyName"
                        placeholder="Enter company name"
                        >
                        {
                         companies.map(cp => {
                             return (
                                 <>   
                                 <option></option>             
                                 <option>{cp.name}</option>
                                 </>
                             )
                         })   
                    }
                        </Input>
                    </FormGroup>
                </Col> 
                <Button type="submit">Add</Button>  
            </Form> 
        </Container>


    )

}