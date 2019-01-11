import * as React from 'react';
import { compose } from "recompose";
import { connect } from "react-redux";
import { loginSelector } from 'Login/module/reselect';
import { actionUpdateInformation } from 'Login/module/actions';

const mapStateToProps = state => ({
    login: loginSelector(state)
});

const mapDispatchToProps = {
    updateInformation: actionUpdateInformation
}


const enhance = WrappedComponent =>
    class extends React.Component<any, any>{
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


