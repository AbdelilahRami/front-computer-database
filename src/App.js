
import React, { useState } from "react";
import { Companies } from './components/Company/Companies'
import './App.css';
import Header from './components/Header/Header'
import { AddCompany } from './components/Company/AddCompany'
import { useCompanies } from "./containers/company/Companies.hook";
import EditCompanyForm from "./components/Company/EditCompany";

function App() {
  const initialFormState = { id: null, name: ''}
  const [companies, setCompanies] = useState(useCompanies());
  const [editing, setEditing] = useState(false)
  const [currentCompany, setCurrentCompany] = useState(initialFormState)

  function addCompany(company) {
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
    <div className="App">
       <Header/>
    </div>
  );
}
export default App;
