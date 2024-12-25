import Joi from 'joi';

const categorySchema = Joi.object({
  title: Joi.string().trim().required().messages({
    'any.required': 'Product Name is required',
    'string.empty': 'Product Name is required',
    'string.base': 'Product Name must a character',
  }),
});

const categoryTagSchema = Joi.object({
  brandId: Joi.number().required().messages({
    'any.required': 'Brand is required',
    'string.base': 'Brand must be a valid string',
    'number.base': 'Brand must be a valid number',
  }),
  categoryId: Joi.number().required().messages({
    'any.required': 'Category is required',
    'string.base': 'Category must be a valid string',
    'number.base': 'Category must be a valid number',
  }),
  subCategoryId: Joi.number().required().messages({
    'any.required': 'Sub Category is required',
    'string.base': 'Sub Category must be a valid string',
    'number.base': 'Sub Category must be a valid number',
  }),
});

const formatErrors = (error) => {
  const errors = {};
  error.details.forEach((detail) => {
    errors[detail.path[0]] = detail.message;
  });
  return errors;
};

const validateCategory = (input) => {
  const {error} = categorySchema.validate(input, {abortEarly: false});
  if (!error) return null;

  return error ? formatErrors(error) : null;
};
const validateCategoryTags = (input) => {
  const {error} = categoryTagSchema.validate(input, {abortEarly: false});
  if (!error) return null;

  return error ? formatErrors(error) : null;
};

export {validateCategory, validateCategoryTags};
