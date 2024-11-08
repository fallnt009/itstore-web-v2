import {useCallback, useState} from 'react';

export default function useUserPayment() {
  //State
  const [selectImage, setSelectImage] = useState([]);

  //fetch

  //function
  const updateUserPayment = useCallback(() => {}, []);

  return {selectImage};
}
