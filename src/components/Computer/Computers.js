import { Col, Row} from 'reactstrap'
import AddComputer from './Add-computer/AddComputer';
import { Input, Button, Label } from 'reactstrap';
import EditComputer from './Edit-Computer/EditComputer'
import React , { useState, useEffect } from 'react';
import { getComputer,deleteComputers} from '../../containers/computer/Computers.hook'
import  Computer  from './Computer'
import { Table } from 'reactstrap';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../Footer/footer';

export function Computers({editRow}) {

  const [statechampSearch, setchampSearch] = useState();
  //state for adding mode and editing mode
  const [addingMode, setAdding] = useState(false);
  const [EditingMode, setEditingMode] = useState(false);
  //initial inputs form : we use it in editing form
  const initialEditingForm={id:null,name:'',introduced:'',discontinued:'',companyDTO:{id:null,name:''}};
  //initial state for computer
  const[currentComputer,setCurrentComputer]=useState(initialEditingForm);
  //const [computers,setComputers] = useState(useComputers())
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
    }
    ),[])
  function arrayRemove(arr, value) {
    return arr.filter(function(ele){
        return ele !== value;
    });
 }
  
  function checkFun(id) {
    if (!ids.includes(id)) {
      ids.push(id);
    } else {
      ids = arrayRemove(ids, id);
    }
  }

  function deleteFunction(){
    deleteComputers(ids)
    ids=[]
    getComputer(page).then(response => {
      setComputers(response.data ||[])
    })
  }
  
  function addComputer(computer){
    setAdding(false);
    computer.id=computers.length+1;
    computers.push(computer)
    console.log(computers);
  }

  function editRow(computer){
    setAdding(false);
    setEditingMode(true);
    setCurrentComputer({id:computer.id,
                        name:computer.name,
                        introduced:computer.introduced,
                        discontinued:computer.discontinued
                        })
  }

  function editComputer(id, updatedComputer) {
    console.log('im inediting')
    setComputers(computers.map(computer => (computer.id === id ? updatedComputer : computer)))
    setEditingMode(false)
  }

  function showName(){
    getComputer(page).then(
      response => {
        setComputers(response.data ||[])
      }
    )
  }

  return (
    <div>
    {
      !addingMode && !EditingMode ?
      <>
      <Row>
      <Col md={4}>
      <Button className="btn btn-secondary float-right" onClick={() => setAdding(!addingMode)}>Add Computer</Button>
      </Col>
      <Col md={2}>
      <input style={{ width: "300px", align: "center" }} type="text" placeholder="Veuillez saisir un nom de computer " onChange={event => setchampSearch(event.target.value)} />
      </Col>
      <Col md={4}>
      <Button onClick={() => showName()}>Search</Button>
      </Col>
      </Row>
      <br />
      <Label> Nombre d'ordinateurs : {computers.count} </Label>
      <br />
          
            <Table>
              <thead>
                <tr>
                  <th>#  <FontAwesomeIcon icon={faTrash} onClick={() => deleteFunction()} /> </th>
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
                    edit={editRow}
                    checkFun={checkFun}
                  />
                )}
              </tbody>
            </Table>
          <Footer recupererLimite={recupererLimite} statenumbers={statenumbers} recupererActualPage={recupererActualPage}/>
          </>
          : addingMode ?
          <>
            <AddComputer addComputer={addComputer} />
          </>
          :
          <>
            <EditComputer updateComputer={editComputer}  currentComputer={currentComputer}/>
          </>
      }
  
    </div>
  )
    }