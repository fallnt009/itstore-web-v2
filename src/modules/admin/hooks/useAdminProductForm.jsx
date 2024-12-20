import {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {toast} from 'react-toastify';

import useAdmin from '../../shared/hooks/useAdmin';
import useError from '../../shared/hooks/useError';

import validateProduct from '../utils/validate-product';

import {ADMIN_PRODUCT} from '../../shared/services/config/routing';

import {
  UNEXPECTED_ERROR,
  CREATE_SUCCESS,
  UPDATE_SUCCESS,
} from '../../shared/services/config/toast';

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
    isActive: false,
  });
  const [formErrors, setFormErrors] = useState({});

  const [selectedImage, setSelectedImage] = useState([]);

  //bcs
  const [bcsId, setBcsId] = useState(null);
  const [brandId, setBrandId] = useState(null);

  //fetch productData when productId provided
  const loadProductById = useCallback(
    async (id) => {
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
          isActive: data.isActive || false,
        });
      } catch (err) {
        //global error
        setIsError(err);
      }
    },
    [fetchProductById, setIsError]
  );

  useEffect(() => {
    if (productId) {
      loadProductById(productId);
    }
  }, [productId, loadProductById]);

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
        formData.append('isActive', formValues.isActive.toString());

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
          toast.success(UPDATE_SUCCESS);
        } else {
          //create
          await createProduct(bcsId, formData);
          //toast success
          toast.success(CREATE_SUCCESS);
        }
      } catch (err) {
        //unexpected error
        toast.error(UNEXPECTED_ERROR);

        //redirect to main product
      }
    },
    [formValues, selectedImage, bcsId, createProduct, editProduct]
  );

  const handleToggleActiveProduct = () => {
    setFormValues((prevState) => ({
      ...prevState,
      isActive: !prevState.isActive,
    }));
  };

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
    handleToggleActiveProduct,
  };
}
