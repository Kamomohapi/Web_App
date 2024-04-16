import { createContext, useEffect, useState } from "react";
import axios from 'axios';

const url = "http://localhost:8006/products";

const fetchData = async ()=>{
  try{
    const response = await axios(url);
    const data = response.data;
    console.log(data);

  }catch(error)
  {
    console.log(error.response);
}};

useEffect(()=>{
  fetchData();
},[])

export const StoreContext = createContext(null)

export const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getCartTotalAmount = () => {
    let totalAmount = 0;
    for(const item  in cartItems){

        if (cartItems[item] > 0){

          let itemInfo = fetchData.data.find((product)=>product._id === item);
          totalAmount += itemInfo.price * cartItems[item];

        }  
    }
    return totalAmount;
  }

  const contextValue = {
    fetchData,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getCartTotalAmount
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
