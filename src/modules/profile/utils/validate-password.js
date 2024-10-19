import Joi from 'joi';

const passwordSchema = Joi.object({
  currentPassword: Joi.string().required().alphanum().min(8).trim().messages({
    'string.empty': 'current password is required',
    'string.alphanum': 'password must contain a number or alphabet',
    'string.min': 'password must have at least 8 characters',
  }),

  newPassword: Joi.string().required().alphanum().min(8).trim().messages({
    'string.empty': 'new password is required',
    'string.alphanum': 'password must contain a number or alphabet',
    'string.min': 'password must have at least 8 characters',
  }),
  confirmNewPassword: Joi.string()
    .required()
    .valid(Joi.ref('newPassword'))
    .trim()
    .messages({
      'string.empty': 'confirm password must not empty',
      'any.only': 'confirm password did not match',
    }),
});

const validatePassword = (input) => {
  const {error} = passwordSchema.validate(input, {abortEarly: false});
  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});

    return result;
  }
  return error;
};

export default validatePassword;
