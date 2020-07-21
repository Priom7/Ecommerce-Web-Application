import React from "react";
import "./Checkout.css";

function CheckoutProduct({
  item,
  title,
  image,
  price,
  rating,
}) {
  return (
    <div className='checkoutProduct'>
      <img src={image} alt=''></img>

      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{}</p>
      </div>
    </div>
  );
}

export default CheckoutProduct;
