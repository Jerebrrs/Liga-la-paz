// Layout.js
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/Footer";
import Publicidad from "./components/publicidad/Publicidad";

function Layout( children ) {
  return (
    <div>
      <Navbar />
      {children}
      <Publicidad />
      <Footer />
    </div>
  );
}

export default Layout;
