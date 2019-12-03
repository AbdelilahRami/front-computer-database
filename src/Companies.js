import React,{useState} from 'react';
import {Table} from 'reactstrap';
import {Company} from './Company'
import { useCompanies } from './Companies.hook';

export function Companies({companis,editRow}) {
    const initialFormState = { id: null, name: ''}
    const [currentcompani, setCurrentCompani] = useState(initialFormState)
    const [editing, setEditing] = useState(true)
    console.log(companis)
    return (
        <div>
            <Table  responsive striped bordered hover width="50%" size="sm">
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Comapny</th>
                    </tr>
                </thead>
                <tbody>
                        {companis.map(company => {
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
        </div>
        )
}