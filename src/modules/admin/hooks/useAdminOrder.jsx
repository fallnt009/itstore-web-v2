import {useState, useEffect, useCallback} from 'react';
import useAdmin from '../../shared/hooks/useAdmin';

export default function useAdminOrder() {
  const {orderOverview, fetchAllOrder} = useAdmin();

  //pagination
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  //sorting
  const [sorts, setSorts] = useState({sortBy: 'createdAt', sortValue: 'ASC'});
  //filters
  const [filters, setFilters] = useState({});
  //fetch unreviewed verifierId &&& verifierDate === null
  //unpaid = paymentStatus === Pending
  //completed = paymentStatus === Completed
  //canceled = orderStatus === canceled

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

  const setSortOrder = useCallback((newSort) => {
    const sortsMapping = {
      asc: {sortBy: 'createdAt', sortValue: 'ASC'},
      desc: {sortBy: 'createdAt', sortValue: 'DESC'},
    };
    //if sort have value return setsort
    if (sortsMapping[newSort]) {
      setSorts(sortsMapping[newSort]);
    }
  }, []);

  return {orderOverview, page, handleChangePage};
}
