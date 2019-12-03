import React , { useState } from 'react';
import { useComputers,deleteComputers,searchName, countComputers } from './Computers.hook.js'
import  Computer  from './Computer'
import { Table } from 'reactstrap';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input , Button , Label} from 'reactstrap';

export function Computers(){

  const [statechampSearch,setchampSearch]=useState()
  console.log(useComputers())

  const [computers]=useState(useComputers())
  const count=useState(countComputers())

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

  function showName(){
    searchName(statechampSearch);
  }
  return(
    <div>
        <input style={{width:"300px",align:"center"}} type="text" placeholder="Veuillez saisir un nom de computer " onChange={event =>setchampSearch(event.target.value)} />
        <Button onClick={() => showName()}>  Search </Button>
        <br/>
         <Label> Nombre d'ordinateurs : {count} </Label>
        <br/>
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