import { Link } from "react-router-dom";
import "./annonce.css";
import Datas from "../../data/data.json";

function Annonce() {
  return (
      <main>
        <div className="allAnnonce">
        {Datas.map((data) => (
            <div className="containerAnnonce">
              <Link to={`/logement/${data.id}`}>
                <div className="divAnnonce">
                  <img src={data.cover} alt={data.title}></img>
                  <div className="gradient"><p id="titleCard">{data.title}</p></div>                  
                </div>
              </Link>
            </div>
        ))}
        </div>
      </main>
  );
}

export default Annonce;
