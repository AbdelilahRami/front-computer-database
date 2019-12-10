
import {useState,useEffect} from 'react'

function useForm(callback,validate){
    const initialsForm = { id: null, name: '', introduced: '', discontinued: '', companyDTO: { id: null, name: '' } };
    const [computer, setComputer] = useState(initialsForm);
    const [companyDTO, setCompanyDTO] = useState({ id: null, name: '' });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    function getCompanyDTO(event) {
        const companyName = event.target.value;
        const idCompany = event.target.options.selectedIndex;
        const companyDTOX = { id: idCompany, name: companyName };
        setComputer({ ...computer, companyDTO: companyDTOX })
      }

    function handleChange(event) {
        const { name, value } = event.target
        setComputer({ ...computer, [name]: value })
      }
      function handleSubmit(event) {
        let formIsValid = false;
        event.preventDefault()
        setErrors(validate(computer));
        console.log(errors)
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
        getCompanyDTO,
        computer,
        errors
      };
};
export default useForm;