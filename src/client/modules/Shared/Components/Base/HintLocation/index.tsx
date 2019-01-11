import * as React from 'react';
import withHintLocation from './withHintLocation';


class HintLocation extends React.Component<any, any> {

    render() {
        const { dataFound, keySearch, onChangeLocation } = this.props;
        if(typeof keySearch==undefined)
            return null;
        return (
            <div className="hint" >
                <ul>
                    {dataFound.length > 0 &&
                        dataFound.map(city=><li key={city['code']}><a href="#" onClick={(e)=>onChangeLocation(city, e)}>{city['name']}</a></li>)
                    }
                    
                </ul>
            </div>
        )
    }
}
export default withHintLocation(HintLocation)