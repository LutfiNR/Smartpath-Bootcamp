import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="container mx-auto p-4 h-min text-primary md:overflow-hidden md:h-screen md:py-12">
      <motion.div 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
      <h1 className="bg-primary text-secondary text-center text-4xl font-bold mb-8 p-2">
        About Me
      </h1>
      </motion.div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="bg-transparent outline-dashed inline-block py-1 px-2 shadow-primary-lg text-2xl font-semibold mb-4">
            Biography
          </h2>
          <p className="text-lg text-justify">
            My name is Lutfi Nur Rohman, a passionate Junior Web Developer with
            a background in Information Technology. I have experience in both
            front-end and back-end web development, proficient in languages such
            as HTML, CSS, and JavaScript. I am committed to continuous learning
            and growth in every project I undertake, aiming to create innovative
            and efficient web solutions. Currently, I am working at a technology
            startup where I contribute to building and maintaining responsive
            and user-friendly websites.
          </p>
        </motion.div>
        <motion.div
          className="mb-8 flex flex-col items-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h2 className="bg-transparent outline-dashed inline-block py-1 px-2 shadow-primary-lg text-2xl font-semibold mb-4">
            Personal Interests
          </h2>
          <p className="text-lg text-justify">
            Outside of work, I have diverse personal interests that enrich my
            life. I also have a passion for staying active through activities
            like jogging and cycling, which help maintain my health and fitness.
            These interests not only provide balance in my life but also often
            offer fresh insights that benefit my work as a web developer.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
