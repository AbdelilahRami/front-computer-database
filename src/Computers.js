import React , { useState } from 'react';
import { useComputers } from './Computers.hook.js'
import  Computer  from './Computer'
import { Table } from 'reactstrap';

export function Computers(){

  console.log(useComputers())

  const [computers]=useState(useComputers())
  const ids=[]  

  function checkFun(id){
    if(!ids.includes(id)){
        ids.push(id);
    }else{
       ids.splice(id);
    }
    console.log(ids);
  }
  return(
      <div>
          <Table>
        <thead>
          <tr>
            <th># </th>
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
                          checkFun={checkFun}
                />
          )}         
        </tbody>
        </Table>
      </div>
  )
}