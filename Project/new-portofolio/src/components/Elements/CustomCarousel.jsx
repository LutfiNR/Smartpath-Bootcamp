import { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const CustomCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <motion.div 
    initial={{ opacity: 0, y: -200 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, type: "spring" , delay:0.4}}
     className='w-full md:w-2/3'>
      <div className='overflow-hidden outline-dashed text-primary shadow-primary-lg relative'>
        <div
          className='flex transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {items.map((item, index) => (
            <div
              className='w-full flex-shrink-0'
              key={index}>
              <img
                src={item.image}
                alt={item.title}
                className='w-full h-full object-cover'
              />
              <div className='absolute bottom-0 w-full h-1/3 bg-slate-950 opacity-75' />
              <div className='absolute bottom-0 w-full h-1/3 text-secondary px-4 py-2 md:px-8 md:py-4 flex flex-col md:gap-2'>
                <h3 className='md:text-2xl font-bold'>{item.title}</h3>
                <p className='hidden md:block'>{item.description}</p>
                <a
                  href={item.link}
                  className='underline'>
                  Visit Site
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex gap-6 justify-center mt-8'>
        <motion.div
          className='flex items-center justify-center bg-primary hover:shadow-primary-sm p-4 py-2  text-secondary'
          whileHover={{ x: -4, y: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePrev}>
          Prev
        </motion.div>
        <motion.div
          className='flex items-center justify-center bg-primary hover:shadow-primary-sm px-4 py-2 text-secondary'
          whileHover={{ x: -4, y: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNext}>
          Next
        </motion.div>
      </div>
    </motion.div>
  );
};

CustomCarousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CustomCarousel;
