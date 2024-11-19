import axios from 'axios';
import {getAccessToken} from '../../utils/local-storage';

import NetworkError from '../../components/error/NetworkError';

import {LOGIN} from '../config/routing';

axios.defaults.baseURL = process.env.REACT_APP_ENDPOINT_URL;

axios.interceptors.request.use(
  (config) => {
    if (getAccessToken()) {
      config.headers.authorization = `Bearer ${getAccessToken()}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// Response Interceptor for Error Handling
axios.interceptors.response.use(
  (response) => {
    // Return the response if successful
    return response;
  },
  (error) => {
    // Check if it's a network error
    if (error.code === 'ERR_NETWORK') {
      // console.error('Network error: Unable to connect to the server.');
      //render network error page
      // console.log('Run');
      // window.location.href = '/';
    }

    // Check if the server responded with an error
    if (error.response) {
      const {status, data} = error.response;
      // console.error(`Server Error (${status}):`, data.message || data);

      // Example: Redirect to login if 401 Unauthorized
      if (status === 401) {
        window.location.href = LOGIN; // Or handle token refresh logic
      }
    }

    // Check if the request was made but no response was received
    // if (error.request) {
    //   console.error('No response received from the server:', error.request);
    // }

    // Handle any other error
    // console.error('Error:', error.message);

    // Reject the error to be handled in specific API calls
    return Promise.reject(error);
  }
);

export default axios;
