const messages = {
  400: 'Invalid input',
  401: 'Please log in',
  404: 'Not found',
  500: 'Server error',
};

const getErrorMessage = (status) => {
  return messages[status] || 'An unknown error occurred';
};

export {getErrorMessage};
