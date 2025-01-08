import {MdAdd, MdKeyboardArrowLeft} from 'react-icons/md';

import useAddressContent from '../../../hooks/useAddressContent';

import AddressLists from './list/AddressLists';
import AddressCreateForm from './forms/AddressCreateForm';

import Button from '../../../components/Button';

export default function AddressContainer({
  openDrawerWithContent,
  onClose,
  addressType,
}) {
  const {
    address,
    selectedId,
    isDefaultAddress,
    handleSelectedId,
    handleAddAddress,
  } = useAddressContent(addressType, onClose);

  return (
    <div className="flex flex-col mx-5">
      <header className="grid grid-cols-[30px_1fr] my-5 font-semibold text-lg">
        <button
          type="button"
          className="items-center hover:text-indigo-600"
          onClick={onClose}
        >
          <MdKeyboardArrowLeft size={30} />
        </button>
        <h1 className="flex items-center justify-center">Your Saved Address</h1>
      </header>
      <div className="flex flex-col mx-5">
        <Button
          className="flex justify-center items-center gap-5 font-semibold  rounded-xl border py-3 border-gray-500 hover:bg-black hover:text-white "
          onClick={() =>
            openDrawerWithContent(<AddressCreateForm onClose={onClose} />)
          }
        >
          <span>
            <MdAdd size={25} />
          </span>
          Add new address
        </Button>
        <div className="py-8">
          {address && address.length > 0 ? (
            <AddressLists
              address={address}
              isDefault={isDefaultAddress()}
              setSelectedId={handleSelectedId}
              selectedId={selectedId}
            />
          ) : (
            <div className="flex justify-center text-stone-600">
              Your saved address is empty. Please add new address
            </div>
          )}
        </div>

        {selectedId && !isDefaultAddress() ? (
          <Button
            type="submit"
            className="flex justify-center rounded-full border border-indigo-700 py-4 px-5 text-white bg-indigo-700 font-semibold hover:bg-white hover:text-indigo-700"
            onClick={() => handleAddAddress(addressType, selectedId)}
          >
            Use this address as default
          </Button>
        ) : (
          <div className="flex justify-center rounded-full border-2 py-4 px-5  bg-stone-300 text-stone-500 ">
            Use this address as default
          </div>
        )}
      </div>
    </div>
  );
}
