import {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {MdKeyboardArrowRight} from 'react-icons/md';

import useOrder from '../../../shared/hooks/useOrder';
import useLoading from '../../../shared/hooks/useLoading';
import useError from '../../../shared/hooks/useError';

import OrderHistoryMenu from './menu/OrderHistoryMenu';
import OrderHistoryList from './lists/OrderHistoryList';
import OrderHistoryLoading from './lists/loading/OrderHistoryLoading';

import {HOME, ORDER_DETAIL} from '../../../shared/services/config/routing';
import ErrorPage from '../../../shared/features/error/ErrorPage';

export default function OrderHistory() {
  const {orderList, fetchAllMyOrder} = useOrder();
  const {loading, startLoading, stopLoading} = useLoading();
  const {error, errorStatus, setIsError} = useError();

  const navigate = useNavigate();

  //pargination
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  //Error state

  //status and filter
  const [status, setStatus] = useState({id: 1, name: 'All'});
  const [statusFilter, setStatusFilter] = useState('');

  const {filter, totalPages} = orderList;

  //fetch Order
  useEffect(() => {
    const loadMyOrder = async () => {
      startLoading();
      try {
        await fetchAllMyOrder(page, pageSize, statusFilter);
      } catch (err) {
        setIsError(err);
      } finally {
        stopLoading();
      }
    };
    loadMyOrder();
  }, [fetchAllMyOrder, page, pageSize, statusFilter]);

  const handleClickNavigate = (orderNumber) => {
    navigate(ORDER_DETAIL(orderNumber));
    navigate(0);
  };

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  if (error) {
    // err page here
    return <ErrorPage statusCode={errorStatus} />;
  }

  return (
    <>
      {loading ? (
        <OrderHistoryLoading />
      ) : (
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
            <OrderHistoryMenu
              status={status}
              setFilter={setStatusFilter}
              setStatus={setStatus}
            />
            <OrderHistoryList
              status={status}
              orderFilter={filter}
              onClick={handleClickNavigate}
              page={page}
              totalPages={totalPages}
              onChange={handleChangePage}
            />
          </div>
        </div>
      )}
    </>
  );
}
