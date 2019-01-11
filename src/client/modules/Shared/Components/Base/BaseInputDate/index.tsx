import * as React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './index.scss';

interface InjectProps {
    value?: any,
    placeholder?: string,
    name?: string,
    onChangeDate: (payload: any) => ({type: string, action: any})
}

interface InjectState {
    value: any
}

export default class BaseInputDate extends React.Component<InjectProps, InjectState> {

    constructor(props: InjectProps) {
        super(props);
        this.state = {
            value: props.value ? props.value : 0
        }
    }

    private _onChangeText = (date: any) => {
        this.setState({
            value: date
        })
        this.props.onChangeDate(date)
    }

    public _onGetValue = () => new Date( this.state.value).getTime()


    render() {
        const { placeholder } = this.props;
        const { value } = this.state;
        const minDate : any = new Date();
        const maxDate : any = new Date('2050-1-1');
        return (
            <div className="input-date">
                <DatePicker 
                    selected={value} 
                    onChange={this._onChangeText} 
                    placeholderText={placeholder}
                    dateFormat="HH:mm dd-MM-YYYY"
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={60}
                    minDate={minDate}
                    maxDate={maxDate}
                    />
            </div>
        )
    }
}