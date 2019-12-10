export default function validate(company){
    let errors = {};
    if(!company.name){
        errors.name ="company name is not empty";
    }

    return errors;
}