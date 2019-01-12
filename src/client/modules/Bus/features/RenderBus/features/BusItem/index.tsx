import * as React from 'react';
import { convertTimeStampToString } from "Library/date";
import BusItemTabs from './features/BusItemTabs';
import withBusItem from './withBusItem';
import BusItemTabsBookTicket from './features/BusItemTabsBookTicket';
import WishBus from './features/BusItemWishBus';


const wifiImage = require('./assets/wifi.svg');
const waterFree = require('./assets/water.svg');
const arrow = require('./assets/from-to2.png');
const bus = require('./assets/vexere-ico.svg');

class BusItem extends React.Component<any, any>{

    constructor(props) {
        super(props);
        this.state = {
            isShowTabs: false,
            type: "",
            activeKey: 1
        }
    }

    _onShowTabsDetails = (e, activeKey) => {
        e.preventDefault();
        this.setState({
            isShowTabs: true,
            type: "more-details",
            activeKey: activeKey
        })
        const { onGetBusImage, onGetBusPlan, onGetBusCancellationPolicy, onGetBusRatings, data } = this.props;
        switch (activeKey) {
            case 1:
                {
                    if (typeof data['photos'] === "undefined" || data['photos'] === null) {
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
                    if (typeof data['comments'] === "undefined" || data['comments'] === null) {
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
                    if (typeof data['plan'] === "undefined" || data['plan'] === null) {
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
                    if (typeof data['cancellation_policy'] === "undefined" || data['cancellation_policy'] === null) {
                        const payload = {
                            id: data['_id'],
                            projection: '_id cancellation_policy'
                        }
                        onGetBusCancellationPolicy(payload);
                    }
                    break;
                }

            default:
                break;
        }
    }

    _onCloseTabsDetails = (e) => this.setState({ isShowTabs: false })

    _onBookTicket = (e) => {
        e.preventDefault();
        const { login, history, data } = this.props;
        const { isAuthenticated } = login.data;
        if (!isAuthenticated) {
            history.push({
                pathname: '/login',
                search: `redirectUrl=/find-bus`
            })
        }
        else {
            this.setState({
                isShowTabs: true,
                type: "book-ticket",
            })
        }
    }

    render() {
        const { data , login} = this.props;
        const isAuthenticated = login['data'].isAuthenticated;
        const { isShowTabs, activeKey, type } = this.state;
        const busId = data['_id'];
        const wishBuses = login['data'].wish_bus;
        const brand = data['brand'].name;
        const services = data['services'];
        const timeStart = convertTimeStampToString(data['time_start']);
        const timeEnd = convertTimeStampToString(data['time_end']);
        const arrival = data['arrival'].filter(item => item['type'] === "address")[0]['place'];
        const depature = data['depature'].filter(item => item['type'] === "address")[0]['place'];
        const busType = data['bus_type'];
        const seatRemain = data['total_tickets'] - data['tickets_booked'];
        const rating = data['rating'];
        const price = data['price_per_ticket'];
        const ratingScore = Math.round(data['rating'].score * 100 / 5);
        
        let tabsRendered = null;
        switch (type) {
            case "more-details":
                {
                    tabsRendered = <BusItemTabs activeKey={activeKey} data={data} onCloseTabsDetails={this._onCloseTabsDetails} />
                    break;
                }

            case "book-ticket":
                {
                    tabsRendered = <BusItemTabsBookTicket data={data} dataLogin={login['data']}/>
                    break;
                }
            default:
                break;
        }
        return (
            <div className="bus-item-infor">
                <div className="bus-item">
                    <div className="bus-item-column-1">
                        <h6>{brand}</h6>
                        <div>
                            {services.has_wifi_free &&
                                <img src={wifiImage} alt="wifi free" />
                            }
                            {services.has_water_free &&
                                <img src={waterFree} alt="water free" />
                            }
                        </div>
                    </div>
                    <div className="bus-item-column-2">
                        <div>
                            <h6>{timeStart}</h6>
                            <p>{depature}</p>
                        </div>
                        <div>
                            <img src={arrow} alt="from-to" />
                        </div>
                        <div>
                            <h6>{timeEnd}</h6>
                            <p>{arrival}</p>
                        </div>
                    </div>
                    <div className="bus-item-column-3">
                        <p>{busType['describe']}</p>
                        <p>Còn {seatRemain} ghế trống</p>
                    </div>
                    <div className="bus-item-column-4">
                        <div className="left-rating">
                            <div className="empty-stars"></div>
                            <div className="full-stars" style={{ width: `${ratingScore}%` }}></div>
                        </div>
                        <div className="right-rating">
                            <span className="bus-quality-rating">{rating['score']} / 5</span>
                            <span className="bus-quatity-rating">{rating['total_rating']} đánh giá</span>
                        </div>
                    </div>
                    <div className="bus-item-column-5">
                        <h6>
                            {price}
                        </h6>
                        <button className="btn-book-ticket" onClick={this._onBookTicket}>Đặt vé</button>
                    </div>
                </div>
                <div className="bus-item-details">
                    <div><a href="" onClick={(e) => this._onShowTabsDetails(e, 1)}>Hình ảnh </a></div>
                    <div><a href="" onClick={(e) => this._onShowTabsDetails(e, 2)}>Đánh giá</a></div>
                    <div><a href="" onClick={(e) => this._onShowTabsDetails(e, 3)}>Lịch trình</a></div>
                    <div><a href="" onClick={(e) => this._onShowTabsDetails(e, 4)}>Chính sách hủy vé</a></div>
                    <div className="bus-item-wish">
                        {isAuthenticated &&
                            <WishBus wishBuses={wishBuses} busId={busId} busData={data}/>
                        }
                    </div>
                </div>
                {isShowTabs &&
                    <>
                        <div className="bus-item-tabs-details" >
                            {tabsRendered}
                        </div>
                        {/* <div className="close-tabs">
                            <button onClick={this._onCloseTabsDetails}>Thu gọn</button>
                        </div> */}
                    </>
                }
                <div className="bus-item-note">
                    <p><i>*Thuộc chuyến {timeStart} {data['from'].name} -> {data['to'].name}</i></p>
                </div>
            </div>
        )
    }
}

export default withBusItem(BusItem);