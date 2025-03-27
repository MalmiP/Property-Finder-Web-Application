import React from 'react';
import { Carousel } from 'react-bootstrap';

// Component to display image gallery
function PropertyImageGallery({ property }) {
  return (
    <div className="property-image-gallery">
      {/* Thumbnail Carousel */}
      <div className="thumbnail-carousel">
        <Carousel>
          {property.images.map((image, index) => (
            <Carousel.Item key={index}>
              <img 
                className="d-block w-100 thumbnail-image" 
                src={image} 
                alt={`Thumbnail ${index}`} 
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Property Information */}
      <div className="property-description">
        <p><strong>Type:</strong> {property.type}</p>
        <p><strong>Price:</strong> £{property.price.toLocaleString()}</p>
        <p><strong>Location:</strong> {property.location}</p>
      </div>
    </div>
  );
}

export default PropertyImageGallery;
