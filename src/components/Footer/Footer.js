import './Footer.scss';
import { Link } from 'react-router-dom';
import Logo from '../../assets/icons/logo.svg';
import Flag from '../../assets/icons/flag.svg';
import Arrow from '../../assets/icons/arrow.svg';

function Footer() {
    return (
        <>
            <div className="footer">
                <img src={Logo} className="footer__logo" alt="logo" />
                <div className="footer__credentials">
                    <div className="footer__credentials--game">
                        <Link to="/error">
                            <button className="footer__credentials--game--item">Game Library</button>
                        </Link>
                        <Link to="/error">
                            <button className="footer__credentials--game--item">Subscribe</button>
                        </Link>
                        <Link to="error">
                            <button className="footer__credentials--game--item">Redeem Code</button>
                        </Link>
                        <Link to="/error">
                            <button className="footer__credentials--game--item">EA app</button>
                        </Link>
                        <Link to="/error">
                            <button className="footer__credentials--game--item">About</button>
                        </Link>
                    </div>
                    <div className="footer__credentials--accessibility">
                        <Link to="/error">
                            <button className="footer__credentials--accessibility--item">accessibility</button>
                        </Link>
                        <Link to="/error">
                            <button className="footer__credentials--accessibility--item">help</button>
                        </Link>
                    </div>
                    <div className="footer__credentials--legal">
                        <Link to="/error">
                            <button className="footer__credentials--legal--item">legal & privacy</button>
                        </Link>
                        <Link to="/error">
                            <button className="footer__credentials--legal--item">user agreement</button>
                        </Link>
                        <Link to="/error">
                            <button className="footer__credentials--legal--item">privacy and cookie policy(your privacy rights)</button>
                        </Link>
                        <Link to="/error">
                            <button className="footer__credentials--legal--item">online service updates</button>
                        </Link>
                    </div>
                    <div className="footer__credentials--service">
                        <Link to="/error">
                            <button className="footer__credentials--service--item">services</button>
                        </Link>
                        <Link to="/error">
                            <button className="footer__credentials--service--item">your privacy choices</button>
                        </Link>
                        <Link to="/error">
                            <button className="footer__credentials--service--item">cookie preferences</button>
                        </Link>
                    </div>
                    <div className="footer__credentials--copyright">
                        <p className="footer__credentials--copyright--legals">2023 electronic arts inc.</p>
                    </div>
                </div>
                <div className="footer__language">
                    <div className="footer__language--box">
                        <p className="footer__language--box--text">Language</p>
                        <div className="footer__language--box--info">
                            <img className="footer__language--box--info--image" src={Flag} alt=""></img>
                            <p className="footer__language--box--info--canada">Canada (EN)</p>
                            <img className="footer__language--box--info--arrow" src={Arrow} alt="arrow"></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;