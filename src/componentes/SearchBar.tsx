import { ChangeEvent, useRef } from 'react';
import { searchPlacesByTermFx, setLoadingPlaces } from '../store/placesStore';
import { SearchResults } from './SearchResults';
export const SearchBar = () => {
  console.log('SearchBar');
  const debounceRef = useRef<NodeJS.Timeout>();

  const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
    // implementación de un debounce manual
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      //TODO: buscar o ejecutar consulta
      console.log('debounced value', event.target.value);
      setLoadingPlaces();
      searchPlacesByTermFx(event.target.value);
    }, 400);
  };

  return (
    <div className='search-container'>
      <input type='text' className='form-control' placeholder='busca lugar...' onChange={onQueryChanged} />
      <SearchResults />
    </div>
  );
};
