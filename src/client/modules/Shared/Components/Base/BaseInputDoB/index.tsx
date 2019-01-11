import * as React from 'react';
import DatePicker from "react-datepicker";
import './index.scss';
import { Glyphicon } from 'react-bootstrap';

interface InjectProps {
    defaultValue?: any,
    placeholder?: string,
    name?: string,
}

const initialError = {
    isShowError: false,
    msg: ''
}

export default class BaseInputDoB extends React.Component<InjectProps, any> {

    public static defaultProps: Partial<InjectProps> = {
        placeholder: "Enter your date of birth"
    };

    constructor(props: InjectProps) {
        super(props);
        this.state = {
            value:  null,
            error: initialError
        }
    }

    componentDidMount() {
        const { defaultValue } = this.props;
        if(defaultValue) {
            this.setState({
                value: defaultValue
            })
        }
    }
    
    private _onChangeDoB = (date: any) => this.setState({ value: date })

    private _onFocusDoB = (e) => this.state.error['isShowError'] ? this.setState({ error: initialError }) : false

    public _onGetValue = () => new Date(this.state.value).getTime()

    public showError = (msg) => this.setState({error: {isShowError: true,msg}})


    render() {
        const { placeholder } = this.props;
        const { value, error } = this.state;
        const minDate: any = new Date('1900-1-1');
        const maxDate: any = new Date();
        return (
            <div className="input-dob">
                <DatePicker
                    selected={value}
                    onFocus={this._onFocusDoB}
                    onChange={this._onChangeDoB}
                    placeholderText={placeholder}
                    dateFormat="dd-MM-YYYY"
                    minDate={minDate}
                    maxDate={maxDate}
                />
                {error['isShowError'] &&
                    <span className="error-input"><Glyphicon glyph="glyphicon glyphicon-warning-sign" /> {error['msg']}</span>
                }
            </div>
        )
    }
}