import {NumericFormat} from 'react-number-format';

import {
  MdEdit,
  MdOutlineModeEdit,
  MdOutlineAccountCircle,
  MdOutlineEmail,
} from 'react-icons/md';

import ReviewStatus from '../../../components/status/ReviewStatus';
import PaymentStatus from '../../../components/status/PaymentStatus';
import ProductCardHorizontal from '../../../components/card/ProductCardHorizontal';
import TimelineTracking from '../../../components/timeline/TimelineTracking';

export default function AdminOrderDetails() {
  return (
    <main className="container bg-white mb-5">
      <header className="flex justify-between items-center px-5 pt-5">
        <div className="flex gap-3 items-center">
          <h1 className="text-2xl font-semibold">Order No# 333112133</h1>
          <span>
            <PaymentStatus />
          </span>
          <span>
            <ReviewStatus />
          </span>
        </div>
        <div>
          <button className="flex items-center gap-1 rounded-lg p-2 px-3 bg-gray-100 text-gray-700 hover:bg-indigo-500 hover:text-white">
            <span>
              <MdOutlineModeEdit />
            </span>
            Edit
          </button>
        </div>
      </header>
      <div className="mx-5 mb-5 mt-2 text-gray-600 text-sm">
        <p>January 8,2024 at 9:48 pm</p>
      </div>
      <div className="grid grid-cols-[2fr_1fr] gap-5 mx-5">
        <section className="bg-white flex flex-col gap-5">
          <article className="border-2 rounded-xl">
            <div className="flex flex-col gap-3 px-3 pt-5">
              <h1 className="font-semibold text-lg">Order Item</h1>
              <span>
                <ReviewStatus />
              </span>
              <p className="text-gray-600 text-sm">
                Use this to personalized guide to get your store up and running.
              </p>
            </div>
            <div className="my-2 px-3">
              <div className="overflow-y-auto h-[180px]">
                <ProductCardHorizontal />
                <ProductCardHorizontal />
                <ProductCardHorizontal />
                <ProductCardHorizontal />
                <ProductCardHorizontal />
                <ProductCardHorizontal />
                <ProductCardHorizontal />
              </div>
            </div>
            <div className="flex justify-between items-center bg-gray-100 py-4 text-gray-700 px-5 text-sm">
              <p>Effortlessly manage your orders</p>
              <div className="flex gap-5 font-medium text-sm">
                <button className="border p-2 px-3 rounded-lg bg-white border-gray-700">
                  Review items
                </button>
                <button className="border p-2 px-3 rounded-lg bg-indigo-500 border-gray-700 text-white">
                  Create label
                </button>
              </div>
            </div>
          </article>
          <article className="border-2 rounded-xl">
            <div className="flex flex-col gap-3 px-3 pt-5">
              <h1 className="font-semibold text-lg">Order Summary</h1>
              <span>
                <PaymentStatus />
              </span>
              <p className="text-gray-600 text-sm">
                Use this to personalized guide to get your store up and running.
              </p>
            </div>
            <div className="my-2 px-3 text-gray-600 text-sm">
              <div className="flex flex-col gap-2 py-3 border-b">
                <div className="flex justify-between">
                  <h1>Subtotal</h1>
                  <NumericFormat
                    value="1100"
                    displayType="text"
                    thousandSeparator=","
                    prefix={'฿'}
                  />
                </div>
                <div className="flex justify-between">
                  <h1>Delivery Fee</h1>
                  <NumericFormat
                    value="35"
                    displayType="text"
                    thousandSeparator=","
                    prefix={'฿'}
                  />
                </div>
                <div className="flex justify-between">
                  <h1>Vat 7%</h1>
                  <NumericFormat
                    value="400"
                    displayType="text"
                    thousandSeparator=","
                    prefix={'฿'}
                  />
                </div>
                <div className="font-semibold text-black flex justify-between">
                  <h1>Total</h1>
                  <NumericFormat
                    value="1535"
                    displayType="text"
                    thousandSeparator=","
                    prefix={'฿'}
                  />
                </div>
              </div>
              <div className="py-3 flex justify-between">
                <h1>Paid by customer</h1>
                <NumericFormat
                  value="1535"
                  displayType="text"
                  thousandSeparator=","
                  prefix={'฿'}
                />
              </div>
            </div>
            <div className="flex justify-between items-center bg-gray-100 py-4 text-gray-700 px-5 text-sm">
              <p>Effortlessly manage your orders</p>
              <div className="flex gap-5 font-medium text-sm">
                <button className="border p-2 px-3 rounded-lg bg-white border-gray-700">
                  Send invoice
                </button>
                <button className="border p-2 px-3 rounded-lg bg-indigo-500 border-gray-700 text-white">
                  Collect Payment
                </button>
              </div>
            </div>
          </article>
          <article className="border-2 rounded-xl">
            <div className="flex flex-col gap-3 px-3 pt-5">
              <h1 className="font-semibold text-lg">Timeline</h1>
              <p className="text-gray-600 text-sm">
                Use this to personalized guide to get your store up and running.
              </p>
            </div>
            <div className="my-2 px-3 text-gray-600 text-sm">
              <div>
                <TimelineTracking />
              </div>
            </div>

            <div className="flex justify-between items-center bg-gray-100 py-4 text-gray-700 px-5 text-sm">
              <p>Effortlessly manage your orders</p>
              <div className="flex gap-5 font-medium text-sm">
                <button className="border p-2 px-3 rounded-lg bg-indigo-500 border-gray-700 text-white">
                  Verify order
                </button>
              </div>
            </div>
          </article>
        </section>
        <section className="bg-white flex flex-col gap-5">
          <article className="border-2 rounded-xl">
            <div className="flex items-center justify-between gap-3 px-3 pt-5">
              <h1 className="font-semibold text-lg">Contact Information</h1>
              <button type="button" className="text-gray-500">
                <MdEdit />
              </button>
            </div>
            <div className="mb-5 mt-3 px-3 text-gray-600 text-sm flex flex-col gap-2">
              <span className="flex items-center gap-1">
                <MdOutlineEmail />
                <p>alexRandy@gmail.com</p>
              </span>
              <p>0884567890</p>
            </div>
          </article>
          <article className="border-2 rounded-xl">
            <div className="flex items-center justify-between gap-3 px-3 pt-5">
              <h1 className="font-semibold text-lg">Shipping Address</h1>
              <button type="button" className="text-gray-500">
                <MdEdit />
              </button>
            </div>
            <div className="mb-5 mt-3 px-3 text-gray-600 text-sm flex flex-col gap-2">
              <span className="flex items-center gap-2">
                <MdOutlineAccountCircle />
                <p>Alex Randle</p>
              </span>
              <p>153 m.12 Nongkwai Hangdong</p>
              <p>Address Line 2 optional</p>
              <p>Chiang Mai 50230</p>
            </div>
          </article>
          <article className="border-2 rounded-xl">
            <div className="flex items-center justify-between gap-3 px-3 pt-5">
              <h1 className="font-semibold text-lg">Billing Address</h1>
              <button type="button" className="text-gray-500">
                <MdEdit />
              </button>
            </div>
            <div className="my-5 mt-3 px-3 text-gray-600 text-sm flex flex-col gap-2">
              {/* <span className="flex items-center gap-2">
                <MdOutlineAccountCircle />
                <p>Alex Randle</p>
              </span>
              <p>153 m.12 Nongkwai Hangdong</p>
              <p>Address Line 2 optional</p>
              <p>Chiang Mai 50230</p> */}
              <p>Same as shipping address</p>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
