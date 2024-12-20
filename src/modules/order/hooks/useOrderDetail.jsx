import {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import useOrder from '../../shared/hooks/useOrder';
import useLoading from '../../shared/hooks/useLoading';
import useError from '../../shared/hooks/useError';

export default function useOrderDetail() {
  //params
  const {orderNumber} = useParams();
  //order
  const {order, fetchOrderByNumber} = useOrder();
  //loading
  const {loading, startLoading, stopLoading} = useLoading();
  //error
  const {error, errorStatus, setIsError} = useError();

  //fetch by OrderNumber
  useEffect(() => {
    const loadOrderDetail = async () => {
      startLoading();
      try {
        await fetchOrderByNumber(orderNumber);
      } catch (err) {
        setIsError(err);
      } finally {
        stopLoading();
      }
    };
    loadOrderDetail();
  }, [fetchOrderByNumber, orderNumber, setIsError, startLoading, stopLoading]);

  return {
    order,
    orderNumber,
    error,
    errorStatus,
    loading,
  };
}
