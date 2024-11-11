import axios from '../config/axios';

//payment
export const getAllPaymentMethod = () => axios.get(`/payment`);

//userpayment
export const getUserPaymentByOrderId = (orderId) =>
  axios.get(`/payment/user/pay/${orderId}`); //get userpayment on select page

export const updateUserPaymentById = (userPaymentId) =>
  axios.patch(`/payment/user/${userPaymentId}`); //update and upload proof
