import * as React from 'react';
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { connect } from "react-redux";
import { loginSelector } from 'Login/module/reselect';

const mapStateToProps = state => ({
    login: loginSelector(state)
})

// const mapDispatchToProps = {
//     reqFetchUserData: 
// }


const enhance = WrappedComponent =>
    class extends React.Component<any, any> {
        componentDidUpdate(prevProps) {
            const { isFetched, data } = this.props['login'];
            if(prevProps['login'].isFetching && isFetched && !data['isAuthenticated']){
                this.props.history.replace('/')
            }
        }
        render() {
            const { isFetched, data} = this.props['login'];
            if (isFetched && data['isAuthenticated']) {
                return <WrappedComponent {...this.props} />
            }
            return null;
        }

    }
export default compose<any, any>(
    withRouter,
    connect(mapStateToProps, null),
    enhance
)