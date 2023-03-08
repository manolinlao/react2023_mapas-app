import { BtnMyLocation } from '../componentes/BtnMyLocation';
import { MapView } from '../componentes/MapView';
import { SearchBar } from '../componentes/SearchBar';

export const HomeScreen = () => {
  return (
    <div>
      <MapView />
      <BtnMyLocation />
      <SearchBar />
    </div>
  );
};
