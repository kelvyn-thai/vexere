import * as React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';


export default class ButtonFindTrips extends React.Component<any, any>{

    render() {
        return (
            <div className="btn-find-trips">
                <div></div>
                <div></div>
                <Link to="/find-trips">TÌM VÉ XE RẺ</Link>
                <div></div>
            </div>
        )
    }

}