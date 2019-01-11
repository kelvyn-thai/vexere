import * as React from 'react';
import './index.scss';
import { Glyphicon } from 'react-bootstrap';

interface InjectProps {
    defaultValue?: string,
    placeholder?: string,
    name?: string,
    isDisabled?: boolean
}

const initialError=  {
    isShowError: false,
    msg: ''
}


export default class BaseInputEmail extends React.Component<InjectProps, any> {

    private input: any = React.createRef();

    public static defaultProps: Partial<InjectProps> = {
        placeholder: "Ex abc@gmail.com",
        isDisabled: false
    };

    constructor(props: InjectProps) {
        super(props);
        this.state = {
            error: initialError
        }
        this.input = React.createRef();
    }

    private _onFocusEmail = (e) => this.state.error['isShowError'] ? this.setState({error: initialError}) : false

    private  _onGetValue = () => this.input.current.value;

    private _onRefesh = (e) => this.state.error['isShowError'] ? this.setState({error: initialError}) : false

    public showError = (msg) => this.setState({
        error: {
            isShowError: true,
            msg
        }
    })

    render() {
        const { name, placeholder, defaultValue, isDisabled } = this.props;
        const { error } = this.state;
        return (
            <div className="input-email">
                <input
                    ref={this.input}
                    type="email"
                    name={name}
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    disabled={isDisabled}
                    onFocus={this._onFocusEmail}
                     />
                {error['isShowError'] &&
                    <span className="error-input"><Glyphicon glyph="glyphicon glyphicon-warning-sign" /> {error['msg']}</span>
                }
            </div>
        )
    }
}