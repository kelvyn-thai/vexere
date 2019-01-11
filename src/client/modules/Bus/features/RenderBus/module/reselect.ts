import {createSelector}from 'reselect';

const findBus = state => state['bus'].findBus;

export const createFindBusSelector = createSelector(
    findBus,
    state => state
)

const searchForm = state => state['bus'].searchForm;

export const createSearchFormSelector = createSelector(
    searchForm,
    state=>state
)