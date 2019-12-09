import  {getCompanys, addCompany,updateCompani}  from "../../api/companys.api";

export async function getCompanies(){
    return await getCompanys()
}

export async function createCompany(name){
    return await addCompany(name)
}

export async function updateCompany(company){
    return await updateCompani(company)
}