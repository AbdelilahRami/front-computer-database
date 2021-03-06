import React, { useState, useEffect } from 'react';
import useForm from './useform';
import { Input, FormGroup, Label, Form } from 'reactstrap';
import { getCompanies } from '../../../containers/company/Companies.hook';
import validate from './validateForm';

function EditComputer({ updateComputer, currentComputer,setEditing }) {

  const [companies, setCompanies] = useState([]);
  const [computer, setComputer] = useState(currentComputer);
  const { handleSubmit, errors } = useForm(
    submit,validate, computer
  );

  function getCompanyDTO(event) {
    var word = event.target.value.split('~@~')
    const companyDTOX = { id: parseInt(word[0]), name: word[1] };
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


  return (
    <Form className="form"
      onSubmit={handleSubmit} >
      <div style={{textAlign:'center'}}>
          <h2 style={{color:'#6c757d'}}>Editing Computer Form</h2>
          </div>
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
        {errors.discontinued && <p className="Stylish">{errors.discontinued}</p>}
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Company</Label>
        <Input value={computer.companyDTO?`${computer.companyDTO.id}~@~${computer.companyDTO.name}`:""} type="select" onChange={getCompanyDTO} name="select" id="exampleSelect">
          <option key="0" value=""></option>
          {companies.map(company => <option value={company.id + "~@~"+company.name} key={company.id} >{company.name}</option>)}
        </Input>
      </FormGroup>
      <div style={{textAlign:'center'}}>
          <button style={{ color: 'white', backgroundColor: '#17a2b8', borderColor:'#17a2b8'}}>Edit Computer</button>&nbsp;&nbsp;&nbsp;
    <button onClick={() => setEditing(false)} className="button muted-button">Cancel</button>
          </div>

      <p></p>
    </Form>
  )

}
export default EditComputer;