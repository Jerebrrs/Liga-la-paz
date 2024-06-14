
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateLayout = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("token");

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <div>{children}</div>;
};

PrivateLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateLayout;
