import * as React from 'react';
import { connect } from "react-redux";
import { compose } from "recompose";
import { mapStateToProps, mapDispatchToProps } from './module/redux-connect';


const enhance = WrappedComponent =>
    class extends React.Component<any, any> {
        render() {
            return (
                <WrappedComponent {...this.props} />
            )
        }
    }

export default compose<any, any>(
    connect(mapStateToProps, mapDispatchToProps),
    enhance
)    