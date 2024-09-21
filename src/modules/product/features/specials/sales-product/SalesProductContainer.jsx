import {useState} from 'react';

export default function SalesProductContainer() {
  //states
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState([]);

  return <div>SalesProductContainer</div>;
}
