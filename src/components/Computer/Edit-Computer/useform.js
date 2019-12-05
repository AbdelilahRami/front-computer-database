
import {useState,useEffect} from 'react'

function useForm(callback,validate,currentComputer){
  console.log(currentComputer+'tatata')
    const initialsForm = { id: null, name: '', introduced: '', discontinued: '', companyDTO: { id: null, name: '' } };
    const [computer, setComputer] = useState(initialsForm);
    const [companyDTO, setCompanyDTO] = useState({ id: null, name: '' });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

  
      function handleSubmit(event) {
        console.log('im in handle')
        let formIsValid = false;
        event.preventDefault();
        setErrors(validate(computer));
        setIsSubmitting(true);
      }
      useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
          callback();
        }
      }, [errors]);

      useEffect(    
        () => {
            console.log('use effect')
            setComputer(currentComputer)
        },
        [currentComputer]
    )

      useEffect(    
        () => {
            console.log('use effect')
            setComputer(computer)
        },
        [computer]
    )


      return {
        handleSubmit,
        computer,
        errors
      };
};
export default useForm;