import React,{useState} from 'react';


export function Company({company}) {
    const [stateCompany, setStateCompany] = useState(company);

    return (
        <>
            <tr>
                <td>{company.id}</td>
                <td>{company.name}</td>
            </tr>    
        </>
    )

}