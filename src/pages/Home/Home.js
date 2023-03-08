import './Home.scss';
import { Link } from 'react-router-dom';
import Alert from '../../assets/icons/alert.svg';
import Close from '../../assets/icons/close.svg';
import Pic from '../../assets/png/image.svg';
import Dashboard from '../../assets/icons/dashboard.svg';
import Stream from '../../assets/icons/stream.svg';
import Uploads from '../../assets/icons/uploads.svg';
import Analytics from '../../assets/icons/analytics.svg';
import Advertise from '../../assets/icons/advertise.svg';
import Earnings from '../../assets/icons/earnings.svg';
import Tax from '../../assets/icons/tax.svg';
import Copyright from '../../assets/icons/copyright.svg';
import Settings from '../../assets/icons/settings.svg';
import Revenue from '../../assets/icons/revenue.svg';
import Viewers from '../../assets/icons/viewers.svg';
import Slider from '../../components/ImageSlider/ImageSlider';

function Home() {

    return (
        <>
            <div className="dashboard">
                <p className="dashboard__text">Welcome Back, SallyStreamer!</p>
                <div className="dashboard__alert">
                    <img className="dashboard__alert--icon" src={Alert} alt="alert" />
                    <p className="dashboard__alert--text">ALERT: One of your Ad is expiring soon!</p>
                    <Link to="/">
                        <button className="dashboard__alert--open">open ads</button>
                    </Link>
                    <img className="dashboard__alert--close" src={Close} alt="close" />
                </div>
            </div>
            <div className="profile">
                <div className="profile__header">
                    <div className="profile__header--top">
                        <img className="profile__header--top--image" src={Pic} alt="profile" />
                        <p className="profile__header--top--text">ea sports athelete</p><p className="profile__header--top--text">since 2021</p>
                    </div>
                    <div className="profile__header--management">
                        <p className="profile__header--management--text">Management</p>
                        <div className="profile__header--management--panel">
                            <Link className="profile__header--management--panel--linkstext" to="/">
                                <img className="profile__header--management--panel--link--image" src={Dashboard} alt="" />
                                <button className="profile__header--management--panel--link--text">dashboard</button>
                            </Link>
                            <Link className="profile__header--management--panel--link" to="/">
                                <img className="profile__header--management--panel--link--image" src={Stream} alt="" />
                                <button className="profile__header--management--panel--link--text">stream manager</button>
                            </Link>
                            <Link className="profile__header--management--panel--link" to="/">
                                <img className="profile__header--management--panel--link--image" src={Uploads} alt="" />
                                <button className="profile__header--management--panel--link--text">uploads</button>
                            </Link>
                            <Link className="profile__header--management--panel--link" to="/">
                                <img className="profile__header--management--panel--link--image" src={Analytics} alt="" />
                                <button className="profile__header--management--panel--link--text">analytics</button>
                            </Link>
                            <Link className="profile__header--management--panel--link" to="/advertising">
                                <img className="profile__header--management--panel--link--image" src={Advertise} alt="" />
                                <button className="profile__header--management--panel--link--text">advertising</button>
                                <img className="profile__header--management--panel--link--alert" src={Alert} alt="" />
                            </Link>
                            <Link className="profile__header--management--panel--link" to="/">
                                <img className="profile__header--management--panel--link--image" src={Earnings} alt="" />
                                <button className="profile__header--management--panel--link--text">earnings</button>
                            </Link>
                            <Link className="profile__header--management--panel--link" to="/">
                                <img className="profile__header--management--panel--link--image" src={Tax} alt="" />
                                <button className="profile__header--management--panel--link--text">tax</button>
                            </Link>
                            <Link className="profile__header--management--panel--link" to="/">
                                <img className="profile__header--management--panel--link--image" src={Copyright} alt="" />
                                <button className="profile__header--management--panel--link--text">copyright</button>
                            </Link>
                            <Link className="profile__header--management--panel--link" to="/">
                                <img className="profile__header--management--panel--link--image" src={Settings} alt="" />
                                <button className="profile__header--management--panel--link--text">settings</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="profile__revenue">
                    <div className="profile__revenue--stats">
                        <div className="profile__revenue--stats--a">
                            <p className="profile__revenue--stats--a--text">Revenue</p>
                            <img src={Revenue} className="profile__revenue--stats--a--img" alt="" />
                            <div className="profile__revenue--stats--a--result">
                                <p className="profile__revenue--stats--a--result--unit">Earnings in $1000s</p>
                            </div>
                        </div>
                        <div className="profile__revenue--stats--b">
                            <div className="profile__revenue--stats--b--row">
                                <p className="profile__revenue--stats--b--row--text">Viewers This Week</p>
                                <p className="profile__revenue--stats--b--row--date">03/5/23-03/12/23</p>
                            </div>
                            <img className="profile__revenue--stats--b--img" src={Viewers} alt="" />
                            <div className="profile__revenue--stats--a--result">
                                <p className="profile__revenue--stats--a--result--unit">Total Views this Week: 20,554</p>
                            </div>
                        </div>
                    </div>
                    <div className="profile__revenue--upcoming">
                        <p className="profile__revenue--upcoming--text">your upcoming stream</p>
                        <div>
                            <Slider></Slider>
                        </div>
                    </div>
                </div>
                <div className="profile__mystats">
                    <p className="profile__mystats--text">My Stats</p>
                    <div className="profile__mystats--box">
                        <p className="profile__mystats--box--a">Hours Streamed</p>
                        <p className="profile__mystats--box--b">3,645</p>
                        <p className="profile__mystats--box--a">Total Streams</p>
                        <p className="profile__mystats--box--b">347</p>
                        <p className="profile__mystats--box--a">Most viewers per Streams</p>
                        <p className="profile__mystats--box--b">42,438</p>
                        <p className="profile__mystats--box--a">Total tournaments</p>
                        <p className="profile__mystats--box--b">87</p>
                        <p className="profile__mystats--box--a">win success rate</p>
                        <p className="profile__mystats--box--b">86%</p>
                        <p className="profile__mystats--box--a">Followers</p>
                        <p className="profile__mystats--box--b">82,304</p>
                    </div>
                    <button class="profile__mystats--stream">+ new stream</button>
                    <button class="profile__mystats--streamed">plan a stream</button>
                </div>
            </div>
        </>
    )
}

export default Home;