import * as React from 'react';
import { compose } from "recompose";
import { connect } from "react-redux";
import { mapStateToProps, mapDisPatchToProps } from "./module/redux-connect";
import { IPropsHOC,InjectProps } from './module/interface';
import {  withRouter } from "react-router";


const enhancedFindBus = FindBus => {
    return class extends React.Component<IPropsHOC, any>{

        onFindBus = (e : any) => {
            e.preventDefault();
            const { match, history, findBus, bus } = this.props; 
            const data =  {
                ...bus.searchForm.data
            };
            findBus(data);
            switch(match.path){
                case "/" :
                    history.push('/find-bus');
                    break;
                case "/find-bus":
                    break;
                default:
                    break;   
            }
        }

        componentDidMount() {
            const { fetchListCities, cities } = this.props;
            if(!cities.isFetched){
                fetchListCities();
            }
        }
        render() {
            const { isFetched } = this.props.cities;
            if (isFetched) {
                return <FindBus onFindBus={this.onFindBus} {...this.props} />
            }
            return null;
        }
    }
}

export default compose<InjectProps, any>(
    withRouter,
    connect(mapStateToProps, mapDisPatchToProps),
    enhancedFindBus
)