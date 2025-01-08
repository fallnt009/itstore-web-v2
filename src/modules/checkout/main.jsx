import {MdAdd, MdEdit, MdOutlineEmail} from 'react-icons/md';

import useCheckoutDetail from './hooks/useCheckoutDetail';
import useCheckoutDrawer from './hooks/useCheckoutDrawer';

import CheckoutSummaryContent from './features/summary/CheckoutSummaryContent';
import CheckoutAddressContent from './features/address/CheckoutAddressContent';

import ProductCardHorizontal from '../shared/components/product-card/ProductCardHorizontal';
import InputRadioBox from './components/input/InputRadioBox';
import SideDrawer from '../shared/components/ui/SideDrawer';
import ErrorPage from '../shared/features/error/ErrorPage';

export default function CheckoutMain() {
  const {
    // checkoutInfo,
    cartItemList,
    paymentList,
    serviceList,
    email,
    selectedService,
    selectedPayment,
    shippingAddress,
    billingAddress,
    error,
    errorStatus,
    handleSelectService,
    handleSelectPayment,
    getTotalAmount,
  } = useCheckoutDetail();

  const {
    isOpen,
    closeDrawer,
    drawerContent,
    handleChooseAddress,
    handleEditClick,
  } = useCheckoutDrawer();

  //TODO
  //handle Edit Address
  //Clear old checkout page
  //handle Submit Checkout to payment
  //handle go back in drawer

  if (error) {
    return <ErrorPage statusCode={errorStatus} />;
  }

  return (
    <main className="container mx-auto bg-white mb-5 pb-10 border">
      <header className="flex justify-between items-center px-5 pt-5">
        <div className="flex gap-3 items-center">
          <h1 className="text-2xl font-semibold">
            Please Inform Your Information
          </h1>
        </div>
        {/* <div>
          <button className="flex items-center gap-1 rounded-lg p-2 px-3 bg-gray-100 text-gray-700 hover:bg-indigo-500 hover:text-white">
            <span>
              <MdOutlineModeEdit />
            </span>
            Edit
          </button>
        </div> */}
      </header>
      <div className="mx-5 mb-5 mt-2 text-gray-600 text-sm">
        <p>This Information will be use in the next process</p>
      </div>
      <div className="grid lg:grid-cols-[2fr_1fr] gap-5 mx-5">
        <section className="bg-white flex flex-col gap-5">
          <article className="border-2 rounded-xl">
            <div className="flex flex-col gap-3 px-3 pt-5">
              <h1 className="font-semibold text-lg">Order Overview</h1>

              <p className="text-gray-600 text-sm">All items that your order</p>
            </div>
            <div className="my-2 px-3">
              <div className="overflow-y-auto h-[267px]">
                {cartItemList?.map((item) => (
                  <ProductCardHorizontal key={item.id} item={item} />
                ))}
              </div>
            </div>
          </article>
          <section className="grid lg:grid-cols-2 gap-5">
            <article className="border-2 rounded-xl">
              <div className="flex flex-col gap-3 px-3 pt-5">
                <h1 className="font-semibold text-lg">Delivery Method</h1>
                <p className="text-gray-600 text-sm">
                  Select your choice to deliver
                </p>
              </div>
              {/* Delivery Method */}
              <div className="flex flex-col gap-5 my-5 px-3 text-gray-600 text-sm">
                {serviceList?.map((item) => (
                  <InputRadioBox
                    key={item.id}
                    item={item}
                    selected={selectedService}
                    onChange={handleSelectService}
                  />
                ))}
              </div>
            </article>
            <article className="border-2 rounded-xl">
              <div className="flex flex-col gap-3 px-3 pt-5">
                <h1 className="font-semibold text-lg">Payment Information</h1>
                <p className="text-gray-600 text-sm">
                  Select your payment method
                </p>
              </div>
              {/* Payment Method */}
              <div className="my-2 px-3 text-gray-600 text-sm">
                <div className="flex flex-col gap-5 my-5 px-3 text-gray-600 text-sm">
                  {paymentList?.map((item) => (
                    <InputRadioBox
                      key={item.id}
                      item={item}
                      selected={selectedPayment}
                      onChange={handleSelectPayment}
                    />
                  ))}
                </div>
              </div>
            </article>
          </section>
          {/* order summary */}
          <article className="border-2 rounded-xl">
            <div className="flex flex-col gap-3 px-3 pt-5">
              <h1 className="font-semibold text-lg">Order Summary</h1>

              <p className="text-gray-600 text-sm">
                Use this to personalized guide to get your store up and running.
              </p>
            </div>
            <div className="my-2 px-3 text-gray-600 text-sm">
              <CheckoutSummaryContent
                cartItemList={cartItemList}
                service={selectedService}
                getTotalAmount={getTotalAmount}
              />
              <div className="py-3 flex justify-between"></div>
            </div>
            <div className="flex justify-between items-center bg-gray-100 py-4 text-gray-700 px-5 text-sm">
              <p>Click Submit to finish your order</p>
              <div className="flex gap-5 font-medium text-sm">
                <button className="border p-2 px-3 rounded-lg bg-white border-gray-700">
                  Cancel
                </button>
                <button className="border p-2 px-3 rounded-lg bg-indigo-500 border-gray-700 text-white">
                  Submit
                </button>
              </div>
            </div>
          </article>
        </section>
        <section className="bg-white flex flex-col gap-5">
          <article className="border-2 rounded-xl">
            <div className="flex items-center justify-between gap-3 px-3 pt-5">
              <h1 className="font-semibold text-lg">Contact Information</h1>
            </div>
            {/* email by account */}
            <div className="mb-5 mt-3 px-3 text-gray-600 text-sm flex flex-col gap-2">
              <span className="flex items-center gap-1">
                <MdOutlineEmail />
                <p>{email || 'N/A'}</p>
              </span>
            </div>
          </article>
          <article className="border-2 rounded-xl">
            <div className="flex items-center justify-between gap-3 px-3 pt-5">
              <h1 className="font-semibold text-lg">Shipping Address</h1>
              <span className="flex items-center">
                {shippingAddress && (
                  <button
                    type="button"
                    className="text-gray-500 p-2 rounded-full hover:bg-indigo-100 hover:text-indigo-600"
                  >
                    <MdEdit />
                  </button>
                )}
                <button
                  type="button"
                  className="text-gray-500 p-2 rounded-full hover:bg-indigo-100 hover:text-indigo-600"
                  onClick={() => handleChooseAddress('shipping')}
                >
                  <MdAdd size={20} />
                </button>
              </span>
            </div>
            {/* selectedAddress shipping */}
            <CheckoutAddressContent defaultAddress={shippingAddress} />
          </article>
          <article className="border-2 rounded-xl">
            <div className="flex items-center justify-between gap-3 px-3 pt-5">
              <h1 className="font-semibold text-lg">Billing Address</h1>
              <span className="flex items-center">
                {billingAddress && (
                  <button
                    type="button"
                    className="text-gray-500 p-2 rounded-full hover:bg-indigo-100 hover:text-indigo-600"
                  >
                    <MdEdit />
                  </button>
                )}
                <button
                  type="button"
                  className="text-gray-500 p-2 rounded-full hover:bg-indigo-100 hover:text-indigo-600"
                  onClick={() => handleChooseAddress('billing')}
                >
                  <MdAdd size={20} />
                </button>
              </span>
            </div>

            <CheckoutAddressContent
              defaultAddress={billingAddress}
              isSame={shippingAddress?.id === billingAddress?.id}
            />
          </article>
        </section>
      </div>
      <SideDrawer isOpen={isOpen} onClose={closeDrawer}>
        {drawerContent}
      </SideDrawer>
    </main>
  );
}
