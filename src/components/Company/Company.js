import React, {useState} from 'react';

export function Company({company,edit,deleteCompany}) {
    const {id,name} = company
    const [stateCompani,setStateCompani] = useState(company)

    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>
              <button style={{ color: 'dark', backgroundColor: '#ffc107', borderColor: '#ffc107' }} className="button muted-button" onClick={()=>
                  edit(stateCompani)} >Edit</button>&nbsp;&nbsp;&nbsp;

                <button className="button muted-button" onClick={()=>
                    deleteCompany(stateCompani)} >Delete</button>
            </td>
            </tr>    
        </>
    )

}