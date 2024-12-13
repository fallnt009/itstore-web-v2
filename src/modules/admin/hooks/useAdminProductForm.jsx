import {useCallback, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';

import useAdmin from '../../shared/hooks/useAdmin';
import useError from '../../shared/hooks/useError';

import validateProduct from '../utils/validate-product';

import {ADMIN_PRODUCT} from '../../shared/services/config/routing';

export default function useAdminProductForm(productId) {
  //useProduct
  const {createProduct, fetchProductById} = useAdmin();

  const {error, errorStatus, setIsError} = useError();

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
  //error

  //fetch productData when productId provided
  const loadProductById = async (id) => {
    try {
      // await
      const res = await fetchProductById(id);
      //setState
      if (!res.data || !res.data.result) {
        throw new Error('Invalid API response structure');
      }

      //setbcsId , setSelectedImage ,setFormValues
      setBcsId(res.data.result.ProductSubCategory.brandCategorySubId);
      setSelectedImage(res.data.result.ProductImages);
      setFormValues({
        title: res.data.result.title,
        price: res.data.result.price,
        description: res.data.result.description,
        qtyInStock: res.data.result.qtyInStock,
      });
    } catch (err) {
      //global error
      setIsError(err);
    }
  };
  useEffect(() => {
    if (productId) {
      loadProductById(productId);
    }
  }, [productId]);

  useEffect(() => {});

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
  const handleSelectImage = useCallback((img) => {
    setSelectedImage(img);
  }, []);
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

        await createProduct(bcsId, formData);
        //toast success
        toast.success('Success');
      } catch (err) {
        //unexpected error
        toast.error('Error Creating!');
      }
    },
    [formValues, selectedImage, bcsId, createProduct]
  );

  // console.log(newError);

  return {
    formValues,
    formErrors,
    bcsId,
    selectedImage,
    error,
    errorStatus,
    handleChangeInput,
    handleSelectBcsId,
    handleSubmitForm,
    handleClickBack,
    handleSelectImage,
  };
}
