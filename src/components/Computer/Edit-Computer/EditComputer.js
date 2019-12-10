import React, { useState, useEffect } from 'react';
import useForm from './useform';
import { Input, FormGroup, Label, Form } from 'reactstrap';
import { getCompanies } from '../../../containers/company/Companies.hook';
import validate from './validateForm';

function EditComputer({ updateComputer, currentComputer }) {

  const [companies, setCompanies] = useState([]);
  const [computer, setComputer] = useState(currentComputer);
  const { handleSubmit, errors } = useForm(
    submit,validate, computer
  );

  function getCompanyDTO(event) {
    const companyName = event.target.value;
    const idCompany = event.target.options.selectedIndex;
    const companyDTOX = { id: idCompany, name: companyName };
    setComputer({ ...computer, companyDTO: companyDTOX })
  }

  function handleChange(event) {
    const { name, value } = event.target
    setComputer({ ...computer, [name]: value })
  }

  function submit() {
    updateComputer(computer)
  }


  useEffect(() => {
    getCompanies().then(
      response => {
        setCompanies(response.data || [])
      }
    )
  }
  , [])

console.log(computer)

  return (
    <Form className="form"
      onSubmit={handleSubmit} >
      <h2>Editing Computer Form</h2>
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
        {errors.introduced && <p className="Stylish">{errors.introduced}</p>}
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
        <Input value={computer.companyDTO?computer.companyDTO.name:""} type="select" onChange={getCompanyDTO} name="select" id="exampleSelect">
          <option key="0" value=""></option>
          {companies.map(company => <option value={company.name} key={company.id} >{company.name}</option>)}
        </Input>
      </FormGroup>
      <button>Edit Computer</button>
      <p></p>
    </Form>
  )

}
export default EditComputer;