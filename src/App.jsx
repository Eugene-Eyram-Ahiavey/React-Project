import { Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage.jsx";
import "/index.css";
import { CheckoutPage } from "./pages/checkout/CheckoutPage.jsx";
import { OrdersPage } from "./pages/OrdersPage.jsx";
import { TrackingPage } from "./pages/TrackingPage.jsx";
import { ErrorPage } from "./pages/ErrorPage.jsx";

function App() {
  return (
    <>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path='orders' element={<OrdersPage/>}/>
      <Route path='tracking' element={<TrackingPage/>} />
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    </>
  );
}

export default App;
