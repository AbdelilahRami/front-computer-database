import React,{useState} from 'react';

export default function Computer({computer,checkFun,edit}){
  const [stateComputer,setStateComputer] = useState(computer)

  
const {id,name,introduced,discontinued,companyDTO}=computer
    return(
          <tr>
            <th scope="row">{id} <input type="checkbox" name="check" onChange={()=>checkFun(id)}/></th>
            <td>{name}</td>
            <td>{introduced}</td>
            <td>{discontinued}</td>
            <td>{companyDTO!=null?companyDTO.name:null}</td>
            <td><button className="button muted-button" onClick={()=>edit(stateComputer)} >Edit</button></td>
          </tr>
    )
}





