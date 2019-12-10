import React, { useState, useEffect } from 'react';
import useForm from './useform';
import validate from './validateForm';
import './Add-computer.css'
import { Input, FormGroup, Label, Form } from 'reactstrap';
import { getCompanies } from '../../../containers/company/Companies.hook';
import { addComputer } from '../../../containers/computer/Computers.hook';
import { Redirect } from 'react-router-dom';

export default function AddComputer() {

  const [ajout,setAjout] = useState(false)
  const [companies, setCompanies] = useState([]);
  const initialsForm = { id: null, name: '', introduced: '', discontinued: '', companyDTO: { id: null, name: '' } };
  const [computer, setComputer] = useState(initialsForm);
  const { handleSubmit, errors } = useForm(
    submit,
    validate,computer
  );

  function getCompanyDTO(event) {
    const companyName = event.target.value;
    const idCompany = event.target.options.selectedIndex;
    const companyDTOX = { id: idCompany, name: companyName };
    setComputer({ ...computer, companyDTO: companyDTOX })
  }

  function submit(){
    addComputer(computer).then(()=>setAjout(true))
  }


  function handleChange(event) {
    const { name, value } = event.target
    setComputer({ ...computer, [name]: value })
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
    <>
    {ajout ? <Redirect to='/computers' />
      
    :
    <Form className="form"
      onSubmit={handleSubmit}

    >
    <div style={{textAlign:'center'}}>
        <h2 style={{color:'#6c757d'}}>Adding Computer Form</h2>
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
        <Input type="select" onChange={getCompanyDTO} name="select" id="exampleSelect">
          <option key="0" value=""></option>
          {companies.map(company => <option value={company.name} key={company.id} >{company.name}</option>)}
        </Input>
      </FormGroup>
      <div style={{textAlign:'center'}}>
            <button style={{ color: 'white', backgroundColor: '#17a2b8', borderColor:'#17a2b8'}}>Add Computer</button>
      </div>
      <p></p>
    </Form>}
    </>
  )
}