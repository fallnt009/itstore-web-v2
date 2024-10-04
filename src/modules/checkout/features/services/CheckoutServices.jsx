import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import useCheckout from '../../../shared/hooks/useCheckout';
import useLoading from '../../../shared/hooks/useLoading';

//active bttn
import ActiveButton from '../../components/ActiveButton';
//checkserv item
import CheckoutServiceItem from './CheckoutServiceItem';

import {
  CHECKOUT_DETAIL,
  CHECKOUT_PAYMENT,
} from '../../../shared/services/config/routing';

export default function CheckoutServices() {
  const {checkout, updateCheckout} = useCheckout();
  const {startLoading, stopLoading} = useLoading();

  const {item, service} = checkout;
  const {Service} = item;

  const [selectService, setSelectService] = useState(null);

  useEffect(() => {
    if (Service) {
      setSelectService(Service);
    }
  }, [Service]);

  const handleOnClickService = (item) => {
    setSelectService(item);
  };

  const handleSubmitService = async () => {
    startLoading();
    try {
      const data = {serviceId: selectService.id};
      await updateCheckout(item.id, data);
    } catch (err) {
      //err
      console.log(err);
    } finally {
      stopLoading();
    }
  };

  return (
    <div className="container grid ">
      <div className="mx-24">
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold text-3xl">
            How would you like to receive your order?
          </h1>
          <p>Parcel Service info</p>
        </div>
        <div>
          {service?.map((serv) => (
            <CheckoutServiceItem
              checkout={item}
              service={serv}
              select={selectService}
              onClick={handleOnClickService}
              key={serv.id}
            />
          ))}

          <div className=" border-t-2 mt-9 font-semibold ">
            <div className="flex flex-col justify-center gap-3 mt-5">
              <ActiveButton
                to={CHECKOUT_PAYMENT}
                select={selectService}
                activeTitle="Proceed to payment"
                inActiveTitle="Proceed to payment"
                onClick={handleSubmitService}
              />

              <Link
                to={CHECKOUT_DETAIL}
                className="flex justify-center py-4 px-5 border-black "
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
