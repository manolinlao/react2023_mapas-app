import { useStore } from 'effector-react';
import { $placesStore } from '../store/placesStore';
import { Loading } from './Loading';

export const MapView = () => {
  const mapState = useStore($placesStore);
  const { isLoading, userLocation } = mapState;

  if (isLoading) {
    return <Loading />;
  }

  return <div>{userLocation?.join(',')}</div>;
};
