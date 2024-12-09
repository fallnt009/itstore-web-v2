import {useCallback, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';

import useProduct from '../../shared/hooks/useProduct';

import validateProduct from '../utils/validate-product';

import {ADMIN_PRODUCT} from '../../shared/services/config/routing';

export default function useAdminProductForm() {
  //useProduct
  const {createProduct} = useProduct();

  const navigate = useNavigate();
  //state
  const [formValues, setFormValues] = useState({
    title: '',
    price: 0,
    description: '',
    qtyInStock: 0,
  });
  const [formErrors, setFormErrors] = useState({});

  const [selectedImage, setSelectedImage] = useState([]);

  //bcs
  const [bcsId, setBcsId] = useState(null);

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

  const handleClickBack = useCallback(() => {
    navigate(ADMIN_PRODUCT);
  }, [navigate]);
  const handleSelectImage = useCallback(() => {}, []);
  const handleSelectBcsId = useCallback((bcsId) => {
    setBcsId(bcsId);
  }, []);

  //handleSubmit
  const handleSubmitForm = useCallback(
    async (e) => {
      e.preventDefault();
      //validate input
      const errors = validateProduct(formValues);
      const combinedErrors = {...errors};

      //if not select Tag
      if (!bcsId) {
        combinedErrors.bcsError = 'Please Select Your Product Tag';
      }

      setFormErrors(combinedErrors);

      if (Object.keys(combinedErrors).length > 0) {
        return;
      }
      console.log(formValues, bcsId);

      console.log(typeof formValues.price);
      console.log(typeof formValues.qtyInStock);

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

        //call api here
        //create and update (bcsId,data)
        //toast success
        toast.success('Success');
      } catch (err) {
        //unexpected error
        toast.error('Error Creating!');
      }
    },
    [formValues, selectedImage, bcsId]
  );

  return {
    formValues,
    formErrors,
    bcsId,
    handleChangeInput,
    handleSelectBcsId,
    handleSubmitForm,
    handleClickBack,
  };
}
