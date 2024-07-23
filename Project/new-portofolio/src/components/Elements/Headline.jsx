import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Headline = ({
  className,
  children,
  initial,
  animate,
  transition,
  ...props
}) => {
  return (
    <motion.div
      className={`bg-primary text-secondary text-3xl md:text-5xl font-bold mb-8 py-2 px-6 ${className}`}
      initial={initial}
      animate={animate}
      transition={transition}
      {...props}
    >
      {children}
    </motion.div>
  );
};

Headline.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  initial: PropTypes.object,
  animate: PropTypes.object,
  transition: PropTypes.object,
};

export default Headline;
