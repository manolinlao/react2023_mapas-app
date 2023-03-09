import { createEvent, createStore } from 'effector';
import { Map, Marker } from 'mapbox-gl';

export interface MapState {
  isMapReady: boolean;
  map?: Map;
  markers: Marker[];
}

const initialState: MapState = {
  isMapReady: false,
  map: undefined,
  markers: []
};

export const resetMap = createEvent('reset mapState');
export const setMap = createEvent<Map>('setMap'); // payload es de tipo Map
export const resetMarkers = createEvent('reset markers');
export const setMarkers = createEvent<Marker[]>('set markers'); // payload es de tipo <Marker[]>

// Store
console.log('ejecutando createStore de mapStore');
export const $mapStore = createStore(initialState)
  .reset(resetMap)
  .on(setMap, (state, payload) => {
    return { ...state, isMapReady: true, map: payload };
  })
  .on(resetMarkers, (state) => {
    return {
      ...state,
      markers: []
    };
  })
  .on(setMarkers, (state, payload) => {
    return {
      ...state,
      markers: [...payload]
    };
  });
