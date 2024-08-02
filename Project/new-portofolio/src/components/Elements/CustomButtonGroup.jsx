import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const CustomButtonGroup = ({ next, previous, ...rest }) => {
  const { carouselState: { currentSlide} = {} } = rest;

  return (
    <div className="w-64 custom-button-group flex justify-between items-center mt-8">
      <motion.div
      className="flex items-center justify-center bg-primary text-secondary px-8 py-2 hover:shadow-primary-sm"
      whileHover={{ x: -4, y: -4 }}
      whileTap={{ scale: 0.95 }}
      onClick={previous}
    >
        Prev
    </motion.div>
      <div className="text-center">
        {currentSlide -1}
      </div>
      <motion.div
      className="flex items-center justify-center bg-primary text-secondary px-8 py-2 hover:shadow-primary-sm"
      whileHover={{ x: -4, y: -4 }}
      whileTap={{ scale: 0.95 }}
      onClick={next}
    >
        Next
    </motion.div>
    </div>
  );
};

CustomButtonGroup.propTypes = {
  next: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
  carouselState: PropTypes.shape({
    currentSlide: PropTypes.number,
    totalItems: PropTypes.number,
    slidesToShow: PropTypes.number,
  }),
};

export default CustomButtonGroup;
