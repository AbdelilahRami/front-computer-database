import React, { useState, useEffect } from 'react';
import  Table  from 'react-bootstrap/Table';
import { Company } from './Company'
import { getCompanies, createCompany, updateCompany,deleteCompani } from '../../containers/company/Companies.hook';
import EditCompany from './Edit-company/EditCompany';
import { Col, Row } from 'reactstrap'
import AddCompany from './Add-company/AddCompany';

export function Companies() {

  const initialFormState = { id: null, name: '' }
  const [companies, setCompanies] = useState([]);
  const [currentCompany, setCurrentCompany] = useState(initialFormState)
  const [editing, setEditing] = useState(false);
  const [adding, setAdding] = useState(false);

  useEffect(() =>{
    getCompanies().then(response => {
      setCompanies(response.data)
    })}, [])

  function addCompany(company) {
    setAdding(false);
    createCompany(company.name).then(()=>{
      getCompanies().then(response => {
        setCompanies(response.data)
      })
    })
  }
  function deleteCompany(company){
    deleteCompani(company).then(()=>{
      getCompanies().then(response=>{
        setCompanies(response.data)
      }) 
    })

  }

  function editCompany(id, updatedCompany) {
    setEditing(false)
    updateCompany(updatedCompany).then(response=>{
      getCompanies().then(response => {
        setCompanies(response.data)
      })
    })
  }
  function editRow(company)  {
    setEditing(true)
    setCurrentCompany({id:company.id, name:company.name})
  }

  return (
    <div>
      {!editing && !adding ? <>
        <Row>
            <Col sm={3}>
            </Col>
            <Col sm={6}>
                <button style={{ color: 'white', backgroundColor: '#17a2b8', borderColor:'#17a2b8'}} onClick={() => setAdding(!adding)}>Add Company</button>
            </Col>
        </Row>
        <Table striped bordered hover style={{marginLeft:'auto',marginRight:'auto',width:'50%'}}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Comapny</th>
            </tr>
          </thead>
          <tbody>
            {companies.map(company => {
              return (
                <Company
                  company={company}
                  key={company.id}
                  edit={editRow}
                  deleteCompany={deleteCompany}
                />
              )
            })}
          </tbody>
        </Table>

      </>
        : adding ?
          <>
            <AddCompany setAdding={setAdding} addCompany={addCompany} />
          </>
          :
          <>
            <EditCompany
              editing={editing}
              setEditing={setEditing}
              currentCompany={currentCompany}
              updateCompany={editCompany}
            />
          </>
      }
    </div>
  )
}