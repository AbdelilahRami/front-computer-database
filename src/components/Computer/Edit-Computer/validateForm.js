export default function validate(computer){
    let errors = {};
    if(!computer.name){
        errors.name ="computer name is not empty";
    }
         if(Date.parse(computer.introduced) >Date.parse(computer.discontinued)){
             console.log(Date.parse(computer.introduced))
            errors.introduced="introduced is before discontinued";
    }
    if(Date.parse(computer.introduced) > new Date()){
        errors.introduced="date cannot exced tomorrow date";
    }
    if(Date.parse(computer.discontinued) > new Date()){
        errors.discontinued="date cannot exced tomorrow date";
    }
    if(Date.parse(computer.introduced) < new Date('1970-01-01')){
        errors.introduced="date cannot be before 1970-January-01";
    }
    if(Date.parse(computer.discontinued) < new Date('1970-01-01')){
        errors.discontinued="date cannot be before 1970-January-01";
    }
    return errors;

}