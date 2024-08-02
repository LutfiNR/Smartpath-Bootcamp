import EducationsItem from "../Elements/EduactionsItem";
import Headline from "../Elements/Headline";

const Educations = () => {
  const educations = [
    {
      year: "2019 - 2022",
      title: "Computer and Network Engineering",
      institution: "State Vocational High School 1 Gombong",
    },
    {
      year: "2022 - Now",
      title: "Information Technology Education",
      institution: "Lampung University",
    },
  ];
  const trainings = [
    {
      year: "2023",
      title: "Cisco CCNA Bootcamp",
      material: [
        "Network Fundamentals",
        "Switching",
        "Routing",
        "VLAN",
        "STP",
        "Network Management",
        "NAT",
        "FHRP",
        "ACL",
        "Etherchannel",
        "Port Security",
      ],
      institution: "ID-Networkers",
    },
    {
      year: "2023",
      title: "Android Developer(Kotlin) Bootcamp",
      material: [
        "Android Studio",
        "Layout Design",
        "Intents",
        "Activities",
        "RecyclerView",
        "API Requests",
        "MVVM Pattern",
        "Error Handling",
        "Local Databases",
      ],
      institution: "ID-Networkers",
    },
    {
      year: "2023",
      title: "Web Developer Bootcamp",
      material: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "Creating a Portfolio Website",
      ],
      institution: "ID-Networkers",
    },
    {
      year: "2023",
      title: "Junior Web Developer",
      material: [
        "Developing intuitive and responsive UI",
        "Dynamic and interactive programming commands",
        "Organizing functions and files for maintainability",
        "Writing code according to best practices",
        "Using structured programming techniques for clarity",
        "Leveraging pre-existing libraries and components",
      ],
      institution: "Digitalent Kominfo",
    },
    {
      year: "2024",
      title: "Fullstack Web Developer",
      material: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "ReactJS",
        "ExpressJS",
        "NodeJS",
        "Creating Portfolio Websites",
      ],
      institution: "Smartpath",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 h-auto text-primary">
      <div className="flex justify-center">
        <Headline
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-center inline-block"
        >
          Educations
        </Headline>
      </div>
      <div className="relative flex justify-center">
        <div className=" md:w-2/3">
          {educations.map((item, index) => (
            <EducationsItem
              key={index}
              year={item.year}
              title={item.title}
              institution={item.institution}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <Headline
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-center inline-block"
        >
          Training
        </Headline>
      </div>
      <div className="relative flex md:justify-center">
        <div className=" md:w-2/3">
          {trainings.map((item, index) => (
            <EducationsItem
              key={index}
              year={item.year}
              title={item.title}
              institution={item.institution}
              material={item.material}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Educations;
