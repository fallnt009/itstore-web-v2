import {useCallback, useState} from 'react';
import {toast} from 'react-toastify';

import useProduct from '../../shared/hooks/useProduct';

import validateProduct from '../utils/validate-product';

export default function useAdminProductForm() {
  //useProduct
  const {createProduct} = useProduct();
  //state
  const [formValues, setFormValues] = useState({
    title: '',
    price: '',
    description: '',
    qtyInStock: 0,
  });
  const [formErrors, setFormErrors] = useState({});

  const [selectedImage, setSelectedImage] = useState([]);

  //bcs
  const [bcsId, setBcsId] = useState(null);
  const [bcsData, setBcsData] = useState(null);

  //onChange
  const handleChangeInput = useCallback(
    (e) => {
      const {name, value} = e.target;
      setFormValues({...formValues, [name]: value});

      //validate errors
      const singleFieldErrors = validateProduct({[name]: value});
      setFormErrors({
        ...formErrors,
        [name]: singleFieldErrors ? singleFieldErrors[name] : '',
      });
    },
    [formValues, formErrors]
  );

  const handleClickBack = useCallback(() => {}, []);
  const handleSelectImage = useCallback(() => {}, []);

  //handleSubmit
  const handleSubmitForm = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        //form data
        const formData = new FormData();

        formData.append('title', formValues.title);
        formData.append('price', formValues.price);
        formData.append('description', formValues.description);
        formData.append('qtyInStock', formValues.qtyInStock);

        // select image
        if (selectedImage.length > 0) {
          selectedImage.forEach((imgObj, index) => {
            formData.append('productImage', imgObj.file);
          });
        }
        //validate input
        const errors = validateProduct(formValues);
        setFormErrors(errors || {});

        if (!errors) {
          //call api here
          //toast success
          toast.success('Success');
        }
      } catch (err) {
        //unexpected error
        toast.error('Error!');
      }
    },
    [formValues, selectedImage]
  );

  return {formValues, formErrors, handleChangeInput, handleSubmitForm};
}
