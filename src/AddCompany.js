import React,{useState} from 'react';
export function AddCompany({addCompany}){

    const initialFormState ={id:null, name:''}
    const [company,setCompany] = useState(initialFormState);
    return(
        <form
                onSubmit={event => {
                    event.preventDefault()
                    if (!company.name) return
                    addCompany(company)
                }}
        >
            <label>Name</label>
            <input type="text" name="name" value={company.name} onChange={event=>setCompany({...company,name:event.target.value})} />       
            <button>Add Company</button>
        </form>
    );
}

export default AddCompany;