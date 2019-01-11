import * as React from 'react';
import './index.scss';
import { Glyphicon } from 'react-bootstrap';

interface InjectProps {
    defaultValue?: string,
    placeholder?: string,
    name?: string,
}

const initialError = {
    isShowError: false,
    msg: ''
}


export default class BaseInputName extends React.Component<InjectProps, any> {

    private input: any = React.createRef();

    public static defaultProps: Partial<InjectProps> = {
        placeholder: "0902 751 467"
    };

    constructor(props: InjectProps) {
        super(props);
        this.state = {
            error: initialError
        }
        this.input = React.createRef();
    }

    private _onChangePhone = (e: any) => this.setState({ value: e.target.value })

    private _onFocusPhone = (e) => this.state.error['isShowError'] ? this.setState({ error: initialError }) : false

    private _onGetValue = () => this.input.current.value;

    private _onRefesh = (e) => this.state.error['isShowError'] ? this.setState({ error: initialError }) : false

    public showError = (msg) => this.setState({ error: { isShowError: true, msg } })

    render() {
        const { name, placeholder, defaultValue } = this.props;
        const { error } = this.state;
        return (
            <div className="input-phone">
                <input
                    ref={this.input}
                    type="text"
                    name={name}
                    defaultValue={defaultValue}
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