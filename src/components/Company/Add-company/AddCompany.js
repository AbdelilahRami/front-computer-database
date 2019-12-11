import React,{useState} from 'react';
import { Input, Button } from 'reactstrap';
import {Form, Label, FormGroup} from 'reactstrap';
import useForm from './useForm';
import validate from './validate-company'

export default function AddCompany({addCompany,setAdding}){

    const { handleChange, handleSubmit,company, errors} = useForm(submit, validate);

    let error="";

    function submit(){
      addCompany(company)
    }

    return(

        <Form className="form"
                onSubmit={handleSubmit}>
            <div style={{textAlign:'center'}}>
                      <h2 style={{color:'#6c757d'}}>Adding company form</h2>
            </div>
            <FormGroup>
                <Label for="exampleDatetime">Name</Label>
                 <Input type="text" name="name" value={company.name} onChange={handleChange} />
            </FormGroup>
            {errors.name && <p>{errors.name}</p>}
            <div>{error ? "error" : ""}</div>
            <div style={{textAlign:'center'}}>
                <Button style={{ color: 'white', backgroundColor: '#17a2b8', borderColor:'#17a2b8'}}>Add Company</Button>&nbsp;&nbsp;&nbsp;
                <Button onClick={() => setAdding(false)} style={{ color: 'white', backgroundColor: '#6c757d', borderColor:'#6c757d'}} >Cancel</Button>
            </div>
        </Form>
    );
}