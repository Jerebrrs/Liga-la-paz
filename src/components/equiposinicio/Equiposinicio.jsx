import stylos from "./equipos.module.css";
import comercio from "../../imagenes/comercio.png";
import patronato from "../../imagenes/patronato.png";
import sanramon from "../../imagenes/sanramon.png";
import dju from "../../imagenes/csdju.png";
import solna from "../../imagenes/solna.png";
import sangu from "../../imagenes/sangu.png";
import malvina from "../../imagenes/malvina.png";
import gris from "../../imagenes/gris.png";
function Equiposinicio() {
  let equipo = gris;

  const e = [
    comercio,
    patronato,
    sanramon,
    dju,
    solna,
    sangu,
    malvina,
    equipo,
    equipo,
    equipo,
    equipo,
    equipo,
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
