import React from 'react';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";


const CarteComponents = () => {
    return (
        <div>
            <MapContainer center={[-21.4742, 46.9447]} zoom={14} scrollWheelZoom={false} style={{width: "1020px", height: "618px", marginLeft: "1%"}}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                /> 
            </MapContainer>
        </div>
    );
};

export default CarteComponents;