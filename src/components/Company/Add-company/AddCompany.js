import React, {useState} from 'react';
import { Input, Button } from 'reactstrap';
import {Form, Label, FormGroup} from 'reactstrap';

export default function AddCompany({addCompany,setAdding}){

    const [errors, setErrors] = useState()
    const [company, setCompany] = useState({id:0, name:''})

    function submit(){
        if(company.name){
            addCompany(company)
            setAdding(false)
        }else{
            setErrors("company name is empty")
        }       
    }


    return(

        <Form className="form">

            <div style={{textAlign:'center'}}>
                      <h2 style={{color:'#6c757d'}}>Adding company form</h2>
            </div>
            <FormGroup>
                <Label for="exampleDatetime">Name</Label>
                 <Input type="text" name="name" value={company.name} onChange={event => setCompany({ ...company, name: event.target.value })} />
            </FormGroup>
            {errors && <p style={{color:'red'}}>{errors}</p>}
 
            <div style={{textAlign:'center'}}>
                <Button onClick={() => submit()} style={{ color: 'white', backgroundColor: '#17a2b8', borderColor:'#17a2b8'}}>Add Company</Button>&nbsp;&nbsp;&nbsp;
                <Button onClick={() => setAdding(false)} style={{ color: 'white', backgroundColor: '#6c757d', borderColor:'#6c757d'}} >Cancel</Button>
            </div>
        </Form>
    );
}