import React , { useState } from 'react';
import { useComputers,deleteComputers } from './Computers.hook.js'
import  Computer  from './Computer'
import { Table } from 'reactstrap';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Computers(){

  console.log(useComputers())

  const [computers]=useState(useComputers())

  let ids=[]  
  
  function arrayRemove(arr, value) {

    return arr.filter(function(ele){
        return ele !== value;
    });
 
 }

  function checkFun(id){
    if(!ids.includes(id)){
        ids.push(id);
    }else{
       ids=arrayRemove(ids,id);
    }
    console.log(ids);
  }

  function deleteFunction(){
    deleteComputers(ids);
  }
  
  return(
      <div>
          <Table>
        <thead>
          <tr>
            <th>#  <FontAwesomeIcon icon={faTrash} onClick={() => deleteFunction()}/> </th>
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