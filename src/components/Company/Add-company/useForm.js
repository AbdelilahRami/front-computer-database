import {useState,useEffect} from 'react'

function useForm(callback,validate){
    const initialsForm = { id: null, name: ''};
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [company, setCompany] = useState(initialsForm);

    function handleChange(event){
        const { name, value } = event.target
        setCompany({...company,name:event.target.value})
        console.log(company)
    }
    function handleSubmit(event) {
        let formIsValid = false;
        event.preventDefault()
        setErrors(validate(company));
        setIsSubmitting(true);
      }
      useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
          callback();
        }
      }, [errors]);
      return {
        handleChange,
        handleSubmit,
        company,
        errors
      };

}
export default useForm;