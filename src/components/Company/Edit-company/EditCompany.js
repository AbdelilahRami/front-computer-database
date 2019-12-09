import React, { useState, useEffect } from 'react';
import { Input, Button } from 'reactstrap';
import {Form, Label, } from 'reactstrap';

export default function EditCompany(props) {

    const [company, setCompany] = useState(props.currentCompany)
    
    useEffect(() => {setCompany(props.currentCompany)},
        [props])

    return (
        <Form className="form"
            onSubmit={event => {
                event.preventDefault()
                if (!company.name) return
                props.updateCompany(company.id, company)
            }}
        >
        <h2>Edit Company</h2>
            <Label>Name</Label>
            <Input type="text" name="name" value={company.name} onChange={event => setCompany({ ...company, name: event.target.value })} />
            <Button>Update Company</Button>

        </Form>
    )
}
