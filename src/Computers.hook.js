import {MOCK_COMPUTERS} from './Mock'

export function useComputers(){
    return(MOCK_COMPUTERS.list_computer)
}

export function deleteComputers(tableau){
    console.log(tableau)
}