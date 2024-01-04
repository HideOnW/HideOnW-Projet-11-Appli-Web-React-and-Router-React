import { Link } from 'react-router-dom';
import './annonce.css'
import Datas from '../../data/data.json'

const listeCard = Datas.map((data) =>
<>
    <div>
        <Link to="/logement">
            <div className='divAnnonce'>
                <p id="idCard">{data.title}</p>
            </div>
            <script></script>
        </Link>
    </div>
</>
)

function Annonce() {
    return (
    <>
         <main>
             {listeCard}
         </main>
    </>
    )
}

export default Annonce