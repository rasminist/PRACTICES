import { emptyToCart, removeToCart, addToCart } from "../Action";
import { useDispatch } from "react-redux";
import { productList } from "../productAction";

import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  console.log(data);

  useEffect(() => {
    dispatch(productList());
  }, );
  return (
    <div>
      <button onClick={() => dispatch(emptyToCart())}>
        Empty To Cart
      </button>

      <div className="product-container">
        {data.map((item) => (
          <div className="product-items" key={item.id}>
            <img src={item.photo} alt="" width="200" height="200" />
            <div> Name : {item.name}</div>
            <div> Price : {item.price}</div>
            <div> Color : {item.color}</div>
            <div> Category : {item.category}</div>
            <div>
              <button onClick={() => dispatch(addToCart(item))}>
                Add To cart
              </button>
              <br />
              <button onClick={() => dispatch(removeToCart(item.id))}>
                Remove To cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
