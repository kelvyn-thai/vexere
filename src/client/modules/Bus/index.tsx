import * as React from 'react';
import FindBus from "./features/FindBus";
import RenderBus from "./features/RenderBus";
import Header from 'BaseComponent/Header';
import Footer from 'BaseComponent/Footer';
import './index.scss';
import FilterBus from './features/FilterBus';

class Bus extends React.Component<any, any> {

    render() {
        return (
            <div className="bus-page">
                <Header />
                <FindBus title="" />
                <FilterBus />
                <RenderBus />
                <Footer />
            </div>
        )
    }
}


export default Bus;