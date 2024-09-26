import {useCallback, useEffect, useState} from 'react';
import {MdOutlineRemoveCircle, MdOutlineAddCircle} from 'react-icons/md';

export default function QuantityBox({initialQty, onChange, limit}) {
  const [count, setCount] = useState(initialQty || 1);

  useEffect(() => {
    setCount(initialQty || 1);
  }, [initialQty]);

  const increaseCount = useCallback(() => {
    if (count < limit) {
      const newCount = count + 1;
      setCount(newCount);
      onChange(newCount);
    }
  }, [count, limit, onChange]);
  const decreaseCount = useCallback(() => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      onChange(newCount);
    }
  }, [count, onChange]);

  return (
    <div className="flex gap-5">
      <div className="flex items-center gap-2 text-cerulean-blue-800">
        <span className="cursor-pointer" onClick={decreaseCount}>
          <MdOutlineRemoveCircle size={35} />
        </span>
        <span>{count}</span>
        <span className="cursor-pointer" onClick={increaseCount}>
          <MdOutlineAddCircle size={35} />
        </span>
      </div>
    </div>
  );
}
