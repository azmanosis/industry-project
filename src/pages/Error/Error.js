import './Error.scss';
import { Link } from 'react-router-dom';

function Error() {
    return (
        <>
            <div className="error">
                <p className="error__texted">Uh oh, no updates here!</p>
                <p className="error__text">But don't worry, take a break and enjoy some stillness. Who knows, you might even hear a pin drop! And while you're at it, head back to the
                    <Link className="error__link" to="/"> home page </Link>for some exciting content. Who knows what delightful surprises await you there!</p>
            </div>
        </>
    )
}

export default Error;