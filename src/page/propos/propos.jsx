import Banner from '../../composant/banner/Banner'
import Info from '../../composant/info/info'
import Footer from '../../composant/footer/footer'
import FirstImage from '../../composant/firstImage/firstImage'
import imgMountain from '../../asset/mountainImage.jpg'
import './propos.css'

function Propos() {
    return (
      <div className="App">
        <header className="App-header">
            <Banner />
        </header>
        <main>
        <FirstImage image={imgMountain}/>

          <Info type='text' text='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.' entete='Fiabilité' />
          <Info type='text' text='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraîenra une exclusion de notre plateforme' entete='Respect'/>
          <Info type='text' text='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraîenra une exclusion de notre plateforme' entete='Service'/>
          <Info type='text' text='La sécurité est la priorité de Kasa. Aussi bien que pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à  hôte qu au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestiques pour nos hôtes.' entete='Sécurité'/>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
  

export default Propos 