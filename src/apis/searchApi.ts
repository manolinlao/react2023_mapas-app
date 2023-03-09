// un query sería esto:
// https://api.mapbox.com/geocoding/v5/mapbox.places/28.69313352580633,41.066249634603594.json
// ?limit=1&types=place%2Cpostcode%2Caddress&language=es&
// access_token=pk.eyJ1IjoibWFnZGllbG1zIiwiYSI6ImNreXB6ZXJ1azBjeXEybnMyYm01bHk0aHAifQ.8iVI9ERFXi5ET09QbKJcww
// en postman lo ejecutamos con GET y copiamos la respuesta
// la respuesta la pasamos por app.quicktype.io para obtener el tipado

import axios from 'axios';

export const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    limit: 5,
    language: 'es',
    access_token: 'pk.eyJ1IjoibWFnZGllbG1zIiwiYSI6ImNreXB6ZXJ1azBjeXEybnMyYm01bHk0aHAifQ.8iVI9ERFXi5ET09QbKJcww'
  }
});
