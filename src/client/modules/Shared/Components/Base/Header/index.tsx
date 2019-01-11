import * as React from 'react';
import { Link } from 'react-router-dom';
import withHeader from './withHeader';
import './index.scss';

const srcLogo = require('./logo.svg');

class Header extends React.Component<any, any> {

    render() {

        const { isAuthenticated } = this.props.login['data'];
        return (
            <div className="header-page">
                <div className="logo-header">
                    <a href="/">
                        <img src={srcLogo} alt="" />
                    </a>
                </div>
                <div className="menu-header">
                    <ul>
                        <li><Link to="/">Trang Chủ</Link></li>
                        <li><a href="#">Tuyển dụng</a></li>
                        <li><a href="#">Hủy Vé</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Phần mềm hãng xe</a></li>
                        <li>
                            {isAuthenticated ? <a href="/customer">Trang cá nhân</a> : <Link to="/login">Đăng nhập</Link>}
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default withHeader(Header);