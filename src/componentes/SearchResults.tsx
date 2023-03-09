import { useStore } from 'effector-react';
import { $placesStore } from '../store/placesStore';
import { LoadingPlaces } from './LoadingPlaces';

export const SearchResults = () => {
  const { places, isLoadingPlaces } = useStore($placesStore);

  if (isLoadingPlaces) {
    return <LoadingPlaces />;
  }

  return (
    <ul className='list-group mt-3'>
      {places.map((place) => (
        <li key={place.id} className='list-group-item list-group-item-action'>
          <h6>{place.text_es}</h6>
          <p className='text-muted' style={{ fontSize: '12px' }}>
            {place.place_name}
          </p>
          <button className='btn btn-outline-primary btn-sm'>Direcciones</button>
        </li>
      ))}
    </ul>
  );
};
