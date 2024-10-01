import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {MdSubject, MdOutlineLocalShipping, MdPayment} from 'react-icons/md';

import {
  CHECKOUT_DETAIL,
  CHECKOUT_SERVICES,
  CHECKOUT_PAYMENT,
} from '../../../shared/services/config/routing';

import CheckoutBreadCrumbItem from './CheckoutBreadCrumbItem';

export default function CheckoutBreadCrumb() {
  const location = useLocation();

  const [visited, setVisted] = useState({
    [CHECKOUT_DETAIL]: false,
    [CHECKOUT_SERVICES]: false,
    [CHECKOUT_PAYMENT]: false,
  });
  useEffect(() => {
    setVisted((prev) => ({
      ...prev,
      [location.pathname]: true,
    }));
  }, [location.pathname]);

  const lists = [
    {
      id: 1,
      icon: <MdSubject size={25} />,
      title: 'Your Details',
      targetPath: CHECKOUT_DETAIL,
      isVisited: visited[CHECKOUT_DETAIL],
    },
    {
      id: 2,
      icon: <MdOutlineLocalShipping size={25} />,
      title: 'Services',
      targetPath: CHECKOUT_SERVICES,
      isVisited: visited[CHECKOUT_SERVICES],
    },
    {
      id: 3,
      icon: <MdPayment size={25} />,
      title: 'Payment',
      targetPath: CHECKOUT_PAYMENT,
      isVisited: visited[CHECKOUT_PAYMENT],
    },
  ];
  return (
    <div>
      <ul className="flex gap-10">
        {lists.map((item) => (
          <CheckoutBreadCrumbItem
            key={item.id}
            icon={item.icon}
            title={item.title}
            targetPath={item.targetPath}
            isVisited={item.isVisited}
          />
        ))}
      </ul>
    </div>
  );
}
