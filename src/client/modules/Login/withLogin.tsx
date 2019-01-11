import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'recompose';
import { mapStateToProps, mapDispatchToProps } from './module/redux-connect';

const enhanced = WrappedComponent =>
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
    enhanced
)