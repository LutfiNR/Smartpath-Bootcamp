import { useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from "prop-types";
import { useInView } from 'react-intersection-observer';

const EducationsItem = ({ year, title, institution, isEven, material }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleToggle = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : isEven ? -100 : 100 }}
      transition={{ duration: 1, type: "spring" }}
      className={`flex flex-col items-center ${isEven ? 'md:items-start' : 'md:items-end'}`}
    >
      <div className={`bg-transparent text-primary p-4 w-full md:w-1/2 ${isEven ? 'md:ml-auto' : 'md:flex md:flex-col md:items-end md:mr-auto'}`}>
        <h2 className="outline-dashed inline-block px-2 text-xl font-bold mb-2">{year}</h2>
        <h3 className={`text-xl font-semibold ${isEven ? 'md:text-left' : 'md:text-end'}`}>{title}</h3>
        <p className="text-md">{institution}</p>
        {material && (
          <>
            <button onClick={handleToggle} className="text-sm underline">
              {isAccordionOpen ? 'Hide Materials' : 'Show Materials'}
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isAccordionOpen ? 'max-h-screen' : 'max-h-0'}`}>
              <ul className={`text-sm ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                {material.map((item, index) => (
                  <li key={index} className='list-item opacity-70'>
                    <span className='hidden md:inline'>{isEven ? `# ${item}` : `${item} #`}</span>
                    <span className='md:hidden'>{`# ${item}`}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

EducationsItem.propTypes = {
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
  isEven: PropTypes.bool.isRequired,
  material: PropTypes.array,
}

export default EducationsItem;
