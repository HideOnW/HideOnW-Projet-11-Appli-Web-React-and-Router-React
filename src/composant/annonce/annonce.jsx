import { Link } from "react-router-dom";
import "./annonce.css";
import Datas from "../../data/data.json";

// const listeCard = Datas.map((data) =>
// <>
//     <div>
//         <Link to="/logement">
//             <div className='divAnnonce'>
//                 <img src={data.cover} alt={data.title}></img>
//                 <p id="titleCard">{data.title}</p>
//             </div>
//         </Link>
//     </div>
// </>
// )

function Annonce() {
  return (
      <main>
        <div className="allAnnonce">
        {Datas.map((data) => (
            <div className="containerAnnonce">
              <Link to={`/logement/${data.id}`}>
                <div className="divAnnonce">
                  <img src={data.cover} alt={data.title}></img>
                  <p id="titleCard">{data.title}</p>
                </div>
              </Link>
            </div>
        ))}
        </div>
      </main>
  );
}

export default Annonce;
