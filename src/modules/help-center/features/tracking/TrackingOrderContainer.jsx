import {useState, useCallback} from 'react';
import {Link} from 'react-router-dom';
import {MdKeyboardArrowRight} from 'react-icons/md';

import useOrder from '../../../shared/hooks/useOrder';
import useLoading from '../../../shared/hooks/useLoading';

import Input from '../../../shared/components/ui/Input';

import TrackingNotFound from './notfound/TrackingNotFound';
import TrackingOrderContent from './content/TrackingOrderContent';
import TrackingOrderLoading from './loading/TrackingOrderLoading';

import {HOME, HELP_CENTER} from '../../../shared/services/config/routing';

export default function TrackingOrderContainer() {
  const {order, fetchOrderByNumber} = useOrder();
  const {loading, startLoading, stopLoading} = useLoading();

  const [input, setInput] = useState({orderNumber: ''});
  const [submitted, setSubmitted] = useState(false);
  const [submitErr, setSubmitError] = useState(false);
  //tracking order
  const handleChangeInput = useCallback(
    (e) => {
      setInput({...input, [e.target.name]: e.target.value});
    },
    [input]
  );

  const handleSubmitOrderNumber = async (e) => {
    e.preventDefault();
    startLoading();
    setSubmitted(false);
    setSubmitError(false);
    try {
      await fetchOrderByNumber(input.orderNumber);
      setSubmitted(true);
      setSubmitError(false);
    } catch (err) {
      setSubmitted(true);
      setSubmitError(true);
    } finally {
      stopLoading();
    }
  };

  const renderOrderContent = () => {
    if (submitted) {
      if (loading) {
        return <TrackingOrderLoading />; // Show loading component while fetching order
      }
      if (submitErr) {
        //Error Page
        //Need to reslove
        return <TrackingNotFound />;
      }

      if (Object.keys(order.detail).length > 0 && order.product.length > 0) {
        return <TrackingOrderContent order={order} />;
      }
    }
    return null;
  };

  return (
    <div className="py-10">
      <div className="flex gap-2 items-center py-5 text-lg border-b px-10">
        <Link
          to={HOME}
          className="flex items-center gap-2 cursor-pointer hover:text-indigo-700"
        >
          <h1 className="font-semibold">Home</h1>
        </Link>
        <span>
          <MdKeyboardArrowRight />
        </span>
        <Link
          to={HELP_CENTER}
          className="flex items-center gap-2 cursor-pointer hover:text-indigo-700"
        >
          <h1 className="font-semibold">Help Center</h1>
        </Link>
        <span>
          <MdKeyboardArrowRight />
        </span>
        <div className="flex items-center gap-2 cursor-pointer hover:text-indigo-700">
          <h1>Tracking Order</h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-24  bg-gradient-to-b from-indigo-500">
        <h1 className="text-white font-semibold text-4xl">
          Tracking your order
        </h1>
        <div className="flex flex-col py-5 w-72">
          <Input
            name="orderNumber"
            placeholder="order number"
            type="text"
            onChange={handleChangeInput}
            value={input.orderNumber}
          />
          <div className="flex justify-center py-4">
            <button
              type="button"
              className="px-6 py-2 rounded-lg border border-indigo-700 bg-indigo-700 text-white hover:bg-white hover:text-indigo-700 font-semibold"
              onClick={handleSubmitOrderNumber}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="px-24 py-10">{renderOrderContent()}</div>
    </div>
  );
}
