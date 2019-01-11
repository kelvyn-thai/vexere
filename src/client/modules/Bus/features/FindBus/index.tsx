import * as React from 'react';
import withFindBus from "./withFindBus";
import BaseInputLocation from 'BaseComponent/BaseInputLocation';
import BaseInputDate from 'BaseComponent/BaseInputDate';
import { InjectProps } from './module/interface';
import * as _ from 'lodash';


class FindBus extends React.Component<InjectProps, any> {


    render() {
        const { changeFromLocation,changeToLocation, changeDateLocation, title, onFindBus } = this.props;
        const { from, to, time_start } = this.props.bus.searchForm.data.conditions;
        return (
            <div className="search-form">
                <h1>{title}</h1>
                <div className="location-select-row">
                    <BaseInputLocation
                        value={from.name}
                        onChangeLocation={changeFromLocation}
                        placeholder="Gõ vào nơi đi"
                    />
                    <div className="btn-switch"></div>
                    <BaseInputLocation
                        value={to.name}
                        placeholder="Gõ vào nơi đến"
                        onChangeLocation={changeToLocation}
                    />
                </div>
                <div className="date-select-row">
                    <BaseInputDate
                        value={time_start}
                        placeholder="Chọn ngày đi"
                        onChangeDate={changeDateLocation}
                    />
                </div>
                <div className="btn-find-bus">
                    <a href="/" onClick={onFindBus}>TÌM VÉ XE RẺ</a>
                </div>
            </div>
        )
    }
}

export default withFindBus(FindBus);