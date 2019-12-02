import React,{useState} from 'react';
import { useCompanies } from './Companies.hook';
import {Table} from 'reactstrap';
import {Company} from './Company'

export function Companies() {

    const [companies, setCompanies] = useState(useCompanies());
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
                
                        {companies.map(company => {
                          return(
                              <Company company = {company}                                 
                              >
                              </Company>
                          )  
                        })}
                    
                </tbody>
             </Table>
        </div>
        )
}