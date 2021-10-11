import { useState } from 'react';

const useForm = (name, email, message) => {
  const [error, setError] = useState([]);
  const [validForm, setValidForm] = useState();
  const validateForm = () => {
    if (!name || !email || !message) {
      setError(prevError => [...prevError, 'All fields are mandatory.']);
      setValidForm(false);
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError(prevError => [...prevError,'Please enter a valid email address.']);
      setValidForm(false);
    }
  };
  return {error, validForm, validateForm, setError };
};

export default useForm;
