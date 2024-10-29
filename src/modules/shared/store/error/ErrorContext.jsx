import {useState, createContext, useCallback} from 'react';

const ErrorContext = createContext();

export default function ErrorContextProvider({children}) {
  const [error, setError] = useState(false);
  const [errorStatus, setErrorStatus] = useState('');

  const setIsError = useCallback((error) => {
    setError(true);
    setErrorStatus(error.status);
  }, []);

  const clearError = useCallback(() => {
    setError(false);
    setErrorStatus('');
  }, []);

  return (
    <ErrorContext.Provider value={{error, errorStatus, setIsError, clearError}}>
      {children}
    </ErrorContext.Provider>
  );
}

export {ErrorContext};
