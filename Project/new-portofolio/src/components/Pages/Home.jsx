import { motion } from "framer-motion";
import myPhoto from "../../assets/my-photo.png";
import Headline from "../Elements/Headline";
import Subheadline from "../Elements/Subheadline";
import Content from "../Elements/Content";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8 h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="flex flex-col justify-center">
          <div>
            <Headline
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: "spring" }}
            >
              Hey there, I&apos;m Upik
            </Headline>
          </div>
          <div>
            <Subheadline
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: "spring", delay: 0.2 }}
            >
              Frontend Web Developer
            </Subheadline>
          </div>
          <div>
            <Content
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: "spring", delay: 0.4 }}
            >
              I create beautiful and functional web experiences with modern
              technologies. Let&apos;s build something amazing together!
            </Content>
          </div>
        </div>
        <motion.div
          className="flex justify-center items-center md:mt-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <img src={myPhoto} alt="Upik" className="h-auto" />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
