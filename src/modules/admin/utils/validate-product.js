import Joi from 'joi';

const productSchema = Joi.object({
  title: Joi.string().trim().required().messages({
    'any.required': 'Product Name is required',
    'string.empty': 'Product Name is required',
    'string.base': 'Product Name must a character',
  }),
  price: Joi.string().trim().required().messages({
    'any.required': 'Price is required',
    'string.empty': 'Price is required',
  }),
  description: Joi.string().trim().required().messages({
    'any.required': 'Description is required',
    'string.empty': 'Description is required',
    'string.base': 'Description must a character',
  }),
  qtyInStock: Joi.number().integer().min(0).allow(null).optional().messages({
    'number.base': 'Quantity in Stock must be a number',
    'number.integer': 'Quantity in Stock must be an integer',
    'number.min': 'Quantity in Stock cannot be negative',
  }),
});

const validateProduct = (input) => {
  const {error} = productSchema.validate(input, {abortEarly: false});
  if (!error) return null;

  const errors = {};
  error.details.forEach((detail) => {
    errors[detail.path[0]] = detail.message;
  });
  return errors;
};

export default validateProduct;
