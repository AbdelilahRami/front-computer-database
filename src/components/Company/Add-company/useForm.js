import { useState, useEffect } from 'react'

export default function useForm(callback, validate) {

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [company, setCompany] = useState({ id: null, name: '' });

  function handleChange(event) {
    setCompany({ ...company, name: event.target.value })
    console.log(company)
  }

  function handleSubmit(event) {
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