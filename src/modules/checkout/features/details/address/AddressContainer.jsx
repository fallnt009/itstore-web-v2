import {useState, useEffect} from 'react';
import {toast} from 'react-toastify';

import useAddress from '../../../../shared/hooks/useAddress';
import useLoading from '../../../../shared/hooks/useLoading';
import useCheckout from '../../../../shared/hooks/useCheckout';

import AddressLists from './list/AddressLists';
import AddressCreateForm from './forms/AddressCreateForm';

export default function AddressContainer({openDrawerWithContent, onClose}) {
  //useAddress
  const {address, addAddress, defaultAddress, setDefaultAddress} = useAddress();
  //useCheckout
  const {checkout, updateCheckout} = useCheckout();
  //loading
  const {startLoading, stopLoading} = useLoading();

  const {item} = checkout;

  //states
  //addr Id
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    //if address not default
    if (defaultAddress) {
      setSelectedId(defaultAddress.id);
    } else {
      setSelectedId();
    }
  }, [defaultAddress]);

  const handleAddAddress = async (addressId) => {
    startLoading();
    try {
      setDefaultAddress(addressId);
      //update addr on checkout
      const data = {userAddressId: addressId};
      await updateCheckout(item.id, data);
      onClose();
    } catch (err) {
      //?
      toast.error('ERROR');
    } finally {
      stopLoading();
    }
  };

  //find that not default
  const isDefaultAddress = selectedId === defaultAddress?.id;

  return (
    <div className="flex flex-col mx-5">
      <header className="flex flex-col p-5 font-semibold text-lg mx-5">
        <h4 className="flex justify-center p-2 pb-5">Your saved Address</h4>
      </header>
      <div className="flex flex-col mx-5">
        <button
          className="font-semibold  rounded-full border py-4 px-5 border-black mt-5 hover:border-2"
          onClick={() =>
            openDrawerWithContent(
              <AddressCreateForm onClose={onClose} addAddress={addAddress} />
            )
          }
        >
          Add new address
        </button>
        <div className="py-8">
          {address && address.length > 0 ? (
            <AddressLists
              address={address}
              setSelectedId={setSelectedId}
              selectedId={selectedId}
            />
          ) : (
            <div className="flex justify-center text-stone-600">
              Your saved address is empty. Please add new address
            </div>
          )}
        </div>

        {selectedId && !isDefaultAddress ? (
          <button
            type="submit"
            className="flex justify-center rounded-full border-2 py-4 px-5 text-white bg-indigo-700 font-semibold"
            onClick={() => handleAddAddress(selectedId)}
          >
            Use this address as default
          </button>
        ) : (
          <div className="flex justify-center rounded-full border-2 py-4 px-5  bg-stone-300 text-stone-500 ">
            Use this address as default
          </div>
        )}
      </div>
    </div>
  );
}
