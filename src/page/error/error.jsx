import { Link } from 'react-router-dom';
import Banner from '../../composant/banner/Banner'
import Footer from '../../composant/footer/footer'
import './error.css'

function Error() {
    return (
      <div className="App">
        <header className="App-header">
            <Banner />
        </header>
        <div className='divError'>
        <h2>404</h2>
        <h3>Oups! La page que vous demandez n'existe pas</h3>
        <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
        <footer>
        <Footer />
        </footer>
      </div>
    )
  }
  

export default Error