import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router";
import { HomePage } from "./home/HomePage.jsx";
import "/index.css";
import { CheckoutPage } from "./pages/checkout/CheckoutPage.jsx";
import { OrdersPage } from "./pages/orders/OrdersPage.jsx";
import { TrackingPage } from "./pages/TrackingPage.jsx";
import { ErrorPage } from "./pages/ErrorPage.jsx";




function App() {
const [cart, setCart] = useState([]);

 const  loadCart = async () => {
      const response = await axios.get('/api/cart-items?expand=product');
      setCart(response.data);
     }


  useEffect(() => {
    
     loadCart();
  }, []);




  return (
    <>
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart}
      />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} 
      setCart={setCart} loadCart={loadCart}
      />} />
      <Route path='orders' element={<OrdersPage cart={cart} loadCart={loadCart}/>}/>
      <Route path='tracking/:orderId/:productId' element={<TrackingPage cart={cart}/>} />
      <Route path='*' element={<ErrorPage cart={cart}/>}/>
    </Routes>
    </>
  );
}

export default App;
