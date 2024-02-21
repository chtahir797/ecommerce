
import { useContext, useState } from "react";
import { GlobalData } from "../../Context/ProductContext";
import "./Cart.css";

const Cart = () => {
  const { cartData } = useContext(GlobalData);
  const [count, setCount] = useState({});
  //increasing quantity
  const Add = (id) => {
    // console.log(id)
    setCount((pre) => ( {
        ...pre,
       [id] : (pre[id] || 0) + 1
    }))
  };
  // console.log("count is", count)

  const Remove = (id) => {
    if(count[id] < 2){
      alert("Cannot go negative")
    } else{
      setCount((pre) => ( {
        ...pre,
       [id] : (pre[id] ) - 1
    }))
    }

  };
  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {cartData.map((item, index) => (
          <div key={index} className="cart-item">
            <img
              src={`https://inamstore.devblinks.com/storage/${item.image}`}
              alt={item.name}
            />
            <div className="item-details">
              <p>{item.name}</p>
              <p>Price: ${item.price * count[item.id]}</p>
              <button onClick={()=>Add(item.id)}>+</button>
              <h1>{count[item.id] || 0}</h1>
              <button onClick={()=>Remove(item.id)}>-</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart




