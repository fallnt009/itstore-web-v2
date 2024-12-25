import React from 'react';

export default function SelectCategory({
  name,
  data = [],
  title,
  value = '',
  onChange,
}) {
  return (
    <select
      className="p-2 border rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500  bg-slate-100 font-semibold cursor-pointer"
      // onChange={(e) => onChange(e.target.name, e.target.value)}
      value={value}
      name={name}
    >
      <option value="" disabled>
        Choose {title}
      </option>
      {data.length > 0 ? (
        data.map((item) => (
          <option key={item.id} value={item.slug}>
            {item.title}
          </option>
        ))
      ) : (
        <option value="" disabled>
          No Data available
        </option>
      )}
    </select>
  );
}
