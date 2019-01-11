import { createSelector } from "reselect";


const cities = (state: any) => state['preLoader'].cities;

export const createCitiesSelector = createSelector(
    cities,
    listCities => listCities
)
