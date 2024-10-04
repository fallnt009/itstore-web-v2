import {MdCheckCircle} from 'react-icons/md';

export default function CheckoutSuccess() {
  return (
    <div className="container">
      <div>
        <MdCheckCircle />
      </div>
      <div>
        <h1>Order Success!</h1>
      </div>
      <div>
        <button>Go back to Home</button>
        <button>Go see your order</button>
      </div>
    </div>
  );
}
