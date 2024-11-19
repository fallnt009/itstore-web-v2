import {useState} from 'react';
import {toast} from 'react-toastify';

import ButtonError from './status/ButtonError';
// import ButtonProcess from './status/ButtonProcess';
import ButtonSuccess from './status/ButtonSuccess';

import {
  UNEXPECTED_ERROR,
  ADD_TOCART,
} from '../../../../../../shared/services/config/toast';

export default function ProductCardButton({id, title, onAdd}) {
  const [status, setStatus] = useState('add');

  const onClickAdd = async () => {
    try {
      await onAdd(id);
      toast.success(ADD_TOCART(title));
      setStatus('success');
      setTimeout(() => {
        setStatus('add'); // Reset to 'add' after 1 second
      }, 1000);
    } catch (err) {
      setStatus('error');
      toast.error(UNEXPECTED_ERROR);
      setTimeout(() => {
        setStatus('add'); // Reset to 'add' after 1 second
      }, 1000);
    }
  };

  const renderButton = () => {
    switch (status) {
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
