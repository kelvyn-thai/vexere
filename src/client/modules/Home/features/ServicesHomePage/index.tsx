import * as React from 'react';
import './index.scss';

export default class ServicesHomePage extends React.Component<any, any>{
    render() {
        return (
            <div className="services-home-page">
                <h1>Mua vé trực tuyến tiện lợi, không cần chờ đợi</h1>
                <p></p>
                <ul>
                    <li>
                        <img src={require("./icon-kpi-road.svg")} />
                        <a href="#">5.000+<br />Tuyến đường</a>
                    </li>
                    <li>
                        <img src={require("./icon-kpi-bus.svg")} />
                        <a href="#">2.000+<br />Nhà xe</a>
                    </li>
                    <li>
                        <img src={require("./icon-kpi-ticket.svg")} />
                        <a href="#">5.000+<br />Đại lý bán vé</a>
                    </li>
                </ul>
            </div>
        )
    }
}