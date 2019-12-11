import React, { useState, useEffect } from 'react';
import { Input, Button } from 'reactstrap';
import {Form, Label, } from 'reactstrap';

export default function EditCompany(props) {

    const [company, setCompany] = useState(props.currentCompany)
    
    useEffect(() => {setCompany(props.currentCompany)},
        [props])

        function submit(){
            console.log(company)
            console.log('editing company')
        
          }
    return (
        <Form className="form"
            onSubmit={event => {
                event.preventDefault()
                if (!company.name) return
                props.updateCompany(company.id, company)
            }}
        >
        <div style={{textAlign:'center'}}>
            <h2  style={{color:'#6c757d'}}>Edit Company</h2>
            </div>
            <Label>Name</Label>
            <Input type="text" name="name" value={company.name} onChange={event => setCompany({ ...company, name: event.target.value })} />
            <div style={{textAlign:'center'}}>      
                    <Button style={{ color: 'white', backgroundColor: '#17a2b8', borderColor:'#17a2b8'}}>Update Company</Button>&nbsp;&nbsp;&nbsp;
                    <Button onClick={() => props.setEditing(false)} className="button muted-button" style={{ color: 'white', backgroundColor: '#6c757d', borderColor:'#6c757d'}}>Cancel</Button>
            </div>

        </Form>
    )
}
