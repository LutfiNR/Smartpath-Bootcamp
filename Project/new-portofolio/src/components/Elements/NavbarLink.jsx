// src/components/CustomLink.jsx
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"

const NavbarLink = ({ to, children, className, onclick, ...props }) => {
  return (
    // Apply Framer Motion animation on hover translate -x and -y
    <motion.div
      className="flex items-center justify-center"
      whileHover={{ x: -4, y: -4 }}
      whileTap={{ scale: 0.95 }}
      onClick={onclick}
      {...props}
    >
      <Link to={to} className={`bg-primary text-secondary hover:shadow-primary-sm active:shadow-primary-sm focus:shadow-primary-sm  px-3 py-2 ${className}`} >{children}</Link>
    </motion.div>
  );
};

NavbarLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onclick: PropTypes.func,
};

export default NavbarLink;
