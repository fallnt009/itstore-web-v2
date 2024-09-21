import Joi from 'joi';

const loginSchema = Joi.object({
  email: Joi.string().email({tlds: false}).required().messages({
    'string.empty': 'email is required',
    'string.email': 'Invalid email format',
  }),
  password: Joi.string().min(8).required().messages({
    'string.empty': 'password is required',
    'string.min': 'password must have at least 8 characters',
  }),
});

const validateLogin = (input) => {
  const {error} = loginSchema.validate(input, {abortEarly: false});

  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});

    return result;
  }
  return error;
};

export default validateLogin;
