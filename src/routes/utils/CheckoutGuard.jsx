import {Navigate} from 'react-router-dom';

import {MY_CART} from '../routes';

import useCheckout from '../../modules/shared/hooks/useCheckout';

export default function CheckoutGuard({children}) {
  //testing in progress
  const {isProcessCompleted} = useCheckout();

  //   if (!isProcessCompleted) {
  //     return <Navigate to={MY_CART} />;
  //   }
  return children;
}
