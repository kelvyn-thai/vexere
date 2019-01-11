import * as React from "react";
import { compose } from "recompose";
import { mapStateToProps, mapDispatchToProps } from "./module/redux-connect";
import { connect } from "react-redux";
import * as _ from "lodash";

const enhance = WrappedComponet =>
    class extends React.Component<any, any>{

        componentDidMount() {
            const { from, to } = this.props.searchForm.data.conditions;
            if(
                !_.isEmpty(from) && 
                !_.isEmpty(to)
                ){
                    const params = {
                        conditions: {
                            route: [{from, to}]
                        },
                        projection: '_id code name routes'
                    }
                    this.props.fetchBrand(params);
            }   
        }

        componentDidUpdate(prevProps) {
            const { from, to } = this.props.searchForm.data.conditions;
            const { from: prevFrom, to: prevTo } = prevProps.searchForm.data.conditions;
            if(
                !_.isEmpty(from) && 
                !_.isEmpty(to) &&
                (prevFrom.code !== from.code || prevTo.code !== to.code)
                ){
                    const params = {
                        conditions: {
                            route: [{from, to}]
                        },
                        projection: '_id code name routes'
                    }
                    this.props.fetchBrand(params);
            }
        }

        render() {
            const { isFetched, isFetching } = this.props.brand;
            if (isFetched && !isFetching) {
                return (
                    <WrappedComponet {...this.props} />
                )
            }
            return null;
        }
    }

export default compose<any, any>(
    connect(mapStateToProps, mapDispatchToProps),
    enhance
)
