import React, { useState, useEffect } from 'react';
import useForm from './useform';
import validate from './validateForm';
import './Add-computer.css'
import { Input, FormGroup, Label, Form } from 'reactstrap';
import { getCompanies } from '../../../containers/company/Companies.hook';

export default function AddComputer() {

  const [companies, setCompanies] = useState([]);
  const initialsForm = { id: null, name: '', introduced: '', discontinued: '', companyDTO: { id: null, name: '' } };
  const [computer, setComputer] = useState(initialsForm);
  const { handleSubmit,getCompanyDTO, errors } = useForm(
    submit,
    validate,computer
  );

  function submit(){
    console.log(computer)
    addComputer(computer)
  }
  function handleChange(event) {
    const { name, value } = event.target
    setComputer({ ...computer, [name]: value })
    console.log(value)
  }

  function addComputer(computer) {
    console.log(computer)
  }

  useEffect(() =>{
    getCompanies().then(
      response => {
        setCompanies(response.data || [])
      }
    )
  }
  , [])

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
          <option key="0" value=""></option>
          {companies.map(company => <option value={company.name} key={company.id} >{company.name}</option>)}
        </Input>
      </FormGroup>{console.log(errors)}
      <button>Add Computer</button>
      <p></p>
    </Form>

  )
}