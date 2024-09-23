import {useState} from 'react';

import ButtonError from './status/ButtonError';
import ButtonProcess from './status/ButtonProcess';
import ButtonSuccess from './status/ButtonSuccess';

export default function ProductCardButton() {
  const [status, setStatus] = useState('add');

  const onClickAdd = async () => {
    setStatus('process');
    let timeoutId;
    try {
      await new Promise((resolve) => {
        timeoutId = setTimeout(resolve, 2000);
      }); // Simulate delay

      setStatus('success');
      timeoutId = setTimeout(() => {
        setStatus('add'); // Reset to 'add'
      }, 1000);
    } catch (err) {
      setStatus('error');

      timeoutId = setTimeout(() => {
        setStatus('add'); // Reset to 'add'
      }, 1000);
    }
  };

  const renderButton = () => {
    switch (status) {
      case 'process':
        return <ButtonProcess />;
      case 'success':
        return <ButtonSuccess />;
      case 'error':
        return <ButtonError />;
      default:
        return (
          <button
            type="button"
            onClick={onClickAdd}
            className="flex gap-2 rounded-lg p-2 border border-indigo-600 bg-indigo-600 text-white font-semibold hover:text-indigo-600 hover:bg-white"
          >
            <h1>Add to Cart</h1>
          </button>
        );
    }
  };

  return <div>{renderButton()}</div>;
}