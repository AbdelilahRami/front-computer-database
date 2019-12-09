import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import { Company } from './Company'
import { getCompanies, createCompany, updateCompany } from '../../containers/company/Companies.hook';
import EditCompany from './Edit-company/EditCompany';
import AddCompany from './Add-company/AddCompany';

export function Companies() {

  const initialFormState = { id: null, name: '' }
  const [companies, setCompanies] = useState([]);
  const [currentCompany, setCurrentCompany] = useState(initialFormState)
  const [editing, setEditing] = useState(false);
  const [adding, setAdding] = useState(false);

  useEffect(() =>
    getCompanies().then(response => {
      setCompanies(response.data)
    }), [])

  function addCompany(company) {
    setAdding(false);
    createCompany(company.name).then(()=>{
      getCompanies().then(response => {
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

  return (
    <div>
      {!editing && !adding ? <>
        <button onClick={() => setAdding(!adding)}>Add Company</button>
        <Table responsive striped bordered hover width="50%" size="sm">
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
                />
              )
            })}
          </tbody>
        </Table>

      </>
        : adding ?
          <>
            <AddCompany addCompany={addCompany} />
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