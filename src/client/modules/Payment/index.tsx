import * as React from 'react';
import Header from 'BaseComponent/Header';
import Footer from 'BaseComponent/Footer';
import MethodsPayment from './features/MethodsPayment';
import Information from './features/Information';
import withPayment from './withPayment';
import './index.scss';

class Payment extends React.Component<any, any>{
    render() {
        const { login, ticket } = this.props;
        return (
            <div className="conttainer-fluid">
                <Header />
                <div className="payment">
                    <div className="payment-methods">
                        <MethodsPayment />
                    </div>
                    <div className="payment-information">
                        <Information loginData={login['data']} ticketData={ticket['data']} />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withPayment(Payment);