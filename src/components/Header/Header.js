import './Header.scss';
import { Link } from 'react-router-dom';
import Logo from '../../assets/icons/logo.svg';

function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <Link to="/">
                    <div>
                        <img src={Logo} className="header__logo--img" alt=""></img>
                    </div>
                </Link>
            </div>
            <div className="header__subject">
                <h2 className="header__subject--creator">
                    Creator Hub
                </h2>
                <input className="header__subject--input" placeholder="Search">
                </input>
                <div className="header__subject--link">
                    <Link to="/">
                        <button className="header__subject--link--dashboard">dashboard</button>
                    </Link>
                    <Link to="/">
                        <button className="header__subject--link--dashboard">support</button>
                    </Link>
                    <Link to="/">
                        <button className="header__subject--link--dashboard">account</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;