import stylos from "./equipos.module.css";
import comercio from "../../../imagenes/comercio.png";
import patronato from "../../../imagenes/patronato.png";
import sanramon from "../../../imagenes/sanramon.png";
import dju from "../../../imagenes/csdju.png";
import solna from "../../../imagenes/solna.png";
import sangu from "../../../imagenes/sangu.png";
import malvina from "../../../imagenes/malvina.png";
import mayo from "../../../imagenes/25.png";
import congo from "../../../imagenes/congo.png";
import caballu from "../../../imagenes/caballu.png";
import independiente from "../../../imagenes/independiente.png";

function Equiposinicio() {
  const e = [
    comercio,
    patronato,
    sanramon,
    dju,
    solna,
    sangu,
    malvina,
    mayo,
    congo,
    caballu,
    independiente,
  ];

  return (
    <div className={stylos.container}>
      <h1>Equipos que compiten por La Liga De Futbol.</h1>
      <div className={stylos.cards}>
        {e.map((image, index) => (
          <img key={index} src={image} alt="equipo" />
        ))}
      </div>
    </div>
  );
}

export default Equiposinicio;
