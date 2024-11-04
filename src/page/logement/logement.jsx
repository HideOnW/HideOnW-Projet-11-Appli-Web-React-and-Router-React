import Banner from '../../composant/banner/Banner'
import './logement.css'
import { useParams, useNavigate } from 'react-router-dom'
import datas from "../../data/data.json";
import Tag from '../../composant/tag/tag';
import imgActiveStar from '../../asset/star-active 1.jpg'
import imgInactiveStar from '../../asset/star-inactive 1.jpg'
import Footer from '../../composant/footer/footer'
import Info from '../../composant/info/info'
import Carroussel from '../../composant/carroussel/carroussel'
import { useEffect } from 'react';




function Logement() {
    const params = useParams()
    const logement = datas.find((element) => element.id === params.id);
    const navigate = useNavigate();

    useEffect(() => {
      if (!logement) {
        navigate('../error/error'); // Redirige vers la page d'erreur
      }
    }, [logement, navigate]);

    

    const activeStar = []
    const inactiveStar =[]

    for (let i = 0; i < 5; i++){
      if (i <= Number(logement.rating)){activeStar.push(i)} else {inactiveStar.push(i)}
    }
    console.log(activeStar)

    console.log(logement)
    return (
      <div className="App">
        <header className="App-header">
            <Banner page='logement'/>
        </header>
        <Carroussel images={logement.pictures}/>
        <div className="description">
          <div className='des1'>
            <h2>{logement.title}</h2>
            <h3>{logement.location}</h3>
            {logement.tags.map((tag) => (
            <Tag name={tag} />
            ))}
          </div>
          <div className='des2'>
            <div className="prop">
              <img src={logement.host.picture} alt="host"></img>    
              <h2>{logement.host.name}</h2>        
            </div>
            <div className="rating">
                {activeStar.map((active) =>(
                  <img src={imgActiveStar} alt="active star"></img>
                ))}
            </div>
          </div>     
        </div>
        <div className='allInfo'>
          <div><Info type='text' text={logement.description} entete='Description'/></div>
          <div><Info type='liste' text={logement.equipments} entete='Equipement'/></div>          
          
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
  

export default Logement