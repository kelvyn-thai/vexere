import * as React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { filterByOneField } from "Library/filter";
import { convertTimeStampToHours } from "Library/date";

const RenderListMethodMovement = ({ listMethod, selected, onChangePlace }) => {

    const address = filterByOneField(listMethod, "type", "address");
    const transship = filterByOneField(listMethod, "type", "transship");

    return (
        <>
            <p>Điểm đón:</p>
            <ul>
                {address.map((option) => <li key={option['id']}><label><input type="radio" value={JSON.stringify(option)} checked={option['id'] === selected} onChange={(e) => onChangePlace(e.target.value)} />  {convertTimeStampToHours(option['time'])} - {option['place']}</label></li>)}
            </ul>
            <p>Chọn địa điểm trung chuyển:</p>
            <ul>
                {transship.map((option) => <li key={option['id']}><label><input type="radio" value={JSON.stringify(option)} checked={option['id'] === selected} onChange={(e) => onChangePlace(e.target.value)} />  {convertTimeStampToHours(option['time'])} - {option['place']}</label></li>)}
            </ul>
        </>
    )
}


class MethodMovement extends React.Component<any, any>{

    constructor(props) {
        super(props);
        this.state = {
            activeKey: 1
        }
    }

    handleSelectTab = (activeKey) => this.setState({ activeKey })

    render() {
        const { activeKey } = this.state;
        const { id, depature, arrival, ticket, onChangeDepature, onChangeArrival } = this.props;
        return (
            <div className="bus-item-tabs-details-book-ticket-content-col-2">
                <Tabs
                    activeKey={activeKey}
                    onSelect={this.handleSelectTab}
                    id={id}
                >
                    <Tab eventKey={1} title='Điểm đi'>
                        <RenderListMethodMovement listMethod={depature} selected={ticket['depature'].id} onChangePlace={onChangeDepature} />
                    </Tab>
                    <Tab eventKey={2} title='Điểm đến'>
                        <RenderListMethodMovement listMethod={arrival} selected={ticket['arrival'].id} onChangePlace={onChangeArrival} />
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

export default MethodMovement;