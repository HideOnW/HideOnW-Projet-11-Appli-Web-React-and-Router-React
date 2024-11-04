import { Link } from 'react-router-dom';
import logoFooter from '../../asset/LOGOFotter.svg'
import './footer.css'

function Footer() {
    return (
        <>
         <img src={logoFooter} alt="logo Kasa"></img>
         <p>© 2020 Kasa. All rights reserved</p>
        </>
    )
}

export default Footer
