import React from 'react';
import SelectCategory from './select/SelectCategory';

export default function CategoryCreateTagForm() {
  return (
    <div>
      <h1 className="font-semibold text-lg">Select Categories to Bound</h1>
      <div className="flex gap-5 pt-4">
        <SelectCategory title="Brand" />
        <SelectCategory title="Category" />
        <SelectCategory title="Sub Category" />

        <button
          type="button"
          className="p-2 px-4 rounded-xl bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white"
        >
          <h1 className="font-semibold">Submit</h1>
        </button>
      </div>
    </div>
  );
}
