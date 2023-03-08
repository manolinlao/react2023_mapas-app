import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';

if (!navigator.geolocation) {
  alert('tu navegador no tiene geolocalización');
  throw new Error('tu navegador no tiene geolocalización');
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<MapsApp />);
