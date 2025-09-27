import { DeliveryOptions } from './DeliveryOptions';
import './CheckoutPage.css';
import { CartItemDetails } from './CartItemDetails';
import { DeliveryDate } from './DeliveryDate';




export function OrderSummary({ cart, deliveryOptions }){

    return (
<div className="order-summary">
          {deliveryOptions.length > 0 && cart.map((cartItem) => {
            console.log(cartItem.productId);
            return (
              <div key={cartItem.productId} className="cart-item-container">
            <DeliveryDate cartItem={cartItem} deliveryOptions={deliveryOptions}/>

            <div className="cart-item-details-grid">
      
              <CartItemDetails cartItem={cartItem}/>
              <DeliveryOptions deliveryOptions={deliveryOptions} cartItem={cartItem} />
            </div>
          </div>
            )
          })}
        </div>
    );
}