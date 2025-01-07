import {MdKeyboardArrowLeft} from 'react-icons/md';

import useAddressForm from '../../../../hooks/useAddressForm';

import Input from '../../../../../shared/components/ui/Input';

export default function AddressCreateForm({onClose}) {
  const {formValues, formErrors, handleChangeInput, handleSubmitForm} =
    useAddressForm({onClose});

  return (
    <form className="container mx-auto" onSubmit={handleSubmitForm}>
      <div className="grid grid-rows-[80px_50px_auto_80px] mx-8">
        <header className="grid grid-cols-[30px_1fr] my-5 font-semibold text-lg  ">
          <button type="button" className="text-gray-500 hover:text-indigo-600">
            <MdKeyboardArrowLeft size={30} />
          </button>
          <h1 className="flex items-center justify-center">Add new address</h1>
        </header>
        <div className="px-5">
          <p className="text-sm font-normal text-stone-600">
            All information will be saved to your account, for easy access the
            next time you need it.
          </p>
        </div>
        <div className="flex flex-col gap-5 px-5 my-5 overflow-auto">
          <div className="flex flex-col">
            <h4 className="text-stone-600">Full Name</h4>
            <Input
              type="text"
              name="fullName"
              onChange={handleChangeInput}
              value={formValues.fullName}
              error={formErrors.fullName}
            />
          </div>
          <div className="flex flex-col">
            <h4 className="text-stone-600">Phone Number</h4>
            <Input
              type="text"
              name="phoneNumber"
              onChange={handleChangeInput}
              value={formValues.phoneNumber}
              error={formErrors.phoneNumber}
            />
          </div>
          <div className="flex flex-col">
            <h4 className="text-stone-600">Address Line 1</h4>
            <Input
              type="text"
              name="addressLine1"
              onChange={handleChangeInput}
              value={formValues.addressLine1}
              error={formErrors.addressLine1}
            />
          </div>
          <div className="flex flex-col">
            <h4 className="text-stone-600">Address Line 2</h4>
            <Input
              type="text"
              name="addressLine2"
              onChange={handleChangeInput}
              value={formValues.addressLine2}
              error={formErrors.addressLine2}
            />
          </div>
          <div className="flex flex-col">
            <h4 className="text-stone-600">Postal Code</h4>
            <Input
              type="text"
              name="postalCode"
              onChange={handleChangeInput}
              value={formValues.postalCode}
              error={formErrors.postalCode}
              maxLength={5}
            />
          </div>
          <div className="flex flex-col">
            <h4 className="text-stone-600">Province</h4>
            <Input
              type="text"
              name="province"
              onChange={handleChangeInput}
              value={formValues.province}
              error={formErrors.province}
            />
          </div>
        </div>
        <div className="flex justify-center border-t pt-5">
          <button
            type="submit"
            className="rounded-xl border-2 py-4 px-5 text-white bg-indigo-700 font-semibold"
          >
            Save and use this address
          </button>
        </div>
      </div>
    </form>
  );
}
