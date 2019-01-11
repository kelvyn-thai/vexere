import * as React from 'react';
import { Carousel } from 'react-bootstrap';


export default class BusItemImages extends React.Component<any, any> {

    render() {
        const { photos } = this.props;
        if (typeof photos !== "undefined" && photos.length > 0) {
            return (
                <div className="bus-items-images">
                    <Carousel>
                        {photos.map((item, index) =>
                            <Carousel.Item key={index}>
                                <img style={{width: '100%', height: 'auto'}} alt="image" src={item['src']} />
                            </Carousel.Item>
                        )}
                    </Carousel>
                </div>
            )
        }
        return null;
    }
}