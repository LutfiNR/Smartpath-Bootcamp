import Card from "../Elements/Card";
import Headline from "../Elements/Headline";

const Skills = () => {
  const skillItem = [
    {
      name: "HTML",
      path: "/assets/Html 5.png",
    },
    {
      name: "CSS",
      path: "/assets/CSS3.png",
    },
    {
      name: "Bootstrap",
      path: "/assets/Bootstrap.png",
    },
    {
      name: "Tailwind",
      path: "/assets/Tailwind CSS.png",
    },
    {
      name: "Javascript",
      path: "/assets/JavaScript.png",
    },
    {
      name: "Node JS",
      path: "/assets/Nodejs.png",
    },
    {
      name: "Git",
      path: "/assets/Git.png",
    },
    {
      name: "Figma",
      path: "/assets/Figma.png",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 h-auto text-primary md:h-screen">
      <div className="flex justify-center">
        <Headline
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-center inline-block"
        >
          Skills
        </Headline>
      </div>
      <div className="container flex flex-wrap gap-6 md:gap-12 justify-center items-center mt-6">
        {skillItem.map((item, index) => (
            <Card key={index} srcImg={item.path} name={item.name} delay={index}/>
        ))}
      </div>
    </div>
  );
};

export default Skills;
