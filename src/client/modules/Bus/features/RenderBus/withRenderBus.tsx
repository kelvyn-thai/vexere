import * as React from 'react';
import { compose } from 'recompose';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from './module/redux-connect';
import { ScaleLoader } from "react-spinners";
import EmptyBus from './features/EmptyBus';

const enhanced = WrappedComponent =>
    class extends React.Component<any, any>{

        loadmoreBus = (page) => {
            const { totalPages, limit } = this.props['findBus'].data;
            const { data } = this.props['searchForm'];
            if (page <= totalPages) {
                const payload = {
                    ...data,
                    options: {
                        ...data.options,
                        page,
                        limit
                    }
                }
                this.props.onLoadmoreBus(payload);
            }
        }

        render() {
            const { isFetched, isFetching, isError, data } = this.props['findBus'];
            const route = this.props['searchForm'].data;
            if (isFetched && !isFetching) {
                if (data['results'].length > 0) {
                    return (
                        <WrappedComponent loadmoreBus={this.loadmoreBus} {...this.props} />
                    )
                }
            }
            else if (isFetching && !isFetched) {
                return (<ScaleLoader
                    className="spinner"
                    color='#2C46AC'
                />)
            }
            else if(isError){
                return <EmptyBus/>
            }
            return null;

        }
    }

export default compose<any, any>(
    connect(mapStateToProps, mapDispatchToProps),
    enhanced
)