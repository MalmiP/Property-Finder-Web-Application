import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';

// Component to display property details in tabbed sections
function PropertyTabs({ property }) {
  return (
    <Tabs defaultActiveKey="description" id="property-tabs" className="mb-3">
      {/* Tab for property description */}
      <Tab eventKey="description" title="Description">
        <div className="property-description">
          <p>{property.longDescrip}</p>
        </div>
      </Tab>
      {/* Tab for floor plan */}
      <Tab eventKey="floorPlan" title="Floor Plan">
        <div className="property-floor-plan">
          <img src={property.floorPlan} alt="Floor Plan" className="floor-plan-image" />
        </div>
      </Tab>
      {/* Tab for Google Map link */}
      <Tab eventKey="map" title="Google Map">
        <div className="property-map">
        {property.mapLink && (
        <div className="map-link">
          <button
            onClick={() => window.open(property.mapLink, "_blank")}
            className="btn btn-info"
          >
            View on Google Maps
          </button>
        </div>
      )}
        </div>
      </Tab>
    </Tabs>
  );
}

export default PropertyTabs;
