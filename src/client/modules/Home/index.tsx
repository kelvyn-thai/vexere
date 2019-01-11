import * as React from 'react';
import './index.scss';
import Header from 'BaseComponent/Header';
import Footer from 'BaseComponent/Footer';
import FindBus from 'Bus/features/FindBus';
import LeadBanner from './features/LeadBanner';
import ServicesHomePage from './features/ServicesHomePage';
import Network from './features/Network';


export default class Home extends React.Component<any, any> {

    render() {
        return (
            <div className="home-page">
                <Header />
                <FindBus title='VeXeRe.com Hệ thống vé xe lớn nhất Việt Nam' />
                <LeadBanner />
                <ServicesHomePage />
                <Network />
                <Footer />
            </div>
        )
    }
}