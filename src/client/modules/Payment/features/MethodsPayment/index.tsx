import * as React from 'react';
import { PanelGroup, Panel } from 'react-bootstrap';
import InternationalsCard from './InternationalCards';


class MethodsPayment extends React.Component<any, any>{
    
    render() {
        const { onPaymentTicketsBooked } = this.props;
        return (
            <PanelGroup accordion id="payment-panel">
                <Panel eventKey="1">
                    <Panel.Heading>
                        <Panel.Title toggle>
                            <span className="option-internation-card">
                                Thanh toán bằng thẻ quốc tế
                            </span>
                        </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>
                       <InternationalsCard/>
              </Panel.Body>
                </Panel>
                <Panel eventKey="2">
                    <Panel.Heading>
                        <Panel.Title toggle>
                            <span className="option-atm-card">Thanh toán bằng thẻ ATM đã đăng kí trực tuyến</span>
                        </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                        dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                        moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                        butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                        aesthetic synth nesciunt you probably haven't heard of them accusamus
                        labore sustainable VHS.
              </Panel.Body>
                </Panel>
                <Panel eventKey="3">
                    <Panel.Heading>
                        <Panel.Title toggle>
                            <span className="option-on-site">Thanh toán trực tiếp tại nhà xe</span>
                        </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                        dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                        moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                        butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                        aesthetic synth nesciunt you probably haven't heard of them accusamus
                        labore sustainable VHS.
              </Panel.Body>
                </Panel>
                <Panel eventKey="4">
                    <Panel.Heading>
                        <Panel.Title toggle>
                            <span className="option-transfer">
                                Thanh toán bằng cách chuyển khoảng ngân hàng
                    </span>
                        </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                        dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                        moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                        butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                        aesthetic synth nesciunt you probably haven't heard of them accusamus
                        labore sustainable VHS.
              </Panel.Body>
                </Panel>
                <Panel eventKey="5">
                    <Panel.Heading>
                        <Panel.Title toggle>
                            <span className="option-shop"> Thanh toán tiền mặt tại các cửa hàng tiện lợi, siêu thị gần địa chỉ bạn</span>
                        </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                        dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                        moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                        butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                        aesthetic synth nesciunt you probably haven't heard of them accusamus
                        labore sustainable VHS.
              </Panel.Body>
                </Panel>
            </PanelGroup>
        )
    }
}


export default MethodsPayment;