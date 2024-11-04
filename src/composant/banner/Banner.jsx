import { Link } from 'react-router-dom';
import logo from '../../asset/LOGO.jpg';
import './banner.css'

function Banner(page) {
    return ( 
        // page === 'Home' ?
    <>
        <img src={logo} alt="logo Kasa"></img>
        <nav>
            <Link to="/" >Accueil</Link>
            <Link to="/propos">A Propos</Link>
        </nav>
    </>
    )
}

export default Banner