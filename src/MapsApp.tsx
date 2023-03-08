import { useEffect } from 'react';
import { setUserLocation } from './store/placesStore';
import { getUserLocation } from './helpers/getUserLocation';
import { HomeScreen } from './screens/HomeScreen';

import './styles.css';

export const MapsApp = () => {
  useEffect(() => {
    getUserLocation()
      .then((latLng) => {
        console.log('coords  obtenidas', latLng);
        setUserLocation(latLng);
      })
      .catch((err) => {
        console.log('ERROR', err);
        console.log('asignamos una calle de gijon');
        setUserLocation([-5.658392002137566, 43.54074452794336]);
      });
  }, []);

  return (
    <div>
      <h4>MapsApp</h4>
      <hr />
      <HomeScreen />
    </div>
  );
};
