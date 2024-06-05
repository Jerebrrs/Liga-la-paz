import "./App.css";
import Navbar from "./components/navbar/navbar";
import Inicio from "./components/inicio/Inicio";
import Footer from "./components/footer/Footer";
import Publicidad from "./components/publicidad/Publicidad";
import Noticias from "./components/noticias/Noticias";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./components/noticias/details/Details";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path='/noticias/:id' element={<Details />} /> 
        </Routes>
        <Publicidad />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
