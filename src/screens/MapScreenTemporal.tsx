import { useStore } from 'effector-react';
import { stringify } from 'querystring';
import { $placesStore } from '../store/placesStore';

export const MapScreenTemporal = () => {
  const mapState = useStore($placesStore);
  console.log('MapScreenTemporal', mapState);
  const { isLoading, userLocation } = mapState;

  return (
    <div>
      <h4>Temporal</h4>
      <div>isloading: {isLoading ? 'true' : 'false'}</div>
      <div>{userLocation ? userLocation : 'undefined'}</div>
    </div>
  );
};
