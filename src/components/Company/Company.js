import React, { useState } from 'react';

export function Company({ company, edit }) {
    const { id, name } = company
    const [stateCompani, setStateCompani] = useState(company)

    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>
                    <div>
                        <button style={{ color: 'dark', backgroundColor: '#ffc107', borderColor: '#ffc107' }} className="button muted-button" onClick={() =>
                            edit(stateCompani)} >Edit</button>
                        <span style={{ marginLeft: '10px' }}></span>
                        <button className="button muted-button" onClick={() =>
                            edit(stateCompani)} style={{ color: 'dark', backgroundColor: '#20c997', borderColor: '#20c997' }} >Delete</button>
                    </div>
                </td>
            </tr>
        </>
    )

}