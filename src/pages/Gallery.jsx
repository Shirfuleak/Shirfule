import React, { useEffect, useState } from 'react';
import './Gallery.css';
import shop from '../assests/images/shop.jpg'
const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('/images.json')
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error('Error fetching the images:', error));
  }, []);

  return (
    <div className="gallery-container">
        <div>
         <img src={shop} alt="Banner" className="banner-image" />
    {/* <div className="banner-heading">
      <h1>Welcome to Shirfule Farms</h1>
    </div> */}
    </div>
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
