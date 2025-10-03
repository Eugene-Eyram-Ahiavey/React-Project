import axios from 'axios'
import { useState } from 'react';

import { formatMoney } from "../../utils/money";


export function CartItemDetails({ cartItem, loadCart }) {
const [isUpdating, setisUpdating] = useState(false);
const [quantity, setQuantity] = useState(cartItem.quantity);




  const deleteCartItem = async ()  => {
await axios.delete(`api/cart-items/${cartItem.productId}`);

await loadCart();
  }

  const updateQuantity = async () => {
  if(isUpdating){
    axios.put(`/api/cart-items/${cartItem.productId}`, {
      quantity: Number(quantity),
    });
    await loadCart();
    setisUpdating(false)
  }else{
    setisUpdating(true);
  }
    }
  

  const updateQuantityInput = (event) => {
    setQuantity(event.target.value);
    console.log(quantity);
  }

  const useKeys = (event) => {
  if(event.key === 'Enter'){
    updateQuantity();
  }else if(event.key === 'Escape'){
    setQuantity(cartItem.quantity);
    setisUpdating(false)
  }
}

  return (
    <>
   <img className="product-image"
                src={cartItem.product.image} />
              <div className="cart-item-details">
                <div className="product-name">
                  {cartItem.product.name}
                </div>
                <div className="product-price">
                  ${formatMoney(cartItem.product.priceCents)}
                </div>
                <div className="product-quantity">
                  <span>
                    Quantity: <input className="update-input" 
                    style={{display: isUpdating ? "inline" : "none" }} type='text'
                     value={quantity}
                     onChange={updateQuantityInput}
                     onKeyDown={useKeys}
                     /> <span className="quantity-label">{cartItem.quantity}</span>
                  </span>
                  <span className="update-quantity-link link-primary"
                  onClick={updateQuantity}
                  >
                  {
                    isUpdating ? 'Save' : 'Update'
                  }
                  </span>
                  <span className="delete-quantity-link link-primary"
                   onClick={deleteCartItem}>
                    Delete
                  </span>
                </div>
              </div>
        </>
  );
}
