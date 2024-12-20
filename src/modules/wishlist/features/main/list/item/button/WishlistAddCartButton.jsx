import {useState} from 'react';
import {toast} from 'react-toastify';

import ButtonSuccess from './status/ButtonSuccess';

import {
  ADD_TOCART,
  UNEXPECTED_ERROR,
} from '../../../../../../shared/services/config/toast';

export default function WishlistAddCartButton({id, title, onAdd}) {
  const [status, setStatus] = useState('add');

  const onClickAdd = async () => {
    setStatus('process');

    let delayedTimeout;
    let resetTimeout;
    try {
      await new Promise((resolve) => {
        delayedTimeout = setTimeout(resolve, 500);
      }); // Simulate delay
      await onAdd(id);
      toast.success(ADD_TOCART(title));
      setStatus('success');
      resetTimeout = setTimeout(() => {
        setStatus('add'); // Reset to 'add'
      }, 1000);
    } catch (err) {
      setStatus('error');
      toast.error(UNEXPECTED_ERROR);
      resetTimeout = setTimeout(() => {
        setStatus('add'); // Reset to 'add'
      }, 1000);
    } finally {
      clearTimeout(delayedTimeout);
    }

    return () => {
      clearTimeout(resetTimeout);
    };
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
