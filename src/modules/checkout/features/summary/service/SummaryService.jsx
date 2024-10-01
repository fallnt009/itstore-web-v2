import React from 'react';

export default function SummaryService({checkoutService}) {
  if (!checkoutService) {
    return <></>;
  }
  const {name, description} = checkoutService;

  return (
    <>
      <div className="flex items-center gap-1 text-stone-600">
        <h1>{name}</h1>
        <p>({description})</p>
      </div>
    </>
  );
}
