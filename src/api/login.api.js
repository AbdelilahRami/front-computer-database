import Axios from 'axios'
export const adresse = "http://localhost:8080/computer-database-app/login"

export async function getLogin(user){
    console.log(user)
    await Axios.post(adresse,user)
    .then(response => {return response})
    .then(error => console.log(error));
}