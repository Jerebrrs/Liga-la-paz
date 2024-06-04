import stylos from "./inicio.module.css";

function Inicio() {
  return (
    <div className={stylos.container}>
      <div className={stylos.header}>
        <h1>Liga Paceña de Futbol</h1>
        <p>Un solo lugar con todas las noticias de la liga, resultados y mas!</p>
       
      </div>
    </div>
  );
}

export default Inicio;
