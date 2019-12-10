
import { useState, useEffect } from 'react'

function useForm(callback, validate, currentComputer) {

  const [computer, setComputer] = useState({ id: null, name: '', introduced: '', discontinued: '', companyDTO: { id: null, name: '' } });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(event) {
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
      setComputer(currentComputer)
    },
    [currentComputer]
  )

  return {
    handleSubmit,
    computer,
    errors
  };
};

export default useForm;