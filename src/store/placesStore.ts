import { createEffect, createEvent, createStore } from 'effector';
import { searchApi } from '../apis/searchApi';
import { Feature, PlacesResponse } from '../interfaces/interfaces';

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
  isLoadingPlaces: boolean;
  places: Feature[];
}

const initialState: PlacesState = {
  isLoading: true,
  userLocation: undefined,
  isLoadingPlaces: false,
  places: []
};

// Events
export const resetPlaces = createEvent('reset placeState');
export const setUserLocation = createEvent<[number, number]>('set user location'); // el payload es de tipo [number,number]
export const setLoadingPlaces = createEvent('set loading places');

// Effects
export const searchPlacesByTermFx = createEffect('search places by term');
searchPlacesByTermFx.use(async (query: any) => {
  console.log('searchPlacesBytemFx', query);
  if (query.length === 0) return [];
  //const resp = await searchApi.get(`/${query}.json`, { params: { proximity: state.userLocation.join(',') } });
  //TODO: como obtenemos datos el state aqui????
  const resp = await searchApi.get<PlacesResponse>(`/${query}.json`);
  console.log(resp.data.features[0]);
  return resp.data.features;
});

// Store
console.log('ejecutando createStore de placeStore');
export const $placesStore = createStore(initialState)
  .reset(resetPlaces)
  .on(setUserLocation, (state, payload) => {
    return { ...state, isLoading: false, userLocation: payload };
  })
  .on(setLoadingPlaces, (state) => {
    return {
      ...state,
      isLoadingPlaces: true,
      places: []
    };
  })
  .on(searchPlacesByTermFx.done, (state, payload) => {
    //TODO:me hago la picha un lio con los tipados de esto, asi que hago esta chapuza
    // se que payload.result es un Feature[]
    const arrayFeatures = payload.result as Feature[];

    console.log('done', payload.result);
    return {
      ...state,
      isLoadingPlaces: false,
      places: [...arrayFeatures]
    };
  });
