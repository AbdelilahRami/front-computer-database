export default function validate(computer){
    let errors = {};
    if(!computer.name){
        errors.name ="computer name is not empty";
    }
         if(Date.parse(computer.introduced) >Date.parse(computer.discontinued)){
             console.log(Date.parse(computer.introduced))
            errors.introduced="introduced is before discontinued";
    }
    return errors;

}