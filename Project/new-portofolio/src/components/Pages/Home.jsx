import { motion } from 'framer-motion';
import myPhoto from '../../assets/my-photo.png';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8 h-screen">
      <motion.section
        className="flex flex-col md:flex-row items-center justify-between"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="bg-primary text-secondary inline-block text-4xl md:text-6xl font-bold mb-8 py-4 px-8">
            Hey there, I&apos;m Upik
          </h1>
          <p className="bg-transparent outline-dashed inline-block mb-6 shadow-primary-lg py-2 px-4 text-xl md:text-2xl text-primary">
            Frontend Web Developer
          </p>
          <p className="text-md md:text-xl text-primary">
            I create beautiful and functional web experiences with modern technologies. Let&apos;s build something amazing together!
          </p>
        </motion.div>
        <motion.div
          className="flex justify-center items-center md:w-1/2 md:mt-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <img
            src={myPhoto}
            alt="Upik"
            className="h-auto"
          />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Home;
