import { Link } from 'react-router-dom';
import logo from '../../asset/LOGO.jpg';

function Banner() {
    return (
    <>
        <img src={logo} alt="logo Kasa"></img>
        <nav>
            <Link to="/">Acceuil</Link>
            <Link to="/propos">A Propos</Link>
        </nav>
    </>
    )
}

export default Banner