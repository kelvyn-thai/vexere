import * as React from 'react';
import { Tabs, Tab } from "react-bootstrap";
import withBusItemTabs from './withBusItemTabs';
import BusItemImages from './features/BusItemImages';
import BusItemRatings from './features/BusItemRatings';
import BusItemPlan from './features/BusItemPlan';
import BusItemCancelPolicy from './features/BusItemCancelPolicy';

class BusItemTabs extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            activeKey: 0
        }
    }


    componentDidMount() {
        const { activeKey } = this.props;
        this.setState({
            activeKey: activeKey
        })
    }

    componentDidUpdate(prevProps) {
        const { activeKey: activedKey } = prevProps;
        const { activeKey } = this.props;
        if (activeKey !== activedKey) {
            this.setState({
                activeKey
            })
        }
    }


    onSelectedTabs = (activeKey) => {
        this.setState({ activeKey });
        const {onCloseTabsDetails, onGetBusImage, onGetBusPlan, onGetBusCancellationPolicy, onGetBusRatings, data } = this.props;
        switch (activeKey) {
            case 1:
                {
                    if(typeof data['photos'] === "undefined" || data['photos'] === null){
                        const payload = {
                            id: data['_id'],
                            projection: '_id photos'
                        }
                        onGetBusImage(payload);
                    }
                    break;
                }
            case 2:
                {
                    if(typeof data['comments'] === "undefined" || data['comments'] === null){
                        const payload = {
                            id: data['_id'],
                            projection: '_id comments'
                        }
                        onGetBusRatings(payload);
                    }
                    break;
                }
            case 3:
                {
                    if(typeof data['plan'] === "undefined" || data['plan'] === null){
                        const payload = {
                            id: data['_id'],
                            projection: '_id plan'
                        }
                        onGetBusPlan(payload);
                    }
                    break;
                }

            case 4:
                {
                    if(typeof data['cancellation_policy'] === "undefined" || data['cancellation_policy'] === null){
                        const payload = {
                            id: data['_id'],
                            projection: '_id cancellation_policy'
                        }
                        onGetBusCancellationPolicy(payload);
                    }
                    break;
                }
            case 5:
            {
                onCloseTabsDetails();
            }
            default:
                break;
        }
    }

    render() {
        const { data } = this.props;
        const id = data['_id'];

        return (
            <Tabs
                style={{position: 'relative'}}
                defaultActiveKey={1}
                activeKey={this.state.activeKey}
                onSelect={this.onSelectedTabs}
                id={id}
            >
                <Tab eventKey={1} title="Hình ảnh"><BusItemImages photos={data['photos']}/></Tab>
                <Tab eventKey={2} title="Đánh giá"><BusItemRatings comments={data['comments']} brand={data['brand']}  rating={data['rating']}/></Tab>
                <Tab eventKey={3} title="Lịch trình"><BusItemPlan plan={data['plan']} /></Tab>
                <Tab eventKey={4} title="Chính sách hủy vé"><BusItemCancelPolicy cancellation_policy={data['cancellation_policy']}/></Tab>
                <Tab eventKey={5} title="X" tabClassName="nav-close-tabs"></Tab>
            </Tabs>
        )
    }
}



export default withBusItemTabs(BusItemTabs);