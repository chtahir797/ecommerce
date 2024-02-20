import { createContext, useState } from 'react';
export const GlobalData = createContext(null);

function ProductContext({ children }) {
 const [productID, setProductID] = useState('')
 const [productDetails, setProductDetails] = useState()
 const [cartData, setCartData] = useState([])
 console.log("Cart Data in Context : ", cartData)
  return (
    <GlobalData.Provider value={{ productID, setProductID, productDetails, setProductDetails, cartData, setCartData }}>
      {children}
    </GlobalData.Provider>
  );
}

export default ProductContext;