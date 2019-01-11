import * as React from 'react';
import './index.scss'
const banner = require('./banner.png');

export default class LeadBanner extends React.Component<any, any>{
    render() {
        return (
            <div className="lead-banner">
                <img src={banner} />
                <div className="banner-content">
                    <span className="title">VeXeRe.com</span>
                    <span className="sub-title">The largest and the most trusted bus ticket booking platform in Vietnam</span>
                </div>
            </div>
        )
    }
}