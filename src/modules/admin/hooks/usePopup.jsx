import {useCallback, useState} from 'react';

export default function usePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [itemId, setItemId] = useState(null);

  const setOpenPopup = useCallback((id) => {
    setIsOpen(true);
    //setItemId
    setItemId(id);
  }, []);
  const setClosePopup = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {isOpen, itemId, setOpenPopup, setClosePopup};
}
