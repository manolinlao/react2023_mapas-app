import { useStore } from 'effector-react';
import { useLayoutEffect, useRef } from 'react';
import { $placesStore } from '../store/placesStore';
import { Loading } from './Loading';
import mapboxgl from 'mapbox-gl';

export const MapView = () => {
  const mapState = useStore($placesStore);
  const { isLoading, userLocation } = mapState;

  const mapDiv = useRef<HTMLDivElement>(null);

  // controlamos cuando el div esté ya montado
  useLayoutEffect(() => {
    if (!isLoading) {
      const map = new mapboxgl.Map({
        container: mapDiv.current!,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: userLocation,
        zoom: 14
      });
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div ref={mapDiv} style={{ backgroundColor: 'red', height: '100vh', left: 0, position: 'fixed', top: 0, width: '100vw' }}>
      {userLocation?.join(',')}
    </div>
  );
};
