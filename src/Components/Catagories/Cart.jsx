import { useContext, useState } from "react";
import { GlobalData } from "../../Context/ProductContext";
import "./Cart.css";

const Cart = () => {
  const { cartData } = useContext(GlobalData);
  const [count, setCount] = useState({});
  //increasing quantity
  const Add = (id) => {
    // console.log(id)
    setCount((pre) => ({
      ...pre,
      [id]: (pre[id] || 1) + 1,
    }));
  };
  // console.log("count is", count)

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
  return (
    <>
      <div className="cart-container">
        <h1>Shopping Cart</h1>
        <div class="cart-product">
          <table>
            <thead>
              <tr>
                <th>Product Image</th>
                <th>Product Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Sub Total</th>
              </tr>
            </thead>
            <tbody>
              {cartData.map((item, index) => (
                <tr key={index} className="cart-item">
                  <td>
                    <img
                      src={`https://inamstore.devblinks.com/storage/${item.image}`}
                      alt={item.name}
                    />
                  </td>
                  <td>
                    <p>{item.name}</p>
                  </td>
                  <td>
                    <p>Price: ${item.price * count[item.id] || item.price}</p>
                  </td>
                  <td>
                    <button onClick={() => Remove(item.id)}>-</button>
                    <h1>{count[item.id] || 1}</h1>
                    <button onClick={() => Add(item.id)}>+</button>
                  </td>
                  <td>${item.price * count[item.id] || item.price}</td>
                </tr>
              ))}
              <tr>
                <td colspan="4">Total</td>
                <td>
                  $
                  {cartData.reduce(
                    (total, value) => total + value.price * count[value.id],
                    0
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Cart;
