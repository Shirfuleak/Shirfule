import React, { useState,useEffect } from 'react'
// import './Shop.css';
import shop from '../assests/images/shop1.jpg'
import ProductCard from '../components/ProductCard';
const Shop = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch('/data.json') // Path to the JSON file in the public folder
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Error fetching JSON data:', error));
    }, []);
    console.log(data);
    
  return (
    <div>    
    <div className="banner">
    <img src={shop} alt="Banner" className="banner-image" />
    {/* <div className="banner-heading">
      <h1>Welcome to Shirfule Farms</h1>
    </div> */}
    </div>
    <div>
        <h1 className='d-flex  justify-content-center'>Our Products</h1>
       <ProductCard/>
    </div>
    </div>
  )
}

export default Shop;