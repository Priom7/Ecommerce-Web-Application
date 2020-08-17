import React from "react";
import { useStateValue } from "../StateProvider";
import "./Brands.css";

function Brands({ id, title, image, price, rating }) {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div className='row'>
      <div className='row_posters'>
        <p>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>{" "}
        </p>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((r) => {
              return <p>💛</p>;
            })}
        </div>
      </div>
      <img src={image} alt=''></img>
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Brands;
