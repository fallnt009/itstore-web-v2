//action.type
export const FETCH_ADDRESS = 'FETCH_ADDRESS';
export const ADD_ADDRESS = 'ADD_ADDRESS';
export const EDIT_ADDRESS = 'EDIT_ADDRESS';
export const DELETE_ADDRESS = 'DELETE_ADDRESS';
export const SET_DEFAULT_ADDRESS = 'SET_DEFAULT_ADDRESS';

//initial state
export const INIT_ADDRESS = {
  address: [],
  defaultAddress: {
    shipping: null,
    billing: null,
  },
};

function addressReducer(state, action) {
  switch (action.type) {
    case FETCH_ADDRESS:
      let defaultShipping =
        action.payload.address.find(
          (addr) => addr.UserAddresses.isDefaultShipping
        ) || null;
      let defaultBilling =
        action.payload.address.find(
          (addr) => addr.UserAddresses.isDefaultBilling
        ) || null;

      return {
        ...state,
        address: action.payload.address,
        defaultAddress: {shipping: defaultShipping, billing: defaultBilling},
      };
    case ADD_ADDRESS:
      const newAddress = [action.payload.newAddress, ...state.address];
      return {
        ...state,
        address: newAddress,
      };
    case EDIT_ADDRESS:
      const {id, updatedAddress, addressType} = action.payload;
      //find index of the address to update
      const findIndex = state.address.findIndex((addr) => addr.id === id);
      //if not found
      if (findIndex === -1) return state;
      //create copy of the address list and update address at found index
      const updateAddressList = [...state.address];
      updateAddressList[findIndex] = {
        ...updateAddressList[findIndex],
        ...updatedAddress,
      };
      // update defaultAddr only if the selected address matches the address type
      let updatedDefaultAddress = {...state.defaultAddress};

      if (
        addressType === 'shipping' &&
        updatedDefaultAddress.shipping?.id === id
      ) {
        updatedDefaultAddress.shipping = {
          ...updatedDefaultAddress.shipping,
          ...updatedAddress,
        };
      }

      if (
        addressType === 'billing' &&
        updatedDefaultAddress.billing?.id === id
      ) {
        updatedDefaultAddress.billing = {
          ...updatedDefaultAddress.billing,
          ...updatedAddress,
        };
      }

      return {
        ...state,
        address: updateAddressList,
        defaultAddress: updatedDefaultAddress,
      };
    case DELETE_ADDRESS:
      const {id: deletedId} = action.payload;
      //remove the delete address form the list
      const oldAddress = state.address.filter((addr) => addr.id !== deletedId);
      //update default
      let defaultAddress = {...state.defaultAddress};

      //check if deleted addr match the default shipping or billing
      if (defaultAddress.shipping && defaultAddress.shipping.id === deletedId) {
        defaultAddress.shipping = oldAddress.length > 0 ? oldAddress[0] : null; // Set first available address or null
      }

      if (defaultAddress.billing && defaultAddress.billing.id === deletedId) {
        defaultAddress.billing = oldAddress.length > 0 ? oldAddress[0] : null; // Set first available address or null
      }

      // If no addresses remain, set defaultAddress to null
      if (oldAddress.length === 0) {
        defaultAddress = {shipping: null, billing: null};
      }
      return {
        ...state,
        address: oldAddress,
        defaultAddress: defaultAddress,
      };
    case SET_DEFAULT_ADDRESS:
      const {shipping, billing} = action.payload;

      return {
        ...state,
        defaultAddress: {
          ...state.defaultAddress,
          // Only update shipping if it is provided
          shipping:
            shipping !== undefined ? shipping : state.defaultAddress.shipping,
          // Only update billing if it is provided
          billing:
            billing !== undefined ? billing : state.defaultAddress.billing,
        },
      };

    default:
      return state;
  }
}

export default addressReducer;
