// import { Fragment } from "react";
// import { Link } from "react-router";
// import { formatMoney } from "../../utils/money";
// import dayjs from "dayjs";
import { OrderHeader } from "./OrderHeader";
import { OrderDetailsGrid } from "./OrdersGridDetails";





export function OrdersGrid({ orders, loadCart,cart }){

    return(
       <div className="orders-grid">
        {
          orders.map((order) => {
        return(
          <div key={order.id} className="order-container">

        <OrderHeader order={order}/>

          <OrderDetailsGrid order={order} loadCart={loadCart} cart={cart}/>
        </div>
        )
          })
        }
      </div>
    )
}