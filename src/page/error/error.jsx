import { Link } from 'react-router-dom';
import Banner from '../../composant/banner/Banner'
import './error.css'

function error() {
    return (
      <div className="App">
        <header className="App-header">
            <Banner />
        </header>
        <p className="404">404</p>
        <h3>Oups! La page que vous demandez n'existe pas</h3>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    )
  }
  

export default Error