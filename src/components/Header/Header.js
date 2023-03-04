import './Header.scss';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <div classname="header">
                <Link to="/">
                    <div>
                        <img alt=""></img>
                    </div>
                </Link>
            </div>
            <Link to="/">
                <button id="home">Home</button>
            </Link>
            <Link to="adpage">
                <button id="adpage">Ad Page</button>
            </Link>
        </>
    )
}

export default Header;