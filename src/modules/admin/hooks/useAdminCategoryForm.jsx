import {useCallback, useState} from 'react';
import {toast} from 'react-toastify';

import {
  validateCategory,
  validateCategoryTags,
} from '../utils/validate-category';

import {CREATE_SUCCESS} from '../../shared/services/config/toast';
import {handleApiError} from '../../shared/utils/apiErrorHandler';

export default function useAdminCategoryForm() {
  //menu state
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

      setTagValues({...tagValues, [name]: value});
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

      if (Object.keys(errors).length > 0) {
        return;
      }
      try {
        //callapi
        toast.success(CREATE_SUCCESS);
      } catch (err) {
        //toast
        handleApiError(err);
      }
    },
    [formValues]
  );
  const handleSubmitCategoryTag = useCallback(
    (e) => {
      e.preventDefault();

      const errors = validateCategoryTags(tagValues);

      setTagError(errors);

      if (Object.keys(errors).length > 0) {
        return;
      }

      try {
        //call api
        toast.success(CREATE_SUCCESS);
      } catch (err) {
        //toast
        handleApiError(err);
      }
    },
    [tagValues]
  );

  return {
    formValues,
    formErrors,
    tagValues,
    tagError,
    handleChangeInput,
    handleSelectTag,
    handleSubmitCategory,
    handleSubmitCategoryTag,
  };
}
