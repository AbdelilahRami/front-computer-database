import React, { useState } from 'react';
import { Col, Row} from 'reactstrap'
import AddComputer from './Add-computer/AddComputer'
import { useComputers, deleteComputers, searchName, countComputers } from '../../containers/computer/Computers.hook'
import Computer from './Computer'
import { Table } from 'reactstrap';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input, Button, Label } from 'reactstrap';
import EditComputer from './Edit-Computer/EditComputer'

export function Computers({editRow}) {

  const [statechampSearch, setchampSearch] = useState();
  //state for adding mode and editing mode
  const [addingMode, setAdding] = useState(false);
  const [EditingMode, setEditingMode] = useState(false);
  //initial inputs form : we use it in editing form
  const initialEditingForm={id:null,name:'',introduced:'',discontinued:'',companyDTO:{id:null,name:''}};
  //initial state for computer
  const[currentComputer,setCurrentComputer]=useState(initialEditingForm);
  const [computers,setComputers] = useState(useComputers())
  const count = useState(countComputers())

  let ids = []

  function arrayRemove(arr, value) {

    return arr.filter(function (ele) {
      return ele !== value;
    });

  }

  function checkFun(id) {
    if (!ids.includes(id)) {
      ids.push(id);
    } else {
      ids = arrayRemove(ids, id);
    }
    console.log(ids);
  }

  function deleteFunction() {
    deleteComputers(ids);
  }

  function showName() {
    searchName(statechampSearch);
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
      <Label> Nombre d'ordinateurs : {count} </Label>
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
                {computers.map(computer =>
                  <Computer computer={computer}
                    key={computer.id}
                    edit={editRow}
                    checkFun={checkFun}
                  />
                )}
              </tbody>
            </Table>
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