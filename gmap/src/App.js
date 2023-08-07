import React from 'react';
// We require the google maps react component from the package
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

// The map style according to the package's docs https://www.npmjs.com/package/google-maps-react
const mapStyles = {
  width: '80vw',
  height: '80vh'
};

// The container to bypass the component's default absolute position (just why??)
const containerStyle = {
  position: 'relative',  
  width: '80%',
  height: '80%'
}

function App(props) {

  // Defining our initial position (GMC Sousse)
  const mapCenter = { lat: 35.839952419794514, lng: 10.596726596300222 };

  // returning our elements
  return (

    // the container
    <div className="flex items-center justify-center h-screen bg-gray-100">

    {/* The maps component, really hate this one */}
      <Map
        google={props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={mapCenter}
        center={mapCenter}
        containerStyle={containerStyle}
        className="relative rounded-md overflow-hidden shadow-lg"
      >
        <Marker position={mapCenter} />
      </Map>
    </div>
  );
}

// Declaring my google maps API key got from Google's console
// just leaving it here and am going to disable it later, just avoiding you the hustle of going and create one for each student by making you go through a .env file
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBiOGCfQjaU-NeFjEgIwAoSeDHyPtA-81Y',
})(App);
