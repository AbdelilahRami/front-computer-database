import React , { useState, useEffect } from 'react';
import { getComputer,deleteComputers} from '../../containers/computer/Computers.hook'
import  Computer  from './Computer'
import { Table } from 'reactstrap';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'reactstrap';
import Footer from '../Footer/footer';

export function Computers(){

  const [page,setPage]=useState({search:'',limite:10,actPage:1})
  const [computers,setComputers]=useState({listComputer:[],nbComputer:0})
  const [statenumbers,setnumbers]=useState()
  let ids=[]
  
  function recupererActualPage(actual){
    setPage({ ...page,actPage:actual })
    console.log(actual)
  }

  function recupererLimite(mylimit){
    setPage({ ...page, limite: mylimit,actPage:1 })
    var resulte = Math.round(computers.nbComputer / mylimit)
    setnumbers(resulte)
  }

  useEffect( () => 
  getComputer(page).then(
    response => {
      setComputers(response.data ||[])
      recupererLimite(10)
    }
    ),[])

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

  function deleteFunction(){
    deleteComputers(ids)
    ids=[]
    getComputer(page).then(response => {
      setComputers(response.data ||[])
    })
  }
  

  function showName(){
    getComputer(page).then(
      response => {
        setComputers(response.data ||[])
      }
    )
  }

  return(
    <div>
        <input style={{width:"300px",align:"center"}} type="text" placeholder="Veuillez saisir un nom de computer " onChange={event =>setPage({...page,search:event.target.value})} />
        <Button onClick={() => showName()}>  Search </Button>
        <br/>
         Nombre d'ordinateurs : {computers.nbComputer} 
         <Button>Add Computer</Button>
        <br/>
          <Table>
            <thead>
              <tr>
                <th>#  <FontAwesomeIcon icon={faTrash} onClick={deleteFunction}/> </th>
                <th>Name</th>
                <th>Introduced</th>
                <th>Discontinued</th>
                <th>Company</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {computers.listComputer.map(computer =>
                    <Computer computer={computer}
                              key={computer.id}
                              checkFun={checkFun}
                    />
              )}         
            </tbody>
        </Table>

        <Footer recupererLimite={recupererLimite} statenumbers={statenumbers} recupererActualPage={recupererActualPage}/>
    </div>
  )
}