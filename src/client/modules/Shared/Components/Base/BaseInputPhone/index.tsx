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


export default class BaseInputName extends React.Component<InjectProps, any> {

    public static defaultProps: Partial<InjectProps> = {
        placeholder: "0902 751 467"
    };

    constructor(props: InjectProps) {
        super(props);
        this.state = {
            value: '',
            error: initialError
        }
    }

    private _onChangePhone = (e: any) => this.setState({ value: e.target.value })

    private _onFocusPhone = (e) => this.state.error['isShowError'] ? this.setState({error: initialError}) : false

    public _onGetValue = () => this.state.value

    public showError = (msg) => this.setState({error: {isShowError: true,msg}})

    render() {
        const { name, placeholder } = this.props;
        const { value, error } = this.state;
        return (
            <div className="input-phone">
                <input
                    type="text"
                    name={name}
                    value={value}
                    onChange={this._onChangePhone}
                    placeholder={placeholder}
                    onFocus={this._onFocusPhone}
                     />
                {error['isShowError'] &&
                    <span className="error-input"><Glyphicon glyph="glyphicon glyphicon-warning-sign" /> {error['msg']}</span>
                }
            </div>
        )
    }
}