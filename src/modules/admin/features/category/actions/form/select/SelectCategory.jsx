import React from 'react';

export default function SelectCategory({
  name,
  data = [],
  title,
  value,
  error,
  onChange,
}) {
  return (
    <div>
      <select
        className={`p-2 border rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500  bg-slate-100 font-semibold cursor-pointer ${
          error ? 'border-red-500' : ''
        }`}
        onChange={onChange}
        value={value || ''}
        name={name}
      >
        <option value="" disabled>
          Choose {title}
        </option>
        {data.length > 0 ? (
          data.map((item) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))
        ) : (
          <option value="" disabled>
            No Data available
          </option>
        )}
      </select>
      {error && <p className="text-red-500 text-xs pt-1 p">* {error}</p>}
    </div>
  );
}
