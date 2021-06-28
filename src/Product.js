import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider"

function Product(props) {

  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        title: props.title,
        image: props.image,
        price: props.price,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{props.title}</p>
        <p clasName="product__price">
          <small>IDR</small>
          <strong>{props.price}</strong>
        </p>
        <div className="product__rating">
          <p>*</p>
        </div>
      </div>
      <img className="" src={props.image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
