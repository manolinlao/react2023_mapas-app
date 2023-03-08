import { createEvent, createStore } from 'effector';
import { Map } from 'mapbox-gl';

export interface MapState {
  isMapReady: boolean;
  map?: Map;
}

const initialState: MapState = {
  isMapReady: false,
  map: undefined
};

export const resetMap = createEvent('reset mapState');
export const setMap = createEvent<Map>('setMap'); // payload es de tipo Map

// Store
console.log('ejecutando createStore de mapStore');
export const $mapStore = createStore(initialState)
  .reset(resetMap)
  .on(setMap, (state, payload) => {
    return { ...state, isMapReady: true, map: payload };
  });
