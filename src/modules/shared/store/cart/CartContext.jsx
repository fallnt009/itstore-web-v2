import {createContext, useState, useCallback, useEffect} from 'react';

import useAuth from '../../hooks/useAuth';

import * as CartApi from '../../services/apis/cart-api';

const CartContext = createContext();

export default function CartContextProvider({children}) {
  const [userCart, setUserCart] = useState([]);
  const {authenUser} = useAuth();

  const fetchCart = useCallback(async () => {
    try {
      //api
      const res = await CartApi.getMyCart();

      setUserCart(res.data.result.CartItems);
    } catch (err) {
      throw err;
    }
  }, []);

  ///Fetch if user only authen
  useEffect(() => {
    if (authenUser) {
      fetchCart();
    }
  }, [fetchCart, authenUser]);

  //Add Cart
  const addCartItem = useCallback(
    async (valueId) => {
      try {
        //check userCart index that reach limit
        if (userCart.length >= 10) {
          return;
        }
        //find index of item in cart
        const index = userCart.findIndex((item) => item.productId === valueId);
        //if item is already  in cart update qty
        if (index !== -1) {
          const updatedCart = [...userCart];
          updatedCart[index].qty++;

          //Update the Cart state
          setUserCart(updatedCart);

          await CartApi.updateCartItem(
            updatedCart[index].id,
            updatedCart[index].qty
          );
        } else {
          //   //if the item is not in cart add it
          const res = await CartApi.addCartItem(valueId, 1);

          setUserCart([...userCart, res.data.result.CartItems[0]]);
        }
      } catch (err) {
        throw err;
      }
    },
    [userCart, setUserCart]
  );

  const updateCartItem = useCallback(async (itemId, newQty) => {
    try {
      await CartApi.updateCartItem(itemId, newQty);

      setUserCart((prevCart) =>
        prevCart.map((item) =>
          item.id === itemId ? {...item, qty: newQty} : item
        )
      );
    } catch (err) {
      throw err;
    }
  }, []);

  const removeCartItem = async (itemId) => {
    try {
      await CartApi.deletecartItem(itemId);
      setUserCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
    } catch (err) {
      throw err;
    }
  };

  return (
    <CartContext.Provider
      value={{userCart, fetchCart, addCartItem, updateCartItem, removeCartItem}}
    >
      {children}
    </CartContext.Provider>
  );
}

export {CartContext};
