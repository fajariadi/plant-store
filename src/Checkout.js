import React from "react";
import "./Checkout.css";
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {

  const [{basket, user}, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className='checkout_ad' src="https://thefutureshapers.com/wp-content/uploads/2019/06/viima-post-ad-banner-728x90.png" alt='' />
        <div>
          <h3>Hello, {user.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
            {basket?.map(item => (
              <CheckoutProduct 
                title={item.title}
                image={item.image}
                price={item.price} />
            ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
