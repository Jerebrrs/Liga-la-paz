import { useState, useEffect } from "react";
import stylos from "./publicidad.module.css";
import ana from "../../imagenes/anama.jpeg";

function Publicidad() {
  const clientes = [
    {
      name: "Sparrow Store",
      subtitle: "Encontra la mejor ropa urbana de la región",
      image:
        "https://d22fxaf9t8d39k.cloudfront.net/cb87877f875f96bf000ec66bdb1229684a3cd81e1f70e4dc4da4a6da8e4e2389249185.png",
      sitio: "https://www.instagram.com/sparrowtienda",
    },
    {
      name: "Anami Cakes",
      subtitle: "Elaboramos mesas dulces, tortas y mas.. ",
      image: ana,
      sitio: "https://www.instagram.com/anamicakes21",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === clientes.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [clientes.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      setCurrentIndex((prevIndex) =>
        prevIndex === clientes.length - 1 ? 0 : prevIndex + 1
      );
    }
    if (touchStartX - touchEndX < -50) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? clientes.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <div
      className={stylos.container}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={stylos.card}>
        <h1>{clientes[currentIndex].name}</h1>
        <p>{clientes[currentIndex].subtitle}</p>
        <a
          href={clientes[currentIndex].sitio}
          target="_blank"
          rel="noopener noreferrer"
          className={stylos.LinkContainer}
        >
          <button className={stylos.btn}>Ver Más</button>
        </a>
        <img
          src={clientes[currentIndex].image}
          alt={clientes[currentIndex].name}
        />
      </div>
      <div className={stylos.dots}>
        {clientes.map((_, index) => (
          <span
            key={index}
            className={`${stylos.dot} ${
              index === currentIndex ? stylos.active : ""
            }`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Publicidad;
