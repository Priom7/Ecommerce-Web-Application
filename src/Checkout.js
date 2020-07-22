import React from "react";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout_ad'
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg'
          alt=''
        ></img>
        {basket?.length == 0 ? (
          <div>
            <h2>Your Basket in Empty</h2>
            <p>
              You have no item selected. To buy an item
              please select an item and click "Add to
              basket"
            </p>
          </div>
        ) : (
          <div>
            <h2 className='checkout__title'>Your Basket</h2>
            {basket.map((item) => {
              return (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  rating={item.rating}
                  price={item.price}
                ></CheckoutProduct>
              );
            })}
          </div>
        )}
      </div>

      {basket.length > 0 && (
        <div className='checkout__right'>
          <Subtotal></Subtotal>
        </div>
      )}
    </div>
  );
}

export default Checkout;
