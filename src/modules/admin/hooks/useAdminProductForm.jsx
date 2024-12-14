import {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {toast} from 'react-toastify';

import useAdmin from '../../shared/hooks/useAdmin';
import useError from '../../shared/hooks/useError';

import validateProduct from '../utils/validate-product';

import {ADMIN_PRODUCT} from '../../shared/services/config/routing';

export default function useAdminProductForm() {
  const {productId} = useParams();
  //useProduct
  const {createProduct, editProduct, fetchProductById} = useAdmin();

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
  const [brandId, setBrandId] = useState(null);
  //error

  //fetch productData when productId provided
  const loadProductById = async (id) => {
    try {
      // await
      const res = await fetchProductById(id);

      const {data, images, keys} = res;

      //setbcsId , setSelectedImage ,setFormValues
      setBcsId(keys?.bcsId || '');
      setBrandId(keys?.brandId || '');
      setSelectedImage(images || []);
      setFormValues({
        id: data.id || '',
        title: data.title || '',
        price: data.price || '',
        description: data.description || '',
        qtyInStock: data.qtyInStock || 0,
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

        //selected Update or Create
        if (formValues.id) {
          //updated data
          formData.append('bcsId', bcsId);

          await editProduct(formValues.id, formData);
          toast.success('Updated Product Success');
        } else {
          //create
          await createProduct(bcsId, formData);
          //toast success
          toast.success('Create Product Success');
        }
      } catch (err) {
        //unexpected error
        toast.error('Error Creating!');
      }
    },
    [formValues, selectedImage, bcsId, createProduct, editProduct]
  );

  return {
    formValues,
    formErrors,
    bcsId,
    brandId,
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
