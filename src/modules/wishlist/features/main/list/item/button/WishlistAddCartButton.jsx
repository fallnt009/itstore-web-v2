import {useState} from 'react';
import {toast} from 'react-toastify';

import ButtonSuccess from './status/ButtonSuccess';

export default function WishlistAddCartButton({id, title, onAdd}) {
  const [status, setStatus] = useState('add');

  const onClickAdd = async () => {
    setStatus('process');
    let timeoutId;
    try {
      await new Promise((resolve) => {
        timeoutId = setTimeout(resolve, 500);
      }); // Simulate delay
      await onAdd(id);
      toast.success(`"${title}" Added`);
      setStatus('success');
      timeoutId = setTimeout(() => {
        setStatus('add'); // Reset to 'add'
      }, 1000);
    } catch (err) {
      setStatus('error');
      toast.error('Error! try again later.');
      timeoutId = setTimeout(() => {
        setStatus('add'); // Reset to 'add'
      }, 1000);
    }
  };

  const renderButton = () => {
    switch (status) {
      case 'success':
        return <ButtonSuccess />;
      default:
        return (
          <button
            type="button"
            onClick={onClickAdd}
            className="py-2 px-4 border border-black hover:bg-slate-200"
          >
            Add to Cart
          </button>
        );
    }
  };
  return <div>{renderButton()}</div>;
}
