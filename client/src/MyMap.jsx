import React, { useCallback, useMemo, useState } from 'react';
import {MapContainer,TileLayer,Marker,Popup, useMap, useMapEvent, Rectangle, Pane} from 'react-leaflet'
import { useEventHandlers } from '@react-leaflet/core'
import "leaflet/dist/leaflet.css";

export default function MyMap() {

  return (
    <div>
        <h1>MyMap!</h1>
        <MapContainer
        style={{width:"50vw", height:"50vh",position:"absolute", left:"40%"}}
        attributionControl={""}
        bounds={[[32.22742446972368,34.69415274928136],[32.753175832200746,35.47955833438773]]}
        scrollWheelZoom={true}
        dragging={true}
        minZoom={1}
        maxZoom={28}
        zoom={3}
        >

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <MinimapControl position="topright" /> */}
        <Pane name="osm">

        </Pane>
      </MapContainer>     
    </div>
  )
}
