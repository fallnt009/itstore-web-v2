import {useState, useEffect, useCallback} from 'react';
import useAdmin from '../../shared/hooks/useAdmin';

import {
  TRANSACTION_PENDING,
  TRANSACTION_AWAITING,
  ORDER_COMPLETED,
  ORDER_CANCELED,
} from '../../shared/services/config/constants';

export default function useAdminOrder() {
  const {orderOverview, fetchAllOrder} = useAdmin();

  //pagination
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  //sorting
  const [sorts, setSorts] = useState({sortBy: 'createdAt', sortValue: 'ASC'});
  //filters
  const [filters, setFilters] = useState({});
  //dates
  const [dateFilters, setDateFilters] = useState({
    startDate: new Date().toISOString().split('T', 1)[0],
    endDate: new Date().toISOString().split('T', 1)[0],
  });
  //fetch unreviewed verifierId &&& verifierDate === null
  //unpaid = paymentStatus === Pending
  //completed = paymentStatus === Completed
  //canceled = orderStatus === canceled

  //{paymentStatus,orderStatus,startDate,endDate,verifierId,verifyDate}

  useEffect(() => {
    const loadAllOrder = async () => {
      try {
        await fetchAllOrder(page, pageSize);
      } catch (err) {
        console.log(err);
      }
    };
    loadAllOrder();
  }, [fetchAllOrder, page, pageSize]);

  const handleChangePage = useCallback((newPage) => {
    setPage(newPage);
  }, []);
  const handleChangePageSize = useCallback((newPageSize) => {
    setPageSize(newPageSize);
  }, []);

  const handleSortOrder = useCallback((newSort) => {
    const sortsMapping = {
      asc: {sortBy: 'createdAt', sortValue: 'ASC'},
      desc: {sortBy: 'createdAt', sortValue: 'DESC'},
    };
    //if sort have value return setsort
    if (sortsMapping[newSort]) {
      setSorts(sortsMapping[newSort]);
    }
  }, []);

  const handleToggleFilters = useCallback(
    (type) => {
      const filtersMapping = {
        unpaid: {paymentStatus: TRANSACTION_PENDING},
        paid: {paymentStatus: TRANSACTION_AWAITING},
        completed: {orderStatus: ORDER_COMPLETED},
        canceled: {orderStatus: ORDER_CANCELED},
        unreviewed: {verifierId: null, verifyDate: null},
      };
      if (filtersMapping[type]) {
        setFilters(...filtersMapping[type]);
      }
    },
    [setFilters]
  );

  const handleChangeDate = useCallback((startDate, endDate) => {
    setDateFilters({
      startDate: startDate,
      endDate: endDate,
    });
  }, []);

  return {
    orderOverview,
    page,
    handleChangePage,
    handleToggleFilters,
    handleSortOrder,
    handleChangeDate,
  };
}
