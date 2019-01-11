import * as React from 'react';
import { actionLogout } from "Login/module/actions";
import { compose } from "recompose";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginSelector } from 'Login/module/reselect';


const mapStateToProps = state => ({
    login: loginSelector(state)
})

const mapDispatchToProps = {
    logout: actionLogout
}

const enhance = WrappedComponent => 
    class extends React.Component<any, any> {
        render(){
            return(
                <WrappedComponent {...this.props}/>
            )
        }
    }

export default compose<any, any>(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    enhance
)