import Axios from 'axios'
export const adresse = "http://localhost:8080/computer-database-app/computers"

export async function getComputers(page){
    const {limite,actPage,search} = page
    return await Axios.get(`${adresse}?search=${search}&limite=${limite}&actPage=${actPage}`)
    .then(response=>{return response})
    .catch(error => console.log(error));
}

export async function getOneComputer(id){
    return await Axios.get(`${adresse}/${id}`)
    .then(response=>{return response})
    .catch(error=>console.log(error));
}

export async function deleteComputer(tableau){
    return await Axios.delete(adresse,{data:tableau})
    .then(response=>{return response})
    .catch(error=>console.log(error))
}

export async function createComputer(computer){
    return await Axios.post(adresse,computer)
    .then(response=>{return response})
    .catch(error=>console.log(error))
}