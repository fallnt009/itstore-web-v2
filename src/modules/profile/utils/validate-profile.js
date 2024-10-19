import Joi from 'joi';

const profileSchema = Joi.object({
  firstName: Joi.string().trim().required().messages({
    'any.required': 'first name is required',
    'string.empty': 'first name is required',
    'string.base': 'first name must a character',
  }),
  lastName: Joi.string().trim().required().messages({
    'any.required': 'last name is required',
    'string.empty': 'last name is required',
    'string.base': 'last name must a character',
  }),
  email: Joi.string().email({tlds: false}).messages({
    'string.empty': 'email is required',
    'string.email': 'Invalid email format',
  }),

  mobile: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .messages({
      'string.empty': 'mobile is required',
      'string.pattern.base': 'phone number must be exactly 10 digits',
    }),
});

const validateProfile = (input) => {
  const {error} = profileSchema.validate(input, {abortEarly: false});
  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});

    return result;
  }
  return error;
};

export default validateProfile;
