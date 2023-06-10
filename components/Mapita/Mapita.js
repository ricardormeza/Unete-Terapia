import React from 'react'
import 'leaflet/dist/leaflet.css'
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import * as L from 'leaflet';
import 'leaflet-defaulticon-compatibility';
import styles from  '../../styles/Mapa.module.css'

import { MapContainer, TileLayer,Marker,Popup,Polyline, CircleMarker ,useMap } from 'react-leaflet'

export default function Mapita() {
    const position=[16.762564, -93.119510]
  return (
    <MapContainer className={styles.map} center={position} zoom={17} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
            <Popup>
            UNETE. <br /> Mtra. Yeimy Rocio Avila Pontón.
            </Popup>
        </Marker>
    </MapContainer>
  )
}