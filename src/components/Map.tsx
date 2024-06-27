/*
THIS IS THE MAP COMPONENT:
  - This uses the Google Maps API and Maps Javascript API to embed a map into the component
  - The map is interactive
  - The map has locations of microgrids marked
  - upon clicking/hovering on the locations, you can checkout a baic set of information from it
*/

import React from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "600px",
};

const center = {
  lat: 20.5937,
  lng: 78.9629,
};

// Synthetic data about locations of microgrids in india
const locations = [
  {
    id: 1,
    name: "Microgrid 1",
    lat: 21.1466,
    lng: 79.0889,
    energy: "10 MW",
    year: 2015,
  },
  {
    id: 2,
    name: "Microgrid 2",
    lat: 22.5726,
    lng: 88.3639,
    energy: "15 MW",
    year: 2017,
  },
  {
    id: 3,
    name: "Microgrid 3",
    lat: 28.7041,
    lng: 77.1025,
    energy: "8 MW",
    year: 2016,
  },
  {
    id: 4,
    name: "Microgrid 4",
    lat: 13.0827,
    lng: 80.2707,
    energy: "12 MW",
    year: 2018,
  },
  {
    id: 5,
    name: "Macrogrid 5",
    lat: 12.9716,
    lng: 77.5946,
    energy: "50 MW",
    year: 2014,
  },
  {
    id: 6,
    name: "Macrogrid 6",
    lat: 18.5204,
    lng: 73.8567,
    energy: "100 MW",
    year: 2019,
  },
  // gotta add real location but this syn data gotta do for now
];
const Map: React.FC = () => {
  const [selected, setSelected] = React.useState<any>(null);

  return (
    // !!!!!!!! V WHEN YOU USE IT ENTER YOUR API KEY DAMMIT !!!!!!!!!
    <LoadScript googleMapsApiKey="">
      <GoogleMap mapContainerStyle={mapContainerStyle} zoom={5} center={center}>
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={{ lat: location.lat, lng: location.lng }}
            onClick={() => setSelected(location)}
          />
        ))}

        {selected && (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => setSelected(null)}
          >
            <div>
              <h2>{selected.name}</h2>
              <p>Energy Produced: {selected.energy}</p>
              <p>Year of Installation: {selected.year}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;