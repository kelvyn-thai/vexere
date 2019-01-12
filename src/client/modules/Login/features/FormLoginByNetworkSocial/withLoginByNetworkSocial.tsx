import * as React from 'react';
import { loginSelector } from 'Login/module/reselect';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actionRequestLoginByGoogle, actionRequestLoginByFacebook } from 'Login/module/redux-thunk';

const mapStateToProps = state => ({
    login: loginSelector(state)
})

const mapDispatchToProps = {
    loginByGoogle: actionRequestLoginByGoogle,
    loginByFacebook: actionRequestLoginByFacebook
}


const enhance =  WrappedComponent =>
    class extends React.Component<any, any> {
        render() {
            return (
                <WrappedComponent {...this.props} />
            )
        }
    }
export default compose<any, any> (
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    enhance
)