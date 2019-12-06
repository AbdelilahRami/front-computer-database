import Axios from 'axios'
export const adresse = "http://localhost:8080/computer-database-app/companys"

export async function getCompanys(){
    return await Axios.get(adresse)
    .then(response=>{console.log(response)
        return response})
    .catch(error=> console.log(error));
}

export async function addCompany(company){
    return await Axios.post(adresse,company)
    .then(response => {return response})
    .catch(error=>console.error(error))
}

export async function deleteCompany(company){
    return await Axios.delete(adresse,company)
    .then(response => {return response})
    .catch(error=>console.error(error))
}

export async function updateCompani(company){
    return await Axios.put(adresse,company)
    .then(response => {return response})
    .catch(error=>console.error(error))
}