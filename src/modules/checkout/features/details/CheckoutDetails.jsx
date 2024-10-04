import {useState, useEffect, useCallback} from 'react';
import {Link} from 'react-router-dom';

import useAuth from '../../../shared/hooks/useAuth';
import useDrawer from '../../../shared/hooks/useDrawer';
import useAddress from '../../../shared/hooks/useAddress';
// import useCheckout from '../../../shared/hooks/useCheckout';

import AddressContainer from './address/AddressContainer';
import AddressUpdateForm from './address/forms/AddressUpdateForm';
import AddressBox from './address/box/AddressBox';
import ActiveButton from '../../components/ActiveButton';

import {HOME, CHECKOUT_SERVICES} from '../../../shared/services/config/routing';

export default function CheckoutDetails() {
  const {openDrawerWithContent, closeDrawer} = useDrawer();
  const {authenUser} = useAuth();
  const {defaultAddress, updateAddress} = useAddress();
  //states
  const [selectedAddress, setSelectedAddress] = useState(null);

  //if already have default
  useEffect(() => {
    if (defaultAddress) {
      setSelectedAddress(defaultAddress);
    }
  }, [defaultAddress]);

  const handleEditClick = useCallback(() => {
    openDrawerWithContent(
      <AddressUpdateForm
        defaultAddress={defaultAddress}
        onClose={closeDrawer}
        updateAddress={updateAddress}
      />
    );
  }, [defaultAddress, openDrawerWithContent, closeDrawer, updateAddress]);

  const handleChooseAddress = useCallback(() => {
    openDrawerWithContent(
      <AddressContainer
        openDrawerWithContent={openDrawerWithContent}
        onClose={closeDrawer}
      />
    );
  }, [openDrawerWithContent, closeDrawer]);

  return (
    <div className="container grid ">
      <div className="mx-24">
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold text-3xl">
            Please Inform Your Information
          </h1>
          <p>This Information will be use in the next process</p>
        </div>
        <div>
          <div className="flex justify-between items-center mt-5">
            <h4 className="font-semibold text-lg">Delivery Address</h4>
            {defaultAddress ? (
              <button
                className="font-semibold  rounded-full border border-black p-2 px-5 hover:border-2 max-w-24 max-h-10"
                onClick={handleEditClick}
              >
                Edit
              </button>
            ) : (
              <button className="font-semibold  rounded-full border border-stone-600 text-stone-500  p-2 px-5 max-w-24 max-h-10 cursor-default">
                Edit
              </button>
            )}
          </div>
          <div className="flex flex-col gap-2 py-3">
            <AddressBox defaultAddress={defaultAddress} />
            <div>
              <button
                className="flex justify-center items-center font-semibold p-3 rounded-full border border-black hover:border-2 max-h-12 "
                onClick={handleChooseAddress}
              >
                Choose another address
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <h4 className="font-semibold text-lg">Confirmation Email</h4>
            <p className="text-stone-600">{authenUser.email}</p>
            <p className="text-stone-600 text-xs ">
              Need to change? Please contact support.
            </p>
          </div>
          <div className=" border-t-2 mt-9 font-semibold ">
            <div className="flex flex-col  justify-center gap-3 mt-5">
              <ActiveButton
                select={selectedAddress}
                to={CHECKOUT_SERVICES}
                activeTitle="Proceed to next"
                inActiveTitle="Proceed to next"
              />
              <Link
                to={HOME}
                className=" flex justify-center py-4 px-5 border-black "
              >
                Back to Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
