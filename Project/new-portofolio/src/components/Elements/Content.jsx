import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Content = ({ children, initial, animate, transition, ...props }) => {
  return (
    <motion.div
      className="text-md md:text-xl text-primary text-justify"
      initial={initial}
      animate={animate}
      transition={transition}
      {...props}
    >
      {children}
    </motion.div>
  );
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
  initial: PropTypes.object,
  animate: PropTypes.object,
  transition: PropTypes.object,
};

export default Content;
