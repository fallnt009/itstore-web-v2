import {useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {MdKeyboardArrowRight} from 'react-icons/md';

import useOrder from '../../../shared/hooks/useOrder';

import OrderHistoryHeader from './header/OrderHistoryHeader';
import OrderHistoryList from './lists/OrderHistoryList';

import {HOME, ORDER_DETAIL} from '../../../shared/services/config/routing';

export default function OrderHistory() {
  const {orderList, fetchAllMyOrder} = useOrder();
  const navigate = useNavigate();

  const {filter} = orderList;

  //fetch Order
  useEffect(() => {
    fetchAllMyOrder();
  }, [fetchAllMyOrder]);

  const handleClickNavigate = (orderNumber) => {
    navigate(ORDER_DETAIL(orderNumber));
  };
  //header
  //list

  return (
    <div className="py-10 px-10">
      <div className="flex gap-2 items-center py-5 text-lg border-b">
        <Link
          to={HOME}
          className="flex items-center gap-2 cursor-pointer hover:text-indigo-700"
        >
          <h1 className="font-semibold">Home</h1>
        </Link>
        <span>
          <MdKeyboardArrowRight />
        </span>
        <div className="flex items-center gap-2 cursor-pointer hover:text-indigo-700">
          <h1>Order History</h1>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_3fr]">
        <OrderHistoryHeader />
        <OrderHistoryList orderFilter={filter} onClick={handleClickNavigate} />
      </div>
    </div>
  );
}
