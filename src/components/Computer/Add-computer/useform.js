
import { useState, useEffect } from 'react'

function useForm(callback, validate, currentComputer) {

  const [computer, setComputer] = useState( { id: null, name: '', introduced: null, discontinued: null, companyDTO: { id: null, name: '' } });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(event) {
    console.log(computer);
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
    computer,
    errors
  };

};

export default useForm;