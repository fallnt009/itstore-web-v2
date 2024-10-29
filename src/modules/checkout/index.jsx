import {useEffect} from 'react';
import {Outlet} from 'react-router-dom';

import useDrawer from '../shared/hooks/useDrawer';
import useCart from '../shared/hooks/useCart';
import useAddress from '../shared/hooks/useAddress';
import useCheckout from '../shared/hooks/useCheckout';
import useAuth from '../shared/hooks/useAuth';
import useError from '../shared/hooks/useError';

import CheckoutBreadCrumb from './features/breadcrumb/CheckoutBreadCrumb';
import CheckoutSummary from './features/summary/CheckoutSummary';
import SideDrawer from '../shared/components/ui/SideDrawer';
import ErrorPage from '../shared/features/error/ErrorPage';

export default function CheckoutContainer() {
  const {closeDrawer, isOpen, drawerContent} = useDrawer();
  const {userCart, fetchCart} = useCart();
  const {defaultAddress, fetchMyAddress} = useAddress();
  const {checkout, fetchCheckout} = useCheckout();
  const {authenUser} = useAuth();
  const {error, errorStatus, setIsError} = useError();

  useEffect(() => {
    const loadCheckout = async () => {
      try {
        if (authenUser) {
          await fetchCart();
          await fetchMyAddress();
          await fetchCheckout();
        }
      } catch (err) {
        setIsError(err);
      }
    };
    loadCheckout();
  }, [authenUser, fetchCheckout, fetchMyAddress, fetchCart]);

  if (error) {
    return <ErrorPage statusCode={errorStatus} />;
  }

  return (
    <div className="container ">
      <div className=" grid my-10 p-16">
        <div className="flex justify-center p-5 ">
          <CheckoutBreadCrumb />
        </div>
        <div className="grid md:grid-cols-[2fr_1fr] p-5">
          <Outlet />
          <CheckoutSummary
            checkout={checkout}
            userCart={userCart}
            defaultAddress={defaultAddress}
          />
        </div>
        <SideDrawer isOpen={isOpen} onClose={closeDrawer}>
          {drawerContent}
        </SideDrawer>
      </div>
    </div>
  );
}
