import React from 'react';

export default function ParginationIndicator({
  page,
  totalPages,
  handleChange,
  windowSize = 5,
}) {
  const buttons = [];

  //   const windowSize = 5; //Number of pages to show around the current page

  let startPage = Math.max(1, page - Math.floor(windowSize / 2));
  let endPage = Math.min(totalPages, startPage + windowSize - 1);

  //adjust startPage if close to the end
  if (endPage - startPage < windowSize - 1) {
    startPage = Math.max(1, endPage - windowSize + 1);
  }

  //show first page and ellipsis
  if (startPage > 1) {
    buttons.push(
      <button
        type="button"
        className={`rounded-xl py-2 px-3 text-base ${
          page === 1 ? 'bg-indigo-600 text-white font-semibold' : ''
        } hover:bg-stone-400 hover:text-white hover:font-semibold`}
        key={1}
        onClick={() => handleChange(1)}
        aria-current={page === 1 ? 'page' : undefined}
      >
        1
      </button>
    );

    if (startPage > 2) {
      buttons.push(
        <span
          className="py-2 px-3 text-base text-stone-500"
          key="start-ellipsis"
        >
          ...
        </span>
      );
    }
  }

  //generate Middle
  for (let i = startPage; i <= endPage; i++) {
    buttons.push(
      <button
        type="button"
        className={`rounded-xl py-2 px-3 text-base ${
          page === i ? 'bg-indigo-600 text-white font-semibold' : ''
        } hover:bg-stone-400 hover:text-white hover:font-semibold`}
        key={i}
        onClick={() => handleChange(i)}
        aria-current={page === i ? 'page' : undefined}
      >
        {i}
      </button>
    );
  }

  //show last page if necessary
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      buttons.push(
        <span className="py-2 px-3 text-base text-stone-500" key="ellipsis">
          ...
        </span>
      );
    }
    //Add the last page button
    buttons.push(
      <button
        type="button"
        className={`rounded-xl py-2 px-3 text-base  ${
          page === totalPages ? 'bg-indigo-600 text-white font-semibold' : ''
        } hover:bg-stone-400 hover:text-white hover:font-semibold`}
        key={totalPages}
        onClick={() => handleChange(totalPages)}
        aria-current={page === totalPages ? 'page' : undefined}
      >
        {totalPages}
      </button>
    );
  }

  return (
    <div className="flex gap-2 rounded-lg px-4 bg-gray-100 ">{buttons}</div>
  );
}
