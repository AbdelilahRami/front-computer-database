import React,{useState} from 'react';
import { Input, Button } from 'reactstrap';
import { Form, Label, } from 'reactstrap';

export function AddCompany({addCompany}){

    const initialFormState ={id:null, name:''}
    const [company,setCompany] = useState(initialFormState);
    
    return(
 
        <Form className="form"
                onSubmit={event => {
                    event.preventDefault()
                    if (!company.name) return
                    addCompany(company)
                }}
        >
            <Label>Name</Label>
            <Input type="text" name="name" value={company.name} onChange={event=>setCompany({...company,name:event.target.value})} />       
            <Button>Add Company</Button>
        </Form>
    );
}
export default AddCompany;