import {useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router';
import { Header } from '../components/Header.jsx';
import './HomePage.css';
import { ProductsGrid } from './ProductsGrid.jsx';
                     





export function HomePage({ cart, loadCart} ){
const [products, setProducts] = useState([])
const [searchParams] = useSearchParams();
const search = searchParams.get('search');
// console.log(search);


  useEffect(() => {
  const getHomeData = async () => {
    if(search){
const response = await axios.get(`/api/products?search=${search}`);
setProducts(response.data);

}else{
const response = await axios.get('/api/products');
  setProducts(response.data);
}
  }
  
getHomeData();
  
  }, [search]);
  
  ;


  

    return (
    <>
 <link rel="icon" type="image/svg+xml" href="/home-favicon.png" />

    <title>HomePage</title>
    
    <Header cart={cart} search={search}/>
    <div className="home-page">
      <ProductsGrid products={products} loadCart={loadCart}/>
    </div>
    </>
    )
}

