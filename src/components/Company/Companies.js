import React,{useState} from 'react';
import {Table} from 'reactstrap';
import {Company} from './Company'
import { useCompannies, useCompanies } from '../../containers/company/Companies.hook';
import EditCompanyForm from './EditCompany';

export function Companies({companis,editRow}) {
    const initialFormState = { id: null, name: ''}
    const [companies,setCompanies] =useState(useCompanies());
    const [currentCompany, setCurrentCompany] = useState(initialFormState)
    const [editing, setEditing] = useState(false);

    function editRow(company)  {
        console.log('toto');
        setEditing(true)
        setCurrentCompany({id:company.id, name:company.name})
      }
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
    return (
        <div>
        {!editing ?<>
            <Table  responsive striped bordered hover width="50%" size="sm">
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Comapny</th>
                    </tr>
                </thead>
                <tbody>
                        {companies.map(company => {
                          return(
                              <Company 
                              company = {company}
                              key={company.id}  
                              edit={editRow}                           
                              >console.log(company)
                              </Company>
                          )  
                        })}
                </tbody>
             </Table>
             
             </>
             : 
             <>
                    <h2>Edit Company</h2>
                    <EditCompanyForm
                    editing ={editing}
                    setEditing={setEditing}
                    currentCompany={currentCompany}
                    updateCompany ={editCompany}
                    />
            </>
                    }
        </div>
        )
}