import {useParams} from 'react-router-dom';
import {MdCheckCircle} from 'react-icons/md';

export default function OrderSuccess() {
  const {orderNumber} = useParams();

  return (
    <div className="px-10 py-40">
      <div className="flex flex-col justify-center items-center">
        <div className="text-green-500">
          <MdCheckCircle size={65} />
        </div>
        <div className="pt-8">
          <h1 className="flex justify-center font-semibold text-2xl">
            Thank you for your purchase
          </h1>
          <p className="text-gray-500">
            We've already received your order will proceed shortly.
          </p>
        </div>
        <div className="py-4 text-gray-500">
          <h1>Your order number is {orderNumber}</h1>
        </div>
        <div className="flex gap-3 pt-5">
          <button
            type="button"
            className="p-2 px-4 border rounded-lg hover:border-indigo-700 hover:text-white hover:bg-indigo-700"
          >
            Go back to Home
          </button>
          <button className="p-2 px-4 border rounded-lg hover:border-indigo-700 hover:text-white hover:bg-indigo-700">
            See your order
          </button>
        </div>
      </div>
    </div>
  );
}
