"use client";

import dynamic from "next/dynamic";
import React, { use } from "react";
import L from "leaflet";
import { useEffect } from "react";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

import "leaflet/dist/leaflet.css";
import Image from "next/image";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const icons = L.icon({ iconUrl: "/marker.png" });

const position = [28.6139, 77.209];
const position2 = [24.6139, 75.209];
const position3 = [27.1502, 68.8311];
const position4 = [29.122, 69.8905];

const Map = () => {
  return (
    <div>
      <MapContainer
        style={{ height: "80vh", width: "100%" }}
        center={position}
        zoom={3}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={icons} id="map-icon">
          <Popup>
            <Image
              src={"/banner3.JPG"}
              alt="Picture of the background"
              width={100}
              height={100}
              unoptimized
              priority
            />
            New Delhi branch of Devkinandan.
          </Popup>
        </Marker>

        <Marker position={position2} icon={icons} id="map-icon">
          <Popup>
            <Image
              src={"/banner3.JPG"}
              alt="Picture of the background"
              width={100}
              height={100}
              unoptimized
              priority
            />
            MP branch of Devkinandan.
          </Popup>
        </Marker>

        <Marker position={position3} icon={icons} id="map-icon">
          <Popup>
            <Image
              src={"/banner3.JPG"}
              alt="Picture of the background"
              width={100}
              height={100}
              unoptimized
              priority
            />
            Gujurat branch of Devkinandan.
          </Popup>
        </Marker>

        <Marker position={position4} icon={icons} id="map-icon">
          <Popup>
            <Image
              src={"/banner3.JPG"}
              alt="Picture of the background"
              width={100}
              height={100}
              unoptimized
              priority
            />
            Rajasthan branch of Devkinandan.
          </Popup>
        </Marker>
      </MapContainer>
      ;
    </div>
  );
};

export default Map;
