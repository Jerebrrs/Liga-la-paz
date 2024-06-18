import PingBackend from "./Pingbackend";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/navbar";
import Publicidad from "./components/publicidad/Publicidad";
import PropTypes from "prop-types";
const PublicLayout = ({ children }) => {
  return (
    <div>
      <PingBackend/>
      <Navbar />
      {children}
      <Publicidad />
      <Footer />
    </div>
  );
};
PublicLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PublicLayout;
