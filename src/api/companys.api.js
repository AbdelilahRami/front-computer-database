import Axios from 'axios'
export const adresse = "http://localhost:8080/computer-database-app/companys"

export async function getCompanys(){
    await Axios.get(adresse)
    .then(response=>{return response})
    .catch(error=> console.log(error))
}

export async function addCompany(company){
    await Axios.post(adresse,company)
    .then(response => {return response})
    .catch(error=>console.error(error))
}

export async function deleteCompany(company){
    await Axios.delete(adresse,company)
    .then(response => {return response})
    .catch(error=>console.error(error))
}

export async function updateCompany(company){
    await Axios.put(adresse,company)
    .then(response => {return response})
    .catch(error=>console.error(error))
}