import {MOCK_COMPUTERS} from '../../Mock'

export function useComputers(){
    return(MOCK_COMPUTERS.list_computer)
}

export function deleteComputers(tableau){
    console.log(tableau)
}

export function searchName(champ){
    console.log(champ)
}
export function countComputers(){
   return(MOCK_COMPUTERS.nb_computer)
}

export function limitPage(limit){
    console.log(limit)
}

export function actualPage(actual){
    console.log(actual)
}