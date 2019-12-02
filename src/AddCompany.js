import React,{useState} from 'react';
export function AddCompany(){
    const initialFormState ={id:null, name:''}
    const [company,setCompany] = useState(initialFormState);


    return(
        <form>
            <label>Id</label>
            <input type="text" name="id" value={company.id} onChange ={handelInputChange}/>
            <label>Name</label>
            <input type="text" name="name" value={company.name} onChange={handelInputChange} />       
            <button>Add Company</button>
        </form>
    );



}