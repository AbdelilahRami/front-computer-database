import Axios from 'axios'
import AuthenticationService from '../components/Login/AuthenticationService'

export const adresse = "http://localhost:8080/computer-database-app/companys"

export async function getCompanys(){
    return await Axios.get(adresse)
    .then(response=>{return response})
    .catch(error=> console.log(error));
}

export async function addCompany(company){
    AuthenticationService.setupAxiosInterceptors()
    return await Axios.post(adresse,company)
    .then(response => {return response})
    .catch(error=>console.error(error))
}

export async function deleteCompany(company){
    AuthenticationService.setupAxiosInterceptors()
    return await Axios.delete(adresse,company)
    .then(response => {return response})
    .catch(error=>console.error(error))
}

export async function updateCompani(company){
    AuthenticationService.setupAxiosInterceptors()
    return await Axios.put(adresse,company)
    .then(response => {return response})
    .catch(error=>console.error(error))
}