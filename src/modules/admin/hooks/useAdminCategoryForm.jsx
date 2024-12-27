import {useCallback, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';

import useAdmin from '../../shared/hooks/useAdmin';

import {
  validateCategory,
  validateCategoryTags,
} from '../utils/validate-category';

import handleApiError from '../../shared/utils/apiErrorHandler';
import {CREATE_SUCCESS} from '../../shared/services/config/toast';
import {ADMIN_CATEGORY} from '../../shared/services/config/routing';

export default function useAdminCategoryForm() {
  const {categoryFilters, fetchAllCategory} = useAdmin();

  const navigate = useNavigate();
  //menu state
  const [selectedMenu, setSelectedMenu] = useState(1);
  //state
  const [formValues, setFormValues] = useState({
    title: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const [tagValues, setTagValues] = useState({
    brandId: '',
    categoryId: '',
    subCategoryId: '',
  });
  const [tagError, setTagError] = useState({});

  //loadAllCategory
  useEffect(() => {
    if (selectedMenu === 4) {
      fetchAllCategory();
    }
  }, [selectedMenu, fetchAllCategory]);
  //handle
  const handleChangeInput = useCallback(
    (e) => {
      const {name, value} = e.target;
      setFormValues({...formValues, [name]: value});

      //validate errors
      const singleFieldErrors = validateCategory({[name]: value});
      setFormErrors({
        ...formErrors,
        [name]: singleFieldErrors ? singleFieldErrors[name] : '',
      });
    },
    [formValues, formErrors]
  );

  const handleSelectTag = useCallback(
    (e) => {
      const {name, value} = e.target;

      setTagValues({...tagValues, [name]: Number(value)});
      //validate Errors
      const singleErrors = validateCategoryTags({[name]: value});
      setTagError({
        ...tagError,
        [name]: singleErrors ? singleErrors[name] : '',
      });
    },
    [tagValues, tagError]
  );

  const handleSubmitCategory = useCallback(
    (e) => {
      e.preventDefault();

      const errors = validateCategory(formValues);

      setFormErrors(errors);

      if (errors && Object.keys(errors).length > 0) {
        return;
      }
      try {
        //callapi
        //resetTag

        toast.success(CREATE_SUCCESS);
      } catch (err) {
        //toast
        handleApiError(err);
      } finally {
        //reset State
        setFormValues({title: ''});
        setFormErrors({});

        navigate(ADMIN_CATEGORY);
      }
    },
    [formValues, navigate]
  );
  const handleSubmitCategoryTag = useCallback(
    (e) => {
      e.preventDefault();

      const errors = validateCategoryTags(tagValues);

      setTagError(errors);

      if (errors && Object.keys(errors).length > 0) {
        return;
      }
      try {
        //call api

        toast.success(CREATE_SUCCESS);
      } catch (err) {
        handleApiError(err);
      } finally {
        setTagValues({brandId: '', categoryId: '', subCategoryId: ''}); // Reset or update state as needed
        setTagError({}); // Reset errors

        navigate(ADMIN_CATEGORY);
      }
    },
    [tagValues, navigate]
  );

  const handleSelectMenu = useCallback((id) => {
    setSelectedMenu(id);
    setTagValues({
      brandId: '',
      categoryId: '',
      subCategoryId: '',
    });
    setFormValues({
      title: '',
    });
  }, []);

  const navigateBack = useCallback(() => {
    navigate(ADMIN_CATEGORY);
  }, [navigate]);

  return {
    formValues,
    formErrors,
    tagValues,
    tagError,
    selectedMenu,
    categoryFilters,
    handleChangeInput,
    handleSelectTag,
    handleSubmitCategory,
    handleSubmitCategoryTag,
    handleSelectMenu,
    navigateBack,
  };
}
