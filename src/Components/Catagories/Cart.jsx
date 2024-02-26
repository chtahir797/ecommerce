import { useContext, useState } from "react";
import { GlobalData } from "../../Context/ProductContext";
import "./Cart.css";

const Cart = () => {
  const { cartData, setCartData } = useContext(GlobalData);
  const [count, setCount] = useState({});
  //increasing quantity
  const Add = (id) => {
    setCount((pre) => ({
      ...pre,
      [id]: (pre[id] || 1) + 1,
    }));
  };

  const Remove = (id) => {
    if (count[id] < 2) {
      alert("Cannot go negative");
    } else {
      setCount((pre) => ({
        ...pre,
        [id]: pre[id] - 1,
      }));
    }
  };
  const deleteItem = (id) => {
    console.log("index is:", id, "Items are", cartData);
    let newCartData = cartData.filter((value, index) => value.id !== id);
    setCartData(newCartData);
  };
  return (
    <>
    {cartData.length > 0? (
      <div className="cart-container">
      <h1>Shopping Cart</h1>
      <div className="cart-product">
        <table>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col">Product Title</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Sub Total</th>
            </tr>
          </thead>
          <tbody>
            {cartData.map((item, index) => (
              <tr key={index} className="cart-item">
                <td>
                  <div className="deleteButton">
                    <button onClick={() => deleteItem(item.id)}>X</button>
                  </div>
                </td>
                <td>
                  <img
                    src={`https://inamstore.devblinks.com/storage/${item.image}`}
                    alt={item.name}
                  />
                </td>
                <td data-label="Product Title">
                  <p>{item.name}</p>
                </td>
                <td data-label="Price">
                  <p>Price: ${item.price}</p>
                </td>
                <td data-label="Quantity">
                  <div className="quantity">
                    <table>
                      <tr>
                        <td onClick={() => Remove(item.id)}>-</td>
                        <td>{count[item.id] || 1}</td>
                        <td onClick={() => Add(item.id)}>+</td>
                      </tr>
                    </table>
                  </div>
                </td>
                <td data-label="Sub Total">${item.price * count[item.id] || item.price}</td>
              </tr>
            ))}
            <tr>
              <td colSpan="5" style={{textAlign:'end', fontWeight:'bold'}}>
                Total
              </td>
              <td data-label="Total">
                $
                {cartData.reduce(
                  (total, value) =>
                    total + value.price * (count[value.id] || 1),
                  0
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    ): (
      <div className="empty" style={{textAlign:'center',color:'red'}}>
        <p>Your cart is currently empty.</p>
      </div>
    )}
      
    </>
  );
};

export default Cart;
