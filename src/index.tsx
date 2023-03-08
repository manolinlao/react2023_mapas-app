import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';

import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoibWFnZGllbG1zIiwiYSI6ImNreXB6ZXJ1azBjeXEybnMyYm01bHk0aHAifQ.8iVI9ERFXi5ET09QbKJcww';

if (!navigator.geolocation) {
  alert('tu navegador no tiene geolocalización');
  throw new Error('tu navegador no tiene geolocalización');
}

console.log('index.tsx');
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<MapsApp />);
