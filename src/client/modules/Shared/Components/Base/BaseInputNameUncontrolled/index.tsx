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

    private input: any = React.createRef();

    public static defaultProps: Partial<InjectProps> = {
        placeholder: "Ex Park Hang Seo"
    };

    constructor(props: InjectProps) {
        super(props);
        this.state = {
            error: initialError
        }
        this.input = React.createRef();
    }

    private _onChangeName = (e: any) => this.setState({ value: e.target.value })

    private _onFocusName = (e) => this.state.error['isShowError'] ? this.setState({error: initialError}) : false

    private _onRefesh = (e) => this.state.error['isShowError'] ? this.setState({error: initialError}) : false

    private  _onGetValue = () => this.input.current.value;

    public showError = (msg) => this.setState({
        error: {
            isShowError: true,
            msg
        }
    })

    render() {
        const { name, placeholder, defaultValue } = this.props;
        const { error } = this.state;
        return (
            <div className="input-name">
                <input
                    ref={this.input}
                    type="text"
                    name={name}
                    defaultValue={defaultValue}
                    onChange={this._onChangeName}
                    placeholder={placeholder}
                    onFocus={this._onFocusName}
                     />
                {error['isShowError'] &&
                    <span className="error-input"><Glyphicon glyph="glyphicon glyphicon-warning-sign" /> {error['msg']}</span>
                }
            </div>
        )
    }
}