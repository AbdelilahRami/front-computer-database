import React, { useState, useEffect } from 'react';
import { Input, Button } from 'reactstrap';
import {Form, Label, } from 'reactstrap';

export default function EditCompany({currentCompany,updateCompany,setEditing}) {

    const [company, setCompany] = useState(currentCompany)
    const [errors, setErrors] = useState()
    
    useEffect(() => {setCompany(currentCompany)},[currentCompany])

        function submit(){
            if(company.name){
                updateCompany(company)
                setEditing(false)
            }else{
                setErrors("company name is empty")
            }       
        }

    return (
        <Form className="form">
        <div style={{textAlign:'center'}}>
            <h2  style={{color:'#6c757d'}}>Edit Company</h2>
            </div>
            <Label>Name</Label>
            <Input type="text" name="name" value={company.name} onChange={event => setCompany({ ...company, name: event.target.value })} />
            
            {errors && <p style={{color:'red'}}>{errors}</p>}

            <div style={{textAlign:'center'}}>      
                    <Button onClick={() => submit()} style={{ color: 'white', backgroundColor: '#17a2b8', borderColor:'#17a2b8'}}>Update Company</Button>&nbsp;&nbsp;&nbsp;
                    <Button onClick={() => setEditing(false)} className="button muted-button" style={{ color: 'white', backgroundColor: '#6c757d', borderColor:'#6c757d'}}>Cancel</Button>
            </div>

        </Form>
    )
}
