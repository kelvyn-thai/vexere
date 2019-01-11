import * as React from 'react';
import { ProgressBar } from 'react-bootstrap';


export default class BusItemRatings extends React.Component<any, any> {
    render() {
        const { rating, comments, brand } = this.props;
        const ratingScore = Math.round(rating['score'] * 100 / 5);
        const quality = Math.round(rating['quality'] * 100 / 5);
        const onTime = Math.round(rating['on_time'] * 100 / 5);
        const service = Math.round(rating['service'] * 100 / 5);

        return (
            <div className="bus-items-ratings">
                <h3>{rating['total_rating']}  đánh giá tổng thể nhà xe {brand['name']}</h3>
                <div className="bus-item-rating">
                    <div className="bus-item-rating-left">
                        <div className="bus-item-rating-left-top">
                            <span>{rating['score']} / 5</span>
                        </div>
                        <div className="bus-item-rating-left-bottom">
                            <div className="empty-stars"></div>
                            <div className="full-stars" style={{ width: `${ratingScore}%` }}></div>
                        </div>
                    </div>
                    <div className="bus-item-rating-middle">
                        <div className="bus-item-rating-middle-progress">
                            <p>Chất lượng:</p>
                            <ProgressBar bsStyle="success" now={quality} />
                            <p><b>{rating['quality']}</b></p>
                        </div>
                        <div className="bus-item-rating-middle-progress">
                            <p>Đúng giờ:</p>
                            <ProgressBar bsStyle="success" now={onTime} />
                            <p><b>{rating['on_time']}</b></p>
                        </div>
                        <div className="bus-item-rating-middle-progress">
                            <p>Phục vụ:</p>
                            <ProgressBar bsStyle="success" now={service} />
                            <p><b>{rating['service']}</b></p>
                        </div>
                    </div>
                    <div className="bus-item-rating-right">
                        <a href="" className="bus-item-rating-right-btn-rating">
                            <i className="pe-7s-file"></i>Viết đánh giá
                        </a>

                    </div>
                </div>
                <div className="bus-item-comments">

                </div>
            </div>
        )
    }
}