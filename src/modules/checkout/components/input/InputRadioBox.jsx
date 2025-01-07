import {NumericFormat} from 'react-number-format';

export default function InputRadioBox({item = {}, selected = {}, onChange}) {
  const {id, name, description, price} = item;

  return (
    <div
      className={`grid grid-cols-[35px_1fr] gap-1 border-2 p-3 rounded-lg  shadow ${
        selected?.id === id
          ? 'border-indigo-500 bg-indigo-300 bg-opacity-10'
          : 'border-gray-300'
      }`}
    >
      <input
        id={`radio-${id}`}
        className={`w-[20px] cursor-pointer ${
          selected?.id === id ? 'border-indigo-600' : 'border-gray-300'
        }`}
        value={JSON.stringify(item)}
        type="radio"
        checked={selected?.id === id}
        onChange={onChange}
      />
      <div>
        <span className="flex font-semibold justify-between text-black">
          <h1>{name || 'N/A'}</h1>
          <NumericFormat
            value={price || ''}
            displayType="text"
            thousandSeparator=","
            prefix={'฿'}
          />
        </span>
        <p>{description || ''}</p>
      </div>
    </div>
  );
}
