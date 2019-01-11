import * as React from 'react';
import './index.scss';
import HintLocation from '../HintLocation';

interface InjectProps {
    placeholder?: string,
    name?: string,
    onChangeLocation: (payload: any) => ({type: string, action: any})
}

export default class BaseInputLocation extends React.Component<InjectProps, any> {

    constructor(props: InjectProps) {
        super(props);
        this.state = {
            value: '',
            isShowHint: false,
        }
    }

    private _onChangeText = (e: any) => this.setState({value: e.target.value})

    private _onFocus = (e: any) => this.setState({isShowHint: true})

    private _onBlur = (e: any) => setTimeout(() => {this.setState({isShowHint: false})}, 100); 

    public _onGetValue = () => this.state.value

    public _onChangeLocation = (data, e)=> {
        this.setState({value: data['name']});
        this.props.onChangeLocation(data)
    }

    render() {
        const { name, placeholder } = this.props;
        const { isShowHint, value } = this.state;
        return (
            <div className="input-location">
                <input
                    type="text"
                    name={name}
                    value={value}
                    onChange={this._onChangeText}
                    onFocus={this._onFocus}
                    onBlur={this._onBlur}
                    placeholder={placeholder} 
                    />
                {isShowHint && value!=="" &&
                    <HintLocation 
                        keySearch={value}
                        onChangeLocation={this._onChangeLocation}
                        />
                }
            </div>
        )
    }
}