import React from 'react';

export default function Computer({ computer, checkFun, edit }) {

  const { id, name, introduced, discontinued, companyDTO } = computer

  return (
    <tr>
      <th scope="row">{id} <input type="checkbox" name="check" onChange={() => checkFun(id)} /></th>
      <td>{name}</td>
      <td>{introduced}</td>
      <td>{discontinued}</td>
      <td>{companyDTO != null ? companyDTO.name : null}</td>
      <td><button style={{ color: 'dark', backgroundColor: '#ffc107', borderColor: '#ffc107' }} className="button muted-button" onClick={() => edit(computer)} >Edit</button></td>
    </tr>
  )
}





