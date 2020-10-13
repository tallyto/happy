import React from "react";
import { Link } from "react-router-dom";
import mapMakerImg from "../assets/map-marker.svg";
import { FiPlus } from "react-icons/fi";
import "../styles/pages/orphanages-map.css";
import { Map ,TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css'
function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMakerImg} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Boa Vista</strong>
          <span>Roraima</span>
        </footer>
      </aside>
  <Map
  center={[2.8249091,-60.6867993]}
  zoom={15}
  style={{width: '100%', height:'100%'}}
  >
    <TileLayer url= "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
  </Map>
      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
