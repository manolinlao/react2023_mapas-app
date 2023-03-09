import { useStore } from 'effector-react';
import { useLayoutEffect, useRef, useEffect } from 'react';
import { $placesStore } from '../store/placesStore';
import { Loading } from './Loading';
import mapboxgl, { Popup } from 'mapbox-gl';
import { setMap, resetMarkers, $mapStore, setMarkers } from '../store/mapStore';
import { Marker } from 'mapbox-gl';

export const MapView = () => {
  const placesState = useStore($placesStore);
  const { isLoading, userLocation, places } = placesState;
  const { map, markers } = useStore($mapStore);

  const mapDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    markers.forEach((marker) => marker.remove());
    resetMarkers();
    const newMarkers: Marker[] = [];
    for (const place of places) {
      const [lng, lat] = place.center;
      const popup = new Popup().setHTML(`<h6>${place.text_es}</h6><p>${place.place_name}</p>`);
      const newMarker: Marker = new Marker().setPopup(popup).setLngLat([lng, lat]).addTo(map!);
      newMarkers.push(newMarker);
    }
    setMarkers(newMarkers);
  }, [places]);

  // controlamos cuando el div esté ya montado
  useLayoutEffect(() => {
    if (!isLoading) {
      const map = new mapboxgl.Map({
        container: mapDiv.current!,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: userLocation,
        zoom: 14
      });

      // ponemos un marker en la posición y con un popup
      const myLocationPopup = new Popup().setHTML(`<h4>Aquí estoy</h4><p>en algún lugar del mundo</p>`);
      new Marker({ color: '#61dafb' }).setPopup(myLocationPopup).setLngLat(map.getCenter()).addTo(map);
      // guardamos el mapa en el store de mapas
      console.log('llamando a stup map');
      setMap(map);
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
