import React , { useState } from 'react';
import { useComputers } from './Computers.hook.js'
import  Computer  from './Computer'
import { Table } from 'reactstrap';
export function Computers(){
  console.log(useComputers())
  const [computers]=useState(useComputers())
  return(
      <div>
          <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Introduced</th>
            <th>Discontinued</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {computers.map(computer =>
                <Computer computer={computer}
                          key={computer.id}
                />
          )}         
        </tbody>
        </Table>
      </div>
  )

}