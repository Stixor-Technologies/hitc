"use client";
import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import Spinner from "../spinner/spinner";
import { MAP_KEY } from "@/app/utils/constant";

const MapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: MAP_KEY!,
  });

  const location = {
    lat: 33.523179484241105,
    lng: 73.08880698465705,
  };

  const mapOptions = {
    disableDefaultUI: false,
    mapTypeControl: false,
    zoomControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    keyboardShortcuts: false,
    scrollwheel: false,
    minZoom: 5,
    maxZoom: 40,
  };

  return (
    <div
      className={`sm:pb-1/2 relative h-[21.875rem] w-full md:order-1 md:h-auto md:flex-1 `}
    >
      {isLoaded ? (
        <GoogleMap
          id="google-map"
          zoom={18}
          center={location}
          options={mapOptions}
          mapContainerClassName="absolute top-0 left-0 h-full w-full"
        >
          <Marker
            position={location}
            icon={{
              url: "/assets/location-marker.svg",
            }}
          />
        </GoogleMap>
      ) : (
        <div className="absolute left-0 top-0 flex h-full w-full items-center">
          <Spinner color="text-dark-gray" />
        </div>
      )}
    </div>
  );
};

export default MapComponent;
