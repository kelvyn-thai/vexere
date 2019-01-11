import * as React from 'react';
import { createSelector } from "reselect";
import { connect } from "react-redux";
import {compose, mapProps} from 'recompose';
import { findCityByKey } from './helper';

const citiesSelector = createSelector(
    state => state['preLoader'].cities,
    listCities => listCities
)

const mapStateToProps = state => {
    return {
        cities: citiesSelector(state)
    }
}

const propsMapper = mapProps((props:any) => {
    const {keySearch, cities} = props;
    const {isFetched, isFetching, data} = cities;    
    let found = [];
    if(isFetched && !isFetching){
        found = findCityByKey([...data.payload], keySearch).slice(0, 5);
    }
    return {
        found,
        ...props
    }
});

const enhanced = HintLocation => {
    return class extends React.Component<any,any>{
        render() {
            const {cities, keySearch, found, onChangeLocation} = this.props
            const {isFetched, isFetching} = cities;
            if(isFetched && !isFetching){
                return (
                    <HintLocation 
                        dataFound={found} 
                        keySearch={keySearch}
                        onChangeLocation={onChangeLocation}
                        />
                )
            }
            return null;
        }
    }
}


export default compose<any, any>(
    connect(mapStateToProps),
    propsMapper,
    enhanced,
)