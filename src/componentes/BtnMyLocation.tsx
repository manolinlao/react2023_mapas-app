import { useStore } from 'effector-react';
import { $mapStore } from '../store/mapStore';
import { $placesStore } from '../store/placesStore';

export const BtnMyLocation = () => {
  const { isMapReady, map } = useStore($mapStore);
  const { userLocation } = useStore($placesStore);

  const onClick = () => {
    if (!isMapReady) {
      throw new Error('mapa not ready');
    }
    if (!userLocation) {
      throw new Error('no hay location de usuario');
    }

    map?.flyTo({
      zoom: 14,
      center: userLocation
    });
  };

  return (
    <button className='btn btn-primary' style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 999 }} onClick={onClick}>
      Mi ubicacion
    </button>
  );
};
