import {Link} from 'react-router-dom';

export default function Footer() {
  return (
    <div className="bg-indigo-700 max-w-full p-10 text-white text-sm">
      <div className="grid md:grid-cols-4 p-4">
        <Link to={'/'}>
          <div className="flex-2 font-mono font-extrabold text-5xl font-jetmono text-white">
            ITStores
          </div>
        </Link>
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold">Need Help?</h1>
          <div className="hover:underline cursor-pointer">Contact Us</div>
          <div className="hover:underline cursor-pointer">About Us</div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="hover:underline cursor-pointer">How to Order</div>
          <div className="hover:underline cursor-pointer">
            How to Confirm Payment
          </div>
          <div className="hover:underline cursor-pointer">Parcel Services</div>
          <div className="hover:underline cursor-pointer">Track your Order</div>
        </div>
        <div className="flex flex-col gap-1">
          <h1>Partner</h1>
        </div>
      </div>
      <div className="flex  justify-end pt-4">
        © Copyright 2024 ItStore Public Company Limited All Rights Reserved.
      </div>
    </div>
  );
}
