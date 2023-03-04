import './Header.scss';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <div className="header-logo">
                <Link to="/">
                    <div>
                        <img alt=""></img>
                    </div>
                </Link>
            </div>
            <div>
                <Link to="/">
                    <button id="home">Home</button>
                </Link>
                <Link to="adpage">
                    <button id="adpage">Ad Page</button>
                </Link>
            </div>
        </div>
    )
}

export default Header;