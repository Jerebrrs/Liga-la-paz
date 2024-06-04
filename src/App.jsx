import "./App.css";
import Navbar from "./components/navbar/navbar";
import Inicio from "./components/inicio/Inicio";
import NoticiasD from "./components/noticiasD/NoticiasD";
import Footer from "./components/footer/Footer";
import Publicidad from "./components/publicidad/Publicidad";
import Equiposinicio from "./components/equiposinicio/Equiposinicio";
function App() {
  return (
    <div>
      <Navbar />
      <Inicio />
      <NoticiasD />
      <Equiposinicio/>
      <Publicidad />
      <Footer />
    </div>
  );
}

export default App;
