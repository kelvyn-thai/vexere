import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { mapStateToProps, mapDispatchToProps } from 'Payment/module/redux-connect';

const enhance =  WrappedComponent => 
    class extends React.Component<any, any> {
        render() {
            return (
                <WrappedComponent  {...this.props}/>
            )
        }
    }


export default compose<any, any>(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    enhance
)