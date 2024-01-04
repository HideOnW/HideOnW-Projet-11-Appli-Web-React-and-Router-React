import { Link } from 'react-router-dom';
import Banner from '../../composant/banner/Banner'
import Annonce from '../../composant/annonce/annonce'
import './home.css'

function Home() {
    return (
      <div className="App">
        <header className="App-header">
            <Banner />
        </header>
        <p>Home Page</p>
        {/* <Link to="/Error">Error</Link> */}
        <Annonce />
      </div>
    )
  }
  

export default Home 