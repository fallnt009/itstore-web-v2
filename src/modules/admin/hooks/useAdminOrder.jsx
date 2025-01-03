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
    startDate: '',
    endDate: '',
  });

  //set Default date
  useEffect(() => {
    //get current date
    const now = new Date();

    //calculate first and last date of current month

    const startDate = new Date(now.getFullYear(), now.getMonth(), 1);
    const endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);

    const formatDate = (date) =>
      `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
        2,
        '0'
      )}-${String(date.getDate()).padStart(2, '0')}`;

    //set default Date
    setDateFilters({
      startDate: formatDate(startDate),
      endDate: formatDate(endDate),
    });
  }, []);

  //fetch all order
  useEffect(() => {
    const loadAllOrder = async () => {
      try {
        await fetchAllOrder(page, pageSize, filters, sorts, dateFilters);
      } catch (err) {
        console.log(err);
        //setError
      }
    };
    loadAllOrder();
  }, [fetchAllOrder, page, pageSize, filters, sorts, dateFilters]);

  //pagination
  const handleChangePage = useCallback((newPage) => {
    setPage(newPage);
  }, []);
  const handleChangePageSize = useCallback((newPageSize) => {
    setPageSize(newPageSize);
  }, []);

  //sorts
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

  //filters
  const handleToggleFilters = useCallback(
    (type) => {
      const filtersMapping = {
        unpaid: {paymentStatus: TRANSACTION_PENDING},
        paid: {paymentStatus: TRANSACTION_AWAITING},
        completed: {orderStatus: ORDER_COMPLETED},
        canceled: {orderStatus: ORDER_CANCELED},
        unreviewed: {isVerify: false},
      };
      if (filtersMapping[type]) {
        setFilters(filtersMapping[type]);
      } else {
        //clear filters
        setFilters({});
      }
    },
    [setFilters]
  );

  const handleChangeDate = useCallback((selectedDate) => {
    setDateFilters(selectedDate);
  }, []);

  return {
    orderOverview,
    page,
    dateFilters,
    handleChangePage,
    handleToggleFilters,
    handleSortOrder,
    handleChangeDate,
    handleChangePageSize,
  };
}
