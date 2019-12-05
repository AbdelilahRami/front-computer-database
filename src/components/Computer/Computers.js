import React , { useState, useEffect } from 'react';
import { getComputer,deleteComputers} from '../../containers/computer/Computers.hook'
import  Computer  from './Computer'
import { Table } from 'reactstrap';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'reactstrap';

export function Computers(){

  const [page,setPage]=useState({search:'',limite:10,actPage:5})
  const [computers,setComputers]=useState([])
  const [nbComputer,setNbComputer]=useState(0)
  let ids=[]  

  useEffect(
    () => getComputer(page).then(
      response => {
        setComputers(response.data.listComputer ||[])
        setNbComputer(response.data.nbComputer)
      }
    ) ,[])

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
  }

  function deleteFunction () {
    deleteComputers(ids)
    ids=[]
    getComputer(page).then(response => {
      setComputers(response.data.listComputer ||[])
      setNbComputer(response.data.nbComputer)
    })
  }

  function showName(){
    getComputer(page).then(
      response => {
        setComputers(response.data.listComputer ||[])
        setNbComputer(response.data.nbComputer)
      }
    )
  }

  return(
    <div>
        <input style={{width:"300px",align:"center"}} type="text" placeholder="Veuillez saisir un nom de computer " onChange={event =>setPage({...page,search:event.target.value})} />
        <Button onClick={() => showName()}>  Search </Button>
        <br/>
         Nombre d'ordinateurs : {nbComputer} 
        <br/>
          <Table>
            <thead>
              <tr>
                <th>#  <FontAwesomeIcon icon={faTrash} onClick={deleteFunction()}/> </th>
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