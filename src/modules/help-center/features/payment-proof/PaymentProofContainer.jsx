import {Link} from 'react-router-dom';
import {MdKeyboardArrowRight} from 'react-icons/md';

import {HOME, HELP_CENTER} from '../../../shared/services/config/routing';

import PaymentProofContent from './content/PaymentProofContent';

export default function PaymentProofContainer() {
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
          <h1>Payment Proof</h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-40  bg-gradient-to-b from-orange-500">
        <h1 className="text-white font-semibold text-4xl">Payment Proof</h1>
      </div>
      <div className="px-24 py-10">
        <PaymentProofContent />
      </div>
    </div>
  );
}
