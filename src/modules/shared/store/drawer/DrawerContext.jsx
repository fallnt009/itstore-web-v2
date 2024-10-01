import {useState, createContext, useCallback} from 'react';

const DrawerContext = createContext();

export default function DrawerContextProvider({children}) {
  const [isOpen, setIsOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState(null);

  const openDrawerWithContent = useCallback((content) => {
    setDrawerContent(content);
    setIsOpen(true);
  }, []);
  const closeDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <DrawerContext.Provider
      value={{openDrawerWithContent, closeDrawer, isOpen, drawerContent}}
    >
      {children}
    </DrawerContext.Provider>
  );
}

export {DrawerContext};
