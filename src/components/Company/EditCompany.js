import React, { useState, useEffect } from 'react';
function EditCompanyForm(props) {
    const [company,setCompany] = useState(props.currentCompany)
            useEffect(
                () => {
                    setCompany(props.currentCompany)
                },
                [props]
            )
          return(
                <form 
                    onSubmit={event => {
                        event.preventDefault()
                        if (!company.name) return
                        props.updateCompany(company.id,company)
                    }}
                >
                    <label>Name</label>
                    <input type="text" name="name" value={company.name} onChange={event=>setCompany({...company,name:event.target.value})} />
                    <button>Update Company</button>

                </form>
          )
}
export default EditCompanyForm;