import axios from '../config/axios';

//payment
export const getAllPaymentMethod = () => axios.get(`/payment`);

//userpayment
export const getUserPaymentByOrderId = (orderId) =>
  axios.get(`/payment/user/pay/${orderId}`); //get userpayment on select page

export const updateUserPaymentById = (userPaymentId, data) =>
  axios.patch(`/payment/user/${userPaymentId}`, data); //update and upload proof
