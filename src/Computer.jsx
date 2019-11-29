import React from 'react';

export default function Computer({computer,checkFun}){
  
const {id,name,introduced,discontinued,companyDTO}=computer
    return(
          <tr>
            <th scope="row">{id} <input type="checkbox" name="check" onChange={()=>checkFun(id)}/></th>
            <td>{name}</td>
            <td>{introduced}</td>
            <td>{discontinued}</td>
            <td>{companyDTO!=null?companyDTO.name:null}</td>
          </tr>
    )
}





