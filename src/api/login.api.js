import Axios from 'axios'
export const adresse = "http://localhost:8080/computer-database-app/login"

export async function getLogin(user){
    return await Axios.post(adresse,user)
    .then(response => {return response})
    .catch(error => console.log('ERROR :' + error));
}