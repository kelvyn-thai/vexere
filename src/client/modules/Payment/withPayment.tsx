import * as React from 'react';
import {  compose } from "recompose";
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from './module/redux-connect';


const enhance = WrappedComponent => 
    class extends React.Component<any, any>{
        render() {
            return (
                <WrappedComponent {...this.props} />
            )
        }   
    }


export default compose<any, any>(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    enhance
)