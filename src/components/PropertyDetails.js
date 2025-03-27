import React from 'react';
import './PropertyDetails.css';
import PropertyImageGallery from './PropertyImageGallery';
import PropertyTabs from './PropertyTabs'

// Component to display detailed property information
function PropertyDetails({ property, onBack }) {
  return (
    <div className="property-details">
      {/* Button to navigate back to search */}
      <button onClick={onBack} className="btn btn-secondary">Back to Search</button>
      <h2>{property.type} - £{property.price.toLocaleString()}</h2>
      {/* Display image gallery for the property */}
      <PropertyImageGallery property={property} />
      
      <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
      {/* Tabs to display additional details */}
      <PropertyTabs property={property} />
    </div>
  );
}

export default PropertyDetails;