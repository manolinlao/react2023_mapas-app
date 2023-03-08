import { createEvent, createStore } from 'effector';

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
}

const initialState: PlacesState = {
  isLoading: true,
  userLocation: undefined
};

// Events
export const resetPlaces = createEvent('reset placeState');
export const setUserLocation = createEvent<[number, number]>('set user location');

// Effects

// Store
export const $placesStore = createStore(initialState)
  .reset(resetPlaces)
  .on(setUserLocation, (state, payload) => {
    return { ...state, isLoading: false, userLocation: payload };
  });
