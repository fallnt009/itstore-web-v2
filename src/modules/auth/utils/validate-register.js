import Joi from 'joi';

const registerSchema = Joi.object({
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
  password: Joi.string().alphanum().min(8).required().trim().messages({
    'any.required': 'password is required',
    'string.empty': 'password is required',
    'string.alphanum': 'password must contain a number or alphabet',
    'string.min': 'password must have at least 8 characters',
  }),

  confirmPassword: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .trim()
    .messages({
      'string.empty': 'confirm password must not empty',
      'any.only': 'confirm password did not match',
    }),
});

const validateRegister = (input) => {
  const {error} = registerSchema.validate(input, {abortEarly: false});

  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});

    return result;
  }
  return error;
};

export default validateRegister;
