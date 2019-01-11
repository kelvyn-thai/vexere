import * as React from 'react';
import { isElementExistByField } from 'Library/isElementExist';
import withWishBus from './withWishBus';

const like = require('./assets/like.svg');
const unLike = require('./assets/unlike.svg');

class WishBus extends React.Component<any, any> {

    _onVoteBus = async (e) => {
        e.preventDefault();
        const { busId, wishBus } = this.props;
        const payload = {
            busId,
            status: "voted"
        }
        await wishBus(payload);
    }

    _onUnVoteBus = async (e) => {
        e.preventDefault();
        const { busId, wishBus } = this.props;
        const payload = {
            busId,
            status: "unvoted"
        }
        await wishBus(payload);
    }


    render() {
        const { wishBuses, busId } = this.props;
        
        const isVoted = isElementExistByField(wishBuses, busId, 'id');
        return (
            <>
                {isVoted ?
                    <a href="#" onClick={this._onUnVoteBus}>
                        <img src={like}></img>
                    </a> :
                    <a href="#" onClick={this._onVoteBus}>
                        <img src={unLike}></img>
                    </a>
                }
            </>
        )
    }
}


export default withWishBus(WishBus);