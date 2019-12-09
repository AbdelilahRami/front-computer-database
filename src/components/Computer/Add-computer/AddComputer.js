import React, { useState } from 'react';
import useForm from './useform';
import validate from './validateForm';
import './Add-computer.css'

import { Input, Button, FormGroup, Label, Form } from 'reactstrap';
import { getCompanies } from '../../../containers/company/Companies.hook';

function AddComputer({ addComputer }) {
  const { handleChange, handleSubmit,getCompanyDTO, computer, errors } = useForm(
    submit,
    validate
  );
  function submit(){
    console.log(computer)
    addComputer(computer)

  }
  const [companies, setCompanies] = useState(getCompanies());
 
  return (
    <Form className="form"
      onSubmit={handleSubmit}

    >
    <h2>Adding Computer Form</h2>
      <FormGroup>
        <Label for="exampleDatetime">Name</Label>
        <Input
          type="text"
          name="name"
          value={computer.name}
          onChange={handleChange}
          id="name"
          placeholder="computer Name"
        />
        {errors.name && <p className="Stylish">{errors.name}</p>}
      </FormGroup>
      <FormGroup>
        <Label for="exampleDate">Introduced Date</Label>
        <Input
          type="date"
          name="introduced"
          id="introduced"
          value={computer.introduced}
          onChange={handleChange}
          placeholder="Introduced date"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleDate">Discontinued Date</Label>
        <Input
          type="date"
          value={computer.discontinued}
          name="discontinued"
          onChange={handleChange}
          id="discontinued"
          placeholder="discontinued date"
        />
        {errors.introduced && <p className="Stylish">{errors.introduced}</p>}

      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Company</Label>
        <Input type="select" onChange={getCompanyDTO} name="select" id="exampleSelect">
          <option key="0" value="" selected></option>
          {companies.map(company => <option value={company.name} key={company.id} >{company.name}</option>)}
        </Input>
      </FormGroup>
      <button>Add Computer</button>
      <p></p>
    </Form>
  )
}
export default AddComputer;