import { createContext, useState } from 'react';
export const GlobalData = createContext(null);

function ProductContext({ children }) {
 const [productID, setProductID] = useState('')
  return (
    <GlobalData.Provider value={{ productID, setProductID }}>
      {children}
    </GlobalData.Provider>
  );
}

export default ProductContext;