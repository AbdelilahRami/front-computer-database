
import { useState, useEffect } from 'react'

function useForm(callback, validate, currentComputer) {

  const [computer, setComputer] = useState( { id: null, name: '', introduced: '', discontinued: '', companyDTO: { id: null, name: '' } });
  const [companyDTO, setCompanyDTO] = useState({ id: null, name: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function getCompanyDTO(event) {
    const companyName = event.target.value;
    const idCompany = event.target.options.selectedIndex;
    const companyDTOX = { id: idCompany, name: companyName };
    setComputer({ ...computer, companyDTO: companyDTOX })
  }

  function handleSubmit(event) {
    console.log(computer)
    let formIsValid = false;
    event.preventDefault()
    setErrors(validate(computer));
    setIsSubmitting(true);
  }

  useEffect(    
    () => {
        setComputer(currentComputer)
    },
    [currentComputer]
)

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return {
    handleSubmit,
    getCompanyDTO,
    computer,
    errors
  };
};

export default useForm;