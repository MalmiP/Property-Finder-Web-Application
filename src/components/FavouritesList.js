import React from 'react';
import './FavouritesList.css';

/* Component to display the favourite list*/
function FavouritesList({ favourites, onRemoveFromFavourites, onClearFavourites, onSelectProperty }) {
  return (
    <div className="favourites-list">
      <h2>Favourites</h2>
      {favourites.length > 0 ? (
        <>
          <button onClick={onClearFavourites} className="btn btn-clear-all">
            Clear All
          </button>
          {favourites.map((property) => (
            <div key={property.id} className="favourite-item">
              <img src={property.picture} alt={property.type} className="favourite-img" />
              <div className="favourite-details">
                <h3>{property.type} - £{property.price.toLocaleString()}</h3>
                <p>{property.description.substring(0, 50)}...</p>
                <div className="favourite-actions">
                  <button
                    onClick={() => onSelectProperty(property)}
                    className="btn btn-primary"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => onRemoveFromFavourites(property.id)}
                    className="btn btn-danger"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <p>No favourites added yet.</p>
      )}
    </div>
  );
}

export default FavouritesList;
