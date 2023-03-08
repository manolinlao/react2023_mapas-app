import { BtnMyLocation } from '../componentes/BtnMyLocation';
import { MapView } from '../componentes/MapView';

export const HomeScreen = () => {
  return (
    <div>
      <MapView />
      <BtnMyLocation />
    </div>
  );
};
