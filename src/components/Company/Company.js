import React, {useState} from 'react';

export function Company({company,edit}) {
    const {id,name} = company
    const [stateCompani,setStateCompani] = useState(company)

    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>
               <button className="button muted-button" onClick={()=>
                  edit(stateCompani)} >Edit</button>&nbsp;&nbsp;
                <button className="button muted-button" onClick={()=>
                    edit(stateCompani)} >Delete</button>
            </td>
            </tr>    
        </>
    )

}