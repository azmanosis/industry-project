import './Advertising.scss';
import React, { useState } from 'react';
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
import Up from '../../assets/icons/up.svg';
import Down from '../../assets/icons/down.svg';
import Graph from '../../assets/icons/graph.svg';

function Advertising() {
    const [isVisible, setIsVisible] = useState(false);
    const [isViewable, setIsViewable] = useState(false);
    const [isSeen, setIsSeen] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const toggleViewability = () => {
        setIsViewable(!isViewable);
    };

    const toggleSeen = () => {
        setIsSeen(!isSeen);
    }

    return (
        <>
            <div className="dashboards">
                <p className="dashboards__texts">Advertisement</p>
                <div className="dashboards__alerts">
                    <img className="dashboards__alerts--icons" src={Alert} alt="alert" />
                    <p className="dashboards__alerts--texts">ALERT: One of your Ad is expiring soon!</p>
                    <Link to="/">
                        <button className="dashboards__alerts--opens">open ads</button>
                    </Link>
                    <img className="dashboards__alerts--closes" src={Close} alt="close" />
                </div>
                <button className="dashboards__news">+ New</button>
            </div>
            <div className="profiles">
                <div className="profiles__headers">
                    <div className="profiles__headers--tops">
                        <img className="profiles__headers--tops--images" src={Pic} alt="profile" />
                        <p className="profiles__headers--tops--texts">ea sports athelete</p><p className="profiles__headers--tops--texts">since 2021</p>
                    </div>
                    <div className="profiles__headers--managements">
                        <p className="profiles__headers--managements--texts">Management</p>
                        <div className="profiles__headers--managements--panels">
                            <Link className="profiles__headers--managements--panels--links" to="/">
                                <img className="profiles__headers--managements--panels--links--images" src={Dashboard} alt="" />
                                <button className="profiles__headers--managements--panels--links--texts">dashboard</button>
                            </Link>
                            <Link className="profiles__headers--managements--panels--links" to="/">
                                <img className="profiles__headers--managements--panels--links--images" src={Stream} alt="" />
                                <button className="profiles__headers--managements--panels--links--texts">stream manager</button>
                            </Link>
                            <Link className="profiles__headers--managements--panels--links" to="/">
                                <img className="profiles__headers--managements--panels--links--images" src={Uploads} alt="" />
                                <button className="profiles__headers--managements--panels--links--texts">uploads</button>
                            </Link>
                            <Link className="profiles__headers--managements--panels--links" to="/">
                                <img className="profiles__headers--managements--panels--links--images" src={Analytics} alt="" />
                                <button className="profiles__headers--managements--panels--links--texts">analytics</button>
                            </Link>
                            <Link className="profiles__headers--managements--panels--linkstext" to="/advertising">
                                <img className="profiles__headers--managements--panels--links--images" src={Advertise} alt="" />
                                <button className="profiles__headers--managements--panels--links--texts">advertising</button>
                            </Link>
                            <Link className="profiles__headers--managements--panels--links" to="/">
                                <img className="profiles__headers--managements--panels--links--images" src={Earnings} alt="" />
                                <button className="profiles__headers--managements--panels--links--texts">earnings</button>
                            </Link>
                            <Link className="profiles__headers--managements--panels--links" to="/">
                                <img className="profiles__headers--managements--panels--links--images" src={Tax} alt="" />
                                <button className="profiles__headers--managements--panels--links--texts">tax</button>
                            </Link>
                            <Link className="profiles__headers--managements--panels--links" to="/">
                                <img className="profiles__headers--managements--panels--links--images" src={Copyright} alt="" />
                                <button className="profiles__headers--managements--panels--links--texts">copyright</button>
                            </Link>
                            <Link className="profiles__headers--managements--panels--links" to="/">
                                <img className="profiles__headers--managements--panels--links--images" src={Settings} alt="" />
                                <button className="profiles__headers--managements--panels--links--texts">settings</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="profiles__advertising">
                    <div className="profiles__advertising--box">
                        <p className="profiles__advertising--box--text">SallyStreamer</p>
                        <Link to="https://www.youtube.com/" target="_blank">
                            <button className="profiles__advertising--box--button">YouTube</button>
                        </Link>
                        <Link to="https://www.facebook.com/" target="_blank">
                            <button className="profiles__advertising--box--button">Facebook</button>
                        </Link>
                        <Link to="https://www.tiktok.com/en/" target="_blank">
                            <button className="profiles__advertising--box--button">TikTok</button>
                        </Link>
                        <button onClick={toggleVisibility} className="profiles__advertising--box--up"></button>
                    </div>
                    {isVisible &&
                        <div>
                            <div className="profiles__advertising--back">
                                <div className="profiles__advertising--back--first">
                                    <div className="profiles__advertising--back--first--you">
                                        <p className="profiles__advertising--back--first--you--text">YouTube</p>
                                    </div>
                                    <p className="profiles__advertising--back--first--text">Your <span className="profiles__advertising--back--first--text--bold">YouTube Account</span> is performing well!</p>
                                    <img className="profiles__advertising--back--first--image" src={Down} alt="" />
                                </div>
                                <div className="profiles__advertising--back--second">
                                    <div className="profiles__advertising--back--second--renew">
                                        <button className="profiles__advertising--back--second--renew--button">Renew</button>
                                        <button className="profiles__advertising--back--second--renew--button">Manage</button>
                                    </div>
                                    <div className="profiles__advertising--back--second--box">
                                        <div className="profiles__advertising--back--second--box--chart">
                                            <img className="profiles__advertising--back--second--box--chart--graph" src={Graph} alt="" />
                                            <div className="profiles__advertising--back--second--box--chart--impressions">
                                                <button className="profiles__advertising--back--second--box--chart--impressions--button">impressions</button>
                                                <button className="profiles__advertising--back--second--box--chart--impressions--button">conversions</button>
                                                <button className="profiles__advertising--back--second--box--chart--impressions--button">clicks</button>
                                                <button className="profiles__advertising--back--second--box--chart--impressions--button">cost</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="profiles__advertising--third">
                                <p className="profiles__advertising--third--text">Facebook</p>
                                <div className="profiles__advertising--third--image"></div>
                            </div>
                            <div className="profiles__advertising--third">
                                <p className="profiles__advertising--third--text">TikTok</p>
                                <div className="profiles__advertising--third--image"></div>
                            </div>
                        </div>
                    }
                    <div className="profiles__advertising--box">
                        <p className="profiles__advertising--box--texted">SallyStreamer v.APRICOT</p>
                        <Link to="https://www.youtube.com/" target="_blank">
                            <button className="profiles__advertising--box--button">YouTube</button>
                        </Link>
                        <Link to="https://www.facebook.com/" target="_blank">
                            <button className="profiles__advertising--box--button">Facebook</button>
                        </Link>
                        <Link to="https://www.tiktok.com/en/" target="_blank">
                            <button className="profiles__advertising--box--button">TikTok</button>
                        </Link>
                        <button onClick={toggleViewability} className="profiles__advertising--box--up" src={Up} alt=""></button>
                    </div>
                    {isViewable &&
                        <div>
                            <div className="profiles__advertising--back">
                                <div className="profiles__advertising--back--first">
                                    <div className="profiles__advertising--back--first--you">
                                        <p className="profiles__advertising--back--first--you--text">YouTube</p>
                                    </div>
                                    <p className="profiles__advertising--back--first--text">Your <span className="profiles__advertising--back--first--text--bold">YouTube Account</span> is performing well!</p>
                                    <img className="profiles__advertising--back--first--image" src={Down} alt="" />
                                </div>
                                <div className="profiles__advertising--back--second">
                                    <div className="profiles__advertising--back--second--renew">
                                        <button className="profiles__advertising--back--second--renew--button">Renew</button>
                                        <button className="profiles__advertising--back--second--renew--button">Manage</button>
                                    </div>
                                    <div className="profiles__advertising--back--second--box">
                                        <div className="profiles__advertising--back--second--box--chart">
                                            <img className="profiles__advertising--back--second--box--chart--graph" src={Graph} alt="" />
                                            <div className="profiles__advertising--back--second--box--chart--impressions">
                                                <button className="profiles__advertising--back--second--box--chart--impressions--button">impressions</button>
                                                <button className="profiles__advertising--back--second--box--chart--impressions--button">conversions</button>
                                                <button className="profiles__advertising--back--second--box--chart--impressions--button">clicks</button>
                                                <button className="profiles__advertising--back--second--box--chart--impressions--button">cost</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="profiles__advertising--third">
                                <p className="profiles__advertising--third--text">Facebook</p>
                                <div className="profiles__advertising--third--image"></div>
                            </div>
                            <div className="profiles__advertising--third">
                                <p className="profiles__advertising--third--text">TikTok</p>
                                <div className="profiles__advertising--third--image" src={Up} alt=""></div>
                            </div>
                        </div>
                    }
                    <div className="profiles__advertising--boxed">
                        <p className="profiles__advertising--boxed--texting">SallyStreamer v.ACIE</p>
                        <Link to="https://www.youtube.com/" target="_blank">
                            <button className="profiles__advertising--boxed--button">YouTube</button>
                        </Link>
                        <Link to="https://www.facebook.com/" target="_blank">
                            <button className="profiles__advertising--boxed--button">Facebook</button>
                        </Link>
                        <Link to="https://www.tiktok.com/en/" target="_blank">
                            <button className="profiles__advertising--boxed--button">TikTok</button>
                        </Link>
                        <button onClick={toggleSeen} className="profiles__advertising--box--up" src={Down} alt=""></button>
                        <img src={Alert} className="profiles__advertising--boxed--alert" alt="" />
                    </div>
                    {isSeen &&
                        <div>
                            <div className="profiles__advertising--back">
                                <div className="profiles__advertising--back--first">
                                    <div className="profiles__advertising--back--first--you">
                                        <p className="profiles__advertising--back--first--you--text">YouTube</p>
                                        <img src={Alert} className="profiles__advertising--back--first--you--image" alt="" />
                                    </div>
                                    <p className="profiles__advertising--back--first--text">Your ad will expire in 3 days! <span className="profiles__advertising--back--first--text--bold">Renew</span> now!</p>
                                    <img className="profiles__advertising--back--first--image" src={Down} alt="" />
                                </div>
                                <div className="profiles__advertising--back--second">
                                    <div className="profiles__advertising--back--second--renew">
                                        <button className="profiles__advertising--back--second--renew--button">Renew</button>
                                        <button className="profiles__advertising--back--second--renew--button">Manage</button>
                                    </div>
                                    <div className="profiles__advertising--back--second--box">
                                        <div className="profiles__advertising--back--second--box--chart">
                                            <img className="profiles__advertising--back--second--box--chart--graph" src={Graph} alt="" />
                                            <div className="profiles__advertising--back--second--box--chart--impressions">
                                                <button className="profiles__advertising--back--second--box--chart--impressions--button">impressions</button>
                                                <button className="profiles__advertising--back--second--box--chart--impressions--button">conversions</button>
                                                <button className="profiles__advertising--back--second--box--chart--impressions--button">clicks</button>
                                                <button className="profiles__advertising--back--second--box--chart--impressions--button">cost</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="profiles__advertising--third">
                                <p className="profiles__advertising--third--text">Facebook</p>
                                <div className="profiles__advertising--third--image"></div>
                            </div>
                            <div className="profiles__advertising--third">
                                <p className="profiles__advertising--third--text">TikTok</p>
                                <div className="profiles__advertising--third--image"></div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Advertising;