import Headline from "../Elements/Headline";
import Subheadline from "../Elements/Subheadline";
import Content from "../Elements/Content";

const About = () => {
  return (
    <div className="container mx-auto p-4 h-min text-primary md:overflow-hidden md:h-screen md:py-12">
      <div className="flex justify-center">
        <Headline
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-center inline-block"
        >
          About Me
        </Headline>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
        <div className="flex flex-col items-center">
          <div>
            <Subheadline
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: "spring", delay: 0.2 }}
            >
              Biography
            </Subheadline>
          </div>
          <div>
            <Content
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: "spring", delay: 0.4 }}
            >
              My name is Lutfi Nur Rohman, a passionate Junior Web Developer
              with a background in Information Technology. I have experience in
              both front-end and back-end web development, proficient in
              languages such as HTML, CSS, and JavaScript. I am committed to
              continuous learning and growth in every project I undertake,
              aiming to create innovative and efficient web solutions.
              Currently, I am working at a technology startup where I contribute
              to building and maintaining responsive and user-friendly websites.
            </Content>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div>
            <Subheadline
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: "spring", delay: 0.6 }}
            >
              Personal Interests
            </Subheadline>
          </div>
          <div>
            <Content
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: "spring", delay: 0.8 }}
            >
              I love exploring new technologies, learning about different
              programming languages, and contributing to open-source projects. I
              also enjoy playing basketball and watching sports. I am always
              looking for opportunities to learn and grow in my field.
            </Content>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
