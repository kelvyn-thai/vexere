import * as React from 'react';
import './index.scss';
import { Glyphicon } from 'react-bootstrap';

interface InjectProps {
    defaultValue?: string,
    placeholder?: string,
    name?: string,
}

const initialError=  {
    isShowError: false,
    msg: ''
}


export default class BaseInputEmail extends React.Component<InjectProps, any> {

    public static defaultProps: Partial<InjectProps> = {
        placeholder: "Ex abc@gmail.com"
    };

    constructor(props: InjectProps) {
        super(props);
        this.state = {
            value: '',
            error: initialError
        }
    }

    private _onChangeEmail = (e: any) => this.setState({ value: e.target.value })

    private _onFocusEmail = (e) => this.state.error['isShowError'] ? this.setState({error: initialError}) : false

    public _onGetValue = () => this.state.value

    public showError = (msg) => this.setState({
        error: {
            isShowError: true,
            msg
        }
    })

    render() {
        const { name, placeholder } = this.props;
        const { value, error } = this.state;
        return (
            <div className="input-email">
                <input
                    type="email"
                    name={name}
                    value={value}
                    onChange={this._onChangeEmail}
                    placeholder={placeholder}
                    onFocus={this._onFocusEmail}
                     />
                {error['isShowError'] &&
                    <span className="error-input"><Glyphicon glyph="glyphicon glyphicon-warning-sign" /> {error['msg']}</span>
                }
            </div>
        )
    }
}