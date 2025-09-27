import { Header } from '../components/Header.jsx';
import { Link, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import axios from 'axios';

import './TrackingPage.css';


export function TrackingPage({ cart }){
  const [order, setOrder] = useState(null);
  const {orderId, productId} = useParams();

    useEffect(() => {
    const fetchOrder = async () => {
      const response = await axios.get(`/api/orders/${orderId}?expand=products`);
      setOrder(response.data);
      // console.log(response.data)
    }
      
    fetchOrder();

    }, [orderId]);


  if(!order){
    return null;
  }

  // console.log(order)
  const matchProduct = order.products.find((OrderProduct) => {
      return OrderProduct.productId === productId
});

const totalDeliveryTimeMs = matchProduct.estimatedDeliveryTimeMs - order.orderTimeMs;
console.log(totalDeliveryTimeMs);
// console.log(dayjs(totalDeliveryTimeMs).format('dddd, MMMM D'));

const timePassedMs = dayjs().valueOf() - order.orderTimeMs;
// console.log(dayjs(timePassedMs).format('dddd, MMMM D'));


let deliveryPercent = (timePassedMs / totalDeliveryTimeMs) * 100;
// console.log(deliveryPercent)

if(deliveryPercent > 100){
  deliveryPercent = 100;
}

const isPreparing = deliveryPercent < 33;
const isShipped = deliveryPercent >= 33 && deliveryPercent < 100;
const isDelivered = deliveryPercent === 100;



    return (
        <>
    <link rel="icon" type="image/svg+xml" href="/tracking-favicon.png" />

        <title>Tracking Page</title>

    <Header cart={cart} />

    <div className="tracking-page">
      <div className="order-tracking">
        <Link className="back-to-orders-link link-primary" to="/orders">
          View all orders
        </Link>

        <div className="delivery-date">
        {deliveryPercent >= 100 ?  'Delivered on' : 'Arriving on'} {dayjs(matchProduct.estimatedDeliveryTimeMs).format('dddd, MMMM D')}

        </div>
          
        <div className="product-info">
          {matchProduct.product.name}
        </div>

        <div className="product-info">
          Quantity: {matchProduct.quantity}
        </div>

        <img className="product-image" src={matchProduct.product.image} />

        <div className="progress-labels-container">
          <div className={`progress-label ${isPreparing && 'current-status'}`}>
            Preparing
          </div>
          <div className={`progress-label ${isShipped && 'current-status'}`}>
           Shipped
          </div>
          <div className={`progress-label ${isDelivered && 'current-status'}`}>
           Delivered
          </div>
        </div>

        <div className="progress-bar-container">
          <div className="progress-bar"style={{width:`${deliveryPercent}%`}}></div>
        </div>
      </div>
    </div>
        </>
    )
}