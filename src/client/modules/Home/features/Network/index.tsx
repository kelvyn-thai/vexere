import * as React from 'react';
import './index.scss'; 

export default class Network extends React.Component<any, any>{
    render() {
        return (
            <div className="network">
                <h1>Mạng lưới nhà xe</h1>
                <ul>
                    <li><img src={require("./nx-002.jpg")} /></li>
                    <li><img src={require("./nx-003.jpg")} /></li>
                    <li><img src={require("./nx-hoang-long.jpg")} /></li>
                    <li><img src={require("./xe-phuong-trang.jpg")} /></li>
                </ul>
            </div>
        )
    }
}