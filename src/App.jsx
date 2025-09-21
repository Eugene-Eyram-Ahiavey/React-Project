import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage.jsx";
import "/index.css";
import { CheckoutPage } from "./pages/checkout/CheckoutPage.jsx";
import { OrdersPage } from "./pages/OrdersPage.jsx";
import { TrackingPage } from "./pages/TrackingPage.jsx";
import { ErrorPage } from "./pages/ErrorPage.jsx";




function App() {
const [cart, setCart] = useState([]);

  useEffect(() => {
     axios.get('/api/cart-items?expand=product')
    .then((response) => {
      setCart(response.data);
    });
  }, []);




  return (
    <>
    <Routes>
      <Route index element={<HomePage cart={cart}  
      />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} 
      setCart={setCart}
      />} />
      <Route path='orders' element={<OrdersPage cart={cart}/>}/>
      <Route path='tracking' element={<TrackingPage/>} />
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    </>
  );
}

export default App;
