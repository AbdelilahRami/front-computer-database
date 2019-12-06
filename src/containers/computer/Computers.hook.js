import {getComputers, deleteComputer} from '../../api/computer.api'

export async function getComputer(page){
    return await getComputers(page)
}

export async function deleteComputers(tableau){
    return await deleteComputer(tableau)
}


