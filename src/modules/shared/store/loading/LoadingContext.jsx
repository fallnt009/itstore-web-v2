import {useState, createContext, useCallback} from 'react';

const LoadingContext = createContext();

export default function LoadingContextProvider({children}) {
  const [loading, setLoading] = useState(false);

  const startLoading = useCallback(() => setLoading(true), []);
  const stopLoading = useCallback(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <LoadingContext.Provider value={{loading, startLoading, stopLoading}}>
      {children}
    </LoadingContext.Provider>
  );
}

export {LoadingContext};
