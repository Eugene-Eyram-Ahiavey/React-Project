// import axios from "axios";
import { Product } from "./Product.jsx";
// import { formatMoney } from "../utils/money.js";

export function ProductsGrid({ products, loadCart }){

    return (
        <>
        <div className="products-grid">
        {products.map((product)=>{

        return (
        <Product key={product.id} product={product} loadCart={loadCart} />

        )
        })}
        
      </div>
        </>
    )
}