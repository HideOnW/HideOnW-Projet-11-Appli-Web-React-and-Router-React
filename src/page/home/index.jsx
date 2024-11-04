import { Link } from 'react-router-dom';
import Banner from '../../composant/banner/Banner'
import Annonce from '../../composant/annonce/annonce'
import Footer from '../../composant/footer/footer'
import FirstImage from '../../composant/firstImage/firstImage'
import './home.css'

import imgSea from '../../asset/seaImage.jpg'

function Home() {
    return (
      <div className="App">
        <header className="App-header">
            <Banner page='Home'/>
        </header>
        {/* <Link to="/Error">Error</Link> */}
        <FirstImage text='Chez vous, partout et ailleurs' image={imgSea}/>
        <Annonce />
        <footer>
          <Footer />
        </footer>
        
      </div>
    )
  }
  

export default Home 