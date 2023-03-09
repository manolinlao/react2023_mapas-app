import { useStore } from 'effector-react';
import { $placesStore } from '../store/placesStore';
import { LoadingPlaces } from './LoadingPlaces';
import { Feature } from '../interfaces/interfaces';
import { $mapStore } from '../store/mapStore';
import { useState } from 'react';

export const SearchResults = () => {
  const { places, isLoadingPlaces } = useStore($placesStore);
  const { map } = useStore($mapStore);

  const [activeId, setActiveId] = useState('');

  const onPlaceClicked = (place: Feature) => {
    setActiveId(place.id);

    const [lng, lat] = place.center;
    map?.flyTo({
      zoom: 14,
      center: [lng, lat]
    });
  };

  if (isLoadingPlaces) {
    return <LoadingPlaces />;
  }

  return (
    <ul className='list-group mt-3'>
      {places.map((place) => (
        <li
          key={place.id}
          className={`list-group-item list-group-item-action pointer ${activeId === place.id && 'active'}`}
          onClick={() => onPlaceClicked(place)}
        >
          <h6>{place.text_es}</h6>
          <p style={{ fontSize: '12px' }}>{place.place_name}</p>
          <button className={`btn btn-sm ${activeId === place.id ? 'btn-outline-light' : 'btn-outline-primary'}`}>Direcciones</button>
        </li>
      ))}
    </ul>
  );
};
