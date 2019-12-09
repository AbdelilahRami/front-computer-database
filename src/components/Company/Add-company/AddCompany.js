import React,{useState} from 'react';
import { Input, Button } from 'reactstrap';
import { Container, Col, Row, Form, FormGroup, Label, } from 'reactstrap';
import { send } from 'q';
export function AddCompany({addCompany,setAdding}){

    const initialFormState ={id:null, name:''}
    const [company,setCompany] = useState(initialFormState);
    let error="";
    
    return(

        <Form className="form"
                onSubmit={event => {
                    event.preventDefault()
                    if (!company.name){
                        error=error+"your company is empty";
                    }else{
                        addCompany(company)
                    }  
                }}
        ><h2>Adding company form</h2>
            <Label>Name</Label>
            <Input type="text" name="name" value={company.name} onChange={event=>setCompany({...company,name:event.target.value})} />
            <div>{error ? "error" : ""}</div>
            <Button disabled={error}>Add Company</Button>&nbsp;&nbsp;&nbsp;
            <Button onClick={() => setAdding(false)} className="button muted-button">Cancel</Button>
        </Form>
    );
}

export default AddCompany;