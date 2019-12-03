import React, { useState } from "react";
import { Companies } from './Companies'
import './App.css';
import { AddCompany } from './AddCompany'
import { useCompanies } from "./Companies.hook";
import EditCompanyForm from "./EditCompany";

function App() {
  const initialFormState = { id: null, name: ''}
  const [companies, setCompanies] = useState(useCompanies());
  const [editing, setEditing] = useState(false)
  const [currentCompany, setCurrentCompany] = useState(initialFormState)

  function addCompany(company) {
    console.log('hamid')
    company.id = companies.length + 1;
    companies.push(company);
    setCompanies(companies);
    console.log(companies)
  };

  function editCompany(id, updatedCompany) {
    setEditing(false)
    setCompanies(companies.map(company => (company.id === id ? updatedCompany : company)))
  }
  function editRow(company)  {
    setEditing(true)
    setCurrentCompany({id:company.id, name:company.name})
  }
  console.log(currentCompany);

  return (
    <div className="container">

      <div className="flex-row">
        <div className="flex-large">
            {
              editing ?(
                      <>
                          <h2>Edit Company</h2>
                          <EditCompanyForm
                            editing ={editing}
                            setEditing={setEditing}
                            currentCompany={currentCompany}
                            updateCompany ={editCompany}
                          />
                      </>
              ):(
                <>
                <h2>Add Company</h2>
                <AddCompany addCompany={addCompany} />
                </>
              )}
        </div>
        <div className="flex-large">
          <Companies editRow={editRow}  companis={companies} />
        </div>
      </div>
    </div>
  );
}

export default App;
