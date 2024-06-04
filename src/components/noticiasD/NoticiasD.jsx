import styles from "./noticias.module.css";

function NoticiasD() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles["card-content"]}>
          <h1>Volvio el Futbol a la ciudad.</h1>
          <p>Ingresa a ver todo lo que dejo la fecha, goles, sorpresas y mas.</p>
          <button>Ver Más</button>
        </div>
        <img
          src="https://diariolapaz.ar/storage/upload/2024/05/malvi%202.jpg"
          alt="cancha"
        />
      </div>
      <div className={`${styles.card} ${styles["card-reverse"]}`}>
        <img
          src="https://diariolapaz.ar/storage/upload/2024/05/malvi%20final.jpg"
          alt="cancha"
        />
        <div className={styles["cardreverse"]}>
          <h1>Malvinas subcampeón de la Copa Entre Ríos</h1>
          <p>El malvi paceño se hizo fuerte de local y empató la serie ganando 2 a 1 en un partido emocionante, pero Victoria de Concordia fue más efectivo en la definición por penales y se impuso 4 a 2, consagrándose campeón de la Copa Entre Ríos.</p>
          <button>Ver Más</button>
        </div>
      </div>
    </div>
  );
}

export default NoticiasD;
