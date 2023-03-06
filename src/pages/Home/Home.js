import './Home.scss';
import profile from '../../assets/png/image.svg';

function Home() {
    return (
        <>
            <div className="dashboard">
                <div className="dashboard__left">
                    <p className="dashboard__left--text">Welcome Back, SallyStreamer!
                    </p>
                </div>
                <div className="dashboard__right">
                    <img className="dashboard__right--image" src={profile} alt="" />
                    <p className="dashboard__right--text">My Stats</p>
                </div>
            </div>
        </>
    )
}

export default Home;