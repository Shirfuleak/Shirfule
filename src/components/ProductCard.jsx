import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductCard.css'
const ProductCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/data.json') // Assuming the JSON file is in the public folder
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error('Error fetching JSON data:', error));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {products.map((product, index) => (
          <div key={product.id} className="col-md-6 mb-4">
            <div className="card">
              <img
                src={`/${product.image}`}
                className="card-img-top"
                alt={product.name}
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price.toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
