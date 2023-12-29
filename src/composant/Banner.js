import logo from '../asset/LOGO.jpg';

function Banner() {
    return (
    <><img src={logo} alt="logo Kasa"></img>
        <ul>
            <li>Acceuil</li>
            <li>A Propos</li>
        </ul>
    </>
    )
}

export default Banner