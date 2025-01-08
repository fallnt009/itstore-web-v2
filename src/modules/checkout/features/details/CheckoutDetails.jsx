//@ delete

import {useState, useEffect, useCallback} from 'react';
import {Link} from 'react-router-dom';

import useAuth from '../../../shared/hooks/useAuth';
import useDrawer from '../../../shared/hooks/useDrawer';
import useAddress from '../../../shared/hooks/useAddress';
// import useCheckout from '../../../shared/hooks/useCheckout';

import AddressContainer from './address/AddressContainer';
import AddressUpdateForm from './address/forms/AddressUpdateForm';
import AddressBox from './address/box/AddressBox';

import Button from '../../components/Button';
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

  //checkdefault
  //use Shipping as

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
            <h4 className="font-semibold text-lg">Shipping Address</h4>
            {defaultAddress ? (
              <Button
                className="font-semibold  rounded-full border border-gray-500 p-2 px-5 hover:bg-black hover:text-white max-w-24 max-h-10"
                onClick={handleEditClick}
              >
                Edit
              </Button>
            ) : (
              <Button className="font-semibold  rounded-full border border-stone-600 text-stone-500  p-2 px-5 max-w-24 max-h-10 cursor-default">
                Edit
              </Button>
            )}
          </div>
          <div className="flex flex-col gap-2 py-3">
            <AddressBox defaultAddress={defaultAddress} />
            <div>
              <Button
                className="flex justify-center items-center font-semibold p-2 px-5 rounded-full border border-gray-500 hover:bg-black hover:text-white max-h-12 "
                onClick={handleChooseAddress}
              >
                Choose another address
              </Button>
            </div>
            <span className="text-gray-700">
              use the same on billing address
            </span>
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
                className=" flex justify-center py-4 px-5 border-black hover:text-indigo-700"
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
