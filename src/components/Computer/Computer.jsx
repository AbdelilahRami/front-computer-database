import React from 'react';

export default function Computer({ computer, checkFun, edit }) {

  const { id, name, introduced, discontinued, companyDTO } = computer

  return (
    <tr>
      <th style={{textAlign:"center"}} scope="row">{id} <input type="checkbox" name="check" onChange={() => checkFun(id)} /></th>
      <td style={{textAlign:"center"}}>{name}</td>
      <td style={{textAlign:"center"}}>{introduced}</td>
      <td style={{textAlign:"center"}}>{discontinued}</td>
      <td style={{textAlign:"center"}}>{companyDTO != null ? companyDTO.name : null}</td>
      <td style={{textAlign:"center"}}><button style={{ color: 'dark', backgroundColor: '#ffc107', borderColor: '#ffc107' }} className="button muted-button" onClick={() => edit(computer)} >Edit</button></td>
    </tr>
  )
}





