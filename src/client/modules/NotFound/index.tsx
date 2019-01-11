import * as React from 'react';
import Header from 'BaseComponent/Header';
import Footer from 'BaseComponent/Footer';
import './index.scss';

export default class NotFound extends React.Component<any, any> {
    render() {
        return (
            <div className="not-found">
                <Header />
                <div className="block-not-found">
                    <img src={require('./63739480-oops-page-not-found-concept-funny-cartoon-man-in-the-bathroom-washing-in-the-bath-tub-404-error-.jpg')} alt="" />
                </div>
                <Footer />
            </div>
        )
    }
}