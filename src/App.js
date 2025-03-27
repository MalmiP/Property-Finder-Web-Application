// Importing React, components, and styles
import React, { useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import PropertyDetails from './components/PropertyDetails';
import FavouritesList from './components/FavouritesList';
import Header from "./components/Header";
import Footer from "./components/Footer";

// Main App component
function App() {
  const [searchCriteria, setSearchCriteria] = useState({});
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [favourites, setFavourites] = useState([]);
  const [showIntro, setShowIntro] = useState(true);
// Add a property to favourites
  const handleAddToFavourites = (property) => {
    if (!favourites.some((fav) => fav.id === property.id)) {
      setFavourites([...favourites, property]);
    }
  };
  // Remove a property from favourites
  const handleRemoveFromFavourites = (propertyId) => {
    setFavourites(favourites.filter((fav) => fav.id !== propertyId));
  };
  // Clear all favourite properties
  const handleClearFavourites = () => {
    setFavourites([]);
  };
  // Set the selected property for detailed view
  const handleSelectProperty = (property) => {
    setSelectedProperty(property);
    setShowIntro(false);
  };
  // Navigate back to the search screen
  const handleBackToSearch = () => {
    setSelectedProperty(null);
    setShowIntro(true);
  };

  return (
    <div className="app">
      <Header />
      {/* Introduction section */}
      {showIntro && (
        <section className="intro-section">
          <div className="intro-left">
            <h2>Welcome to Visionary Homes</h2>
            <p>Where your perfect home awaits!Explore our curated selection of properties and let us help you find a place to call your own.</p>
          </div>
          <div className="intro-right">
            <img
              src="/images/Title.png"
              alt="Property"
              className="intro-image"
            />
          </div>
        </section>
      )}
      <main className="main-content">
        {!selectedProperty ? (
          <>
          {/* Search and favourites sections */}
            <div className="left-section">
              <SearchForm setSearchCriteria={setSearchCriteria} />
              <SearchResults
                searchCriteria={searchCriteria}
                onSelectProperty={handleSelectProperty}
                onAddToFavourites={handleAddToFavourites}
              />
            </div>
            <div className="right-section">
              <FavouritesList
                favourites={favourites}
                onRemoveFromFavourites={handleRemoveFromFavourites}
                onClearFavourites={handleClearFavourites}
                onSelectProperty={handleSelectProperty}
              />
            </div>
          </>
        ) : (
          // Detailed view for selected property
          <PropertyDetails property={selectedProperty} onBack={handleBackToSearch} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;