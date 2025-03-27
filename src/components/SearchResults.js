import React, { useState, useEffect } from 'react';
import propertiesData from "../data/properties.json";
import './SearchResults.css';

// Map month names to thier index values
const monthNames = {
  "January": 0,
  "February": 1,
  "March": 2,
  "April": 3,
  "May": 4,
  "June": 5,
  "July": 6,
  "August": 7,
  "September": 8,
  "October": 9,
  "November": 10,
  "December": 11
};

// Main SearchResults component
function SearchResults({ searchCriteria, onSelectProperty, onAddToFavourites }) {
  const [filteredProperties, setFilteredProperties] = useState([]);

  // useEffect hook to filter properties whenever searchCriteria changes
  useEffect(() => {
    const {
      type, minPrice, maxPrice, minBedrooms, maxBedrooms, startDate, endDate, postcode
    } = searchCriteria;

    const filterProperties = () => {
      const filtered = propertiesData.properties.filter((property) => {
        const propertyPrice = property.price;
        const propertyBedrooms = property.bedrooms;
        const propertyMonth = monthNames[property.added.month];
        const propertyDate = new Date(property.added.year, propertyMonth, property.added.day);
        const searchStartDate = startDate ? new Date(startDate) : null;
        const searchEndDate = endDate ? new Date(endDate) : null;

        // Check if property falls within the date range
        const isWithinDateRange =
          (!searchStartDate || propertyDate >= searchStartDate) &&
          (!searchEndDate || propertyDate <= searchEndDate);

        // Return true if the property matches all the search criteria
        return (
          (type === 'any' || property.type === type) &&
          (minPrice === '' || propertyPrice >= Number(minPrice)) &&
          (maxPrice === '' || propertyPrice <= Number(maxPrice)) &&
          (propertyBedrooms >= Number(minBedrooms)) &&
          (propertyBedrooms <= Number(maxBedrooms)) &&
          isWithinDateRange &&
          (!postcode || property.location.toLowerCase().includes(postcode.toLowerCase()))
        );
      });

      // Set filtered properties 
      setFilteredProperties(filtered);
    };
    // Call the filterProperties function
    filterProperties();
  }, [searchCriteria]);// Effect that runs whene searchCriteria changes

  return (
    
    <div className="results-container">
      {filteredProperties.length > 0 ? (
        filteredProperties.map((property) => (
          <div key={property.id} className="property-card">
            <img src={property.picture} alt={property.type} className="property-img" />
            <h3>{property.type} - {property.bedrooms} Beds</h3>
            <p>{property.description.substring(0, 100)}...</p>
            <p>Location: {property.location}</p>
            <p>Price: £{property.price.toLocaleString()}</p>
            <button
              onClick={() => onSelectProperty(property)}
              className="btn btn-primary"
            >
              View Details
            </button>
            <button
              onClick={() => onAddToFavourites(property)}
              className="btn btn-secondary"
            >
              Add to Favourites
            </button>
          </div>
        ))
      ) : (
        <div className='no-match'>
          <p>No properties match your search criteria.</p>
        </div>
      )}
    </div>
  );
}

export default SearchResults;
