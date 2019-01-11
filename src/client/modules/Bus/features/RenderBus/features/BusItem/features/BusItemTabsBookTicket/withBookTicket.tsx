import * as React from 'react';
import { compose } from 'recompose';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./module/redux-connect";
import { withRouter } from 'react-router';

const enhanced = WrappedComponent =>
    class extends React.Component<any, any>{

        componentDidMount() {
            const { onGetBusTicket, data } = this.props;
            if (typeof data['tickets'] === "undefined" || data['tickets'] === null) {
                const payload = {
                    id: data['_id'],
                    projection: '_id tickets'
                }
                onGetBusTicket(payload);
            }
        }

        render() {
            const { tickets } = this.props.data;
            if (tickets) {
                return (
                    <WrappedComponent {...this.props} />
                )
            }
            return null;
        }
    }


export default compose<any, any>(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    enhanced
)