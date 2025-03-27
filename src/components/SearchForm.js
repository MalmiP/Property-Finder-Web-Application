import React, { useState } from 'react';
import './SearchForm.css';


// SearchForm component for handling search criteria input
function SearchForm({ setSearchCriteria }) {
  const [formData, setFormData] = useState({
    type: 'any',
    postcode: '',
    minPrice: '',
    maxPrice: '',
    minBedrooms: 1,
    maxBedrooms: 5,
    startDate: '',
    endDate: '',
    
  });
// Handle changes to form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,// Update the corresponding field in formData state
    }));
  };
 // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchCriteria(formData); // Pass the search criteria back 
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="form-group">
        <label htmlFor="type">Type:</label>
        <select id="type" name="type" value={formData.type} onChange={handleChange}>
          <option value="any">Any</option>
          <option value="House">House</option>
          <option value="Flat">Flat</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="postcode">Postcode:</label>
        <input
          type="text"
          id="postcode"
          name="postcode"
          placeholder="e.g., BR1"
          value={formData.postcode}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="minPrice">Min Price:</label>
        <select
          id="minPrice"
          name="minPrice"
          value={formData.minPrice}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="100000">£100,000</option>
          <option value="200000">£200,000</option>
          <option value="300000">£300,000</option>
          <option value="400000">£400,000</option>
          <option value="500000">£500,000</option>
          <option value="600000">£600,000</option>
          <option value="700000">£700,000</option>
          <option value="800000">£800,000</option>
          <option value="900000">£900,000</option>
          <option value="1000000">£1,000,000</option>
          <option value="1100000">£1,100,000</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="maxPrice">Max Price:</label>
        <select
          id="maxPrice"
          name="maxPrice"
          value={formData.maxPrice}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="100000">£100,000</option>
          <option value="200000">£200,000</option>
          <option value="300000">£300,000</option>
          <option value="400000">£400,000</option>
          <option value="500000">£500,000</option>
          <option value="600000">£600,000</option>
          <option value="700000">£700,000</option>
          <option value="800000">£800,000</option>
          <option value="900000">£900,000</option>
          <option value="1000000">£1,000,000</option>
          <option value="1100000">£1,100,000</option>
          <option value="1200000">£1,200,000</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="minBedrooms">Min Bedrooms:</label>
        <select
          id="minBedrooms"
          name="minBedrooms"
          value={formData.minBedrooms}
          onChange={handleChange}
        >
          {[...Array(5)].map((_, i) => (
            <option key={i + 1} value={i + 1}>{i + 1}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="maxBedrooms">Max Bedrooms:</label>
        <select
          id="maxBedrooms"
          name="maxBedrooms"
          value={formData.maxBedrooms}
          onChange={handleChange}
        >
          {[...Array(5)].map((_, i) => (
            <option key={i + 1} value={i + 1}>{i + 1}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="startDate">Date Added (Start):</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="endDate">Date Added (End):</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
        />
      </div>

      

      <button type="submit" className="btn btn-primary">Search</button>
    </form>
  );
}

export default SearchForm;
