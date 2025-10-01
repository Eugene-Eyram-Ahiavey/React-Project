import axios from 'axios';
import { useEffect, useState } from 'react';
// import dayjs from 'dayjs';
import { Header } from '../../components/Header.jsx';
// import { Link } from 'react-router';
import './orders.css';
// import buyAgain from '../../assets/images/icons/buy-again.png';
// import { formatMoney } from '../../utils/money.js';
import { OrdersGrid } from './OrdersGrid.jsx';



export function OrdersPage({ cart, loadCart }){
const [orders, setOrders] = useState([]);


  useEffect(() => {
const fetchOrders = async () => {
const response = await axios.get('/api/orders?expand=products')
  setOrders(response.data);
}

fetchOrders();
  }, []);
       


    return(
    <>
<link rel="icon" type="image/svg+xml" href="/orders-favicon.png" />

    <title>Orders</title>


     <Header cart={cart} />
    <div className="orders-page">
      <div className="page-title">Your Orders</div>

     <OrdersGrid orders={orders} loadCart={loadCart} cart={cart}/>
    </div>
    </>
    )
}