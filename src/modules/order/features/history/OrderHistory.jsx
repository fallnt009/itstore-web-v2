import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import useOrder from '../../../shared/hooks/useOrder';
import useLoading from '../../../shared/hooks/useLoading';

import {ORDER_DETAIL} from '../../../shared/services/config/routing';

import OrderHistoryHeader from './header/OrderHistoryHeader';
import OrderHistoryList from './lists/OrderHistoryList';

export default function OrderHistory() {
  const {orderList, fetchAllMyOrder} = useOrder();
  const {startLoading, stopLoading} = useLoading();
  const navigate = useNavigate();

  const {filter} = orderList;

  //fetch Order
  useEffect(() => {
    fetchAllMyOrder();
  }, [fetchAllMyOrder]);

  const handleClickNavigate = (orderNumber) => {
    startLoading();
    navigate(ORDER_DETAIL(orderNumber));
    stopLoading();
  };
  //header
  //list

  return (
    <div className="py-10">
      <div className="grid grid-cols-[1fr_3fr] mx-24 ">
        <OrderHistoryHeader />
        <OrderHistoryList orderFilter={filter} onClick={handleClickNavigate} />
      </div>
    </div>
  );
}
