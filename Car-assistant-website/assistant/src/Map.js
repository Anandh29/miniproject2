import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./Styles/Map.css"
const Map = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [loading, setLoading] = useState(true);
  const [nearbyVehicle, setNearbyVehicle] = useState([]);
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
          setLoading(false);
        },
        (error) => {
          console.error("Error getting user location:", error);
          setLoading(false);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);
  console.log("Latitude:", latitude);
  console.log("Longitude:", longitude);
  return (
    <>
    <Navbar/>
    <div className="parent">
      <div className="left">
        {latitude && longitude ? (
          <iframe
            title="Nearby Vehicle"
            width="100%"
            height="500px"
            frameBorder="0"
            src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao&q=Vehicle+service+center+near+me&center=${latitude},${longitude}&zoom=13&maptype=roadmap`}
            allowFullScreen
          ></iframe>
        ) : (
          <p>Loading map...</p>
        )}
      </div>
      <div className="marquee-container">
      <marquee className="marquee-text" behavior="scroll" direction="left" scrollamount="13">
       Click on view larger map..This map will locate you to the nearby vehicle service center
      </marquee>
    </div>
    </div>
    </>
  );
};

export default Map;