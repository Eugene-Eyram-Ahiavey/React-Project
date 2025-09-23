import {useEffect, useState } from 'react';
import axios from 'axios';
import { Header } from '../components/Header.jsx';import './HomePage.css';
import { ProductsGrid } from './ProductsGrid.jsx';
// import { products } from '../starting-code/data/products.js';




export function HomePage({ cart} ){
const [products, setProducts] = useState([])

  useEffect(() => {
  const getHomeData = async () => {
const response = await axios.get('/api/products');
  setProducts(response.data);
  }
  
getHomeData();
  
  }, []);
  
  ;


  

    return (
    <>
 <link rel="icon" type="image/svg+xml" href="/home-favicon.png" />

    <title>HomePage</title>
    
    <Header cart={cart}/>
    <div className="home-page">
      <ProductsGrid products={products}/>
    </div>
    </>
    )
}

