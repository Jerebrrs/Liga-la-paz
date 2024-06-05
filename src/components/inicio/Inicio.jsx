import stylos from "./inicio.module.css";
import Noticias from "../inicio/noticiasD/NoticiasD";
import Equiposinicio from "../inicio/equiposinicio/Equiposinicio";
function Inicio() {
  return (
    <div>
      <div className={stylos.container}>
        <div className={stylos.header}>
          <h1>Liga Paceña de Futbol</h1>
          <p>
            Un solo lugar con todas las noticias de la liga, resultados y mas!
          </p>
        </div>
      </div>
      <Noticias />
      <Equiposinicio />
    </div>
  );
}

export default Inicio;
