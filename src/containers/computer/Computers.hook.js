import {getComputers, deleteComputer, createComputer, updateComputer} from '../../api/computer.api'

export async function getComputer(page){
    return await getComputers(page)
}

export async function deleteComputers(tableau){
    return await deleteComputer(tableau)
}

export async function addComputer(computer){
    return await createComputer(computer)
}

export async function updateComputers(computer){
    return await updateComputer(computer)
}

