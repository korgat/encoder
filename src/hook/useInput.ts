import { useState } from 'react';

export type TValidationFn = (value: string) => boolean;

const useInput = (validationFn?: TValidationFn) => {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  let isValid = false;
  let hasError = false;

  if (validationFn) {
    isValid = validationFn(value);
    hasError = !isValid && isTouched;
  }

  const setTouchedStatus = () => {
    setIsTouched(true);
  };

  const changeHandler = (value: string) => {
    setValue(value);
  };

  return { value, hasError, isValid, changeHandler, setTouchedStatus };
};

export default useInput;
