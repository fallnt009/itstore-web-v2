import {useState, createContext, useCallback} from 'react';

const ErrorContext = createContext();

export default function ErrorContextProvider({children}) {
  const [error, setError] = useState(false);
  const [errorStatus, setErrorStatus] = useState('');

  // const [newError, setNewError] = useState({});

  const setIsError = useCallback((error) => {
    setError(true);
    setErrorStatus(error.status);
  }, []);

  const clearError = useCallback(() => {
    setError(false);
    setErrorStatus('');
  }, []);

  // //Set Error for Specific Key
  // const setNewErrorValue = useCallback((key, message, status = null) => {
  //   setNewError((prevErrors) => ({
  //     ...prevErrors,
  //     [key]: {message, status},
  //   }));
  // }, []);

  // //Clear Error for Specific Key
  // const clearNewErrorValue = useCallback((key) => {
  //   setNewError((prevError) => {
  //     const {[key]: _, ...remainingErrors} = prevError;
  //     return remainingErrors;
  //   });
  // }, []);
  // const clearAllErrors = useCallback(() => {
  //   setNewError({});
  // }, []);

  return (
    <ErrorContext.Provider
      value={{
        error,
        errorStatus,
        setIsError,
        clearError,
      }}
    >
      {children}
    </ErrorContext.Provider>
  );
}

export {ErrorContext};
