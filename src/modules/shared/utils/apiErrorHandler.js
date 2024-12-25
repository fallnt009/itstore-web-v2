import {toast} from 'react-toastify';

export default function handleApiError(err) {
  if (!err.response) {
    // Handle unexpected errors (network issues, no response)
    toast.error(
      'Network Error: Unable to reach the server. Please check your connection.'
    );
    return;
  }

  const {code, message} = err.response.data || {};

  // Handle specific error codes from the server (you can extend this list as needed)
  switch (code) {
    case 'DUPLICATE_ENTRY':
      toast.error(`Duplicate Error: ${message || 'The data already exists.'}`);
      break;
    case 'UNAUTHORIZED':
      toast.error(
        'Authorization Error: You are not authorized to perform this action.'
      );
      break;
    case 'NOT_FOUND':
      toast.error('Resource Not Found: The requested resource does not exist.');
      break;
    case 'VALIDATION_FAILED':
      toast.error(
        `Validation Error: ${message || 'The input data is invalid.'}`
      );
      break;
    default:
      // Default to a generic error if code is not recognized
      toast.error(
        `API Error: ${message || 'An error occurred. Please try again later.'}`
      );
  }
}
