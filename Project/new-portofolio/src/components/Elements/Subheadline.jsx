import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Subheadline = ({ children, initial, animate, transition, ...props }) => {
  return (
    <motion.div
      className="bg-transparent outline-dashed inline-block mb-6 shadow-primary-lg py-1 px-4 text-xl md:text-2xl text-primary"
      initial={initial}
      animate={animate}
      transition={transition}
      {...props}
    >
      {children}
    </motion.div>
  );
};

Subheadline.propTypes = {
  children: PropTypes.node.isRequired,
  initial: PropTypes.object,
  animate: PropTypes.object,
  transition: PropTypes.object,
};

export default Subheadline;
