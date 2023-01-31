import { useEffect, useState, useRef, useMemo } from "react";
import { useLoadScript, GoogleMap, MarkerF, InfoWindow } from '@react-google-maps/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import Geocode from "react-geocode";
  
const Map = () => {
  const [activeMarker, setActiveMarker] = useState(null);
  const [dataResponse, setdataResponse] = useState([])
  
  useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = `http://localhost:8080/api/getsituations`
      const response = await fetch(apiUrlEndpoint)
      const res = await response.json();
      setdataResponse(res.situations);
    }
    getPageData();
  }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCFUo7ABX1sywPJYBpROc-8A_kVkI2FnHM"
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map) => {
    const bounds = new google.maps.LatLngBounds();
    dataResponse.forEach(({ latitude, longitude }) => {
      console.log(latitude, longitude)
      const position = new google.maps.LatLng(latitude, longitude)
      if(latitude==null || longitude==null) {
        console.log("lat or lng not defined")
      } else { bounds.extend(position)}
    })
    map.fitBounds(bounds)
  };

  return (
    <div className="pt-4 pb-4">
      <GoogleMap
        zoom={14}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: "65vw", height: "70vh" }}
        onLoad={handleOnLoad}
        onClick={() => setActiveMarker(null)}
      >
      {dataResponse.map(({ site, latitude, longitude, index }) => (
        (latitude != null) && (longitude != null) ?
        <MarkerF
          key={index}
          position={new google.maps.LatLng(latitude, longitude)}
          onClick={() => handleActiveMarker(index)}
        >
          {activeMarker === index ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>{site}</div>
            </InfoWindow>
          ) : null}
        </MarkerF> : ''
      ))} 
      </GoogleMap>
    </div>
  );
};

export default Map;