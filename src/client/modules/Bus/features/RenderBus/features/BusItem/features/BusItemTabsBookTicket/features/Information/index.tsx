import * as React from 'react';

class Information extends React.Component<any, any>{

    render() {
        const user = this.props.data;
        
        return (
            <div className="bus-item-tabs-details-book-ticket-content-col-3">
                <div className="form-group">
                    <label htmlFor="">Họ và tên</label>
                    <p>{user['name']}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <p>{user['email']}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">SĐT</label>
                    <p>{user['phone']}</p>
                </div>
                <div className="form-group"></div>
                <div className="form-group"></div>
            </div>
        )
    }
}


export default Information;