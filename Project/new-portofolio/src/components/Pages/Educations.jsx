import EducationsItem from '../Elements/EduactionsItem';
import Headline from '../Elements/Headline';

const Educations = () => {
  const timelineData = [
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
    {
      year: "2023",
      title: "Web Developer Bootcamp",
      institution: "ID-Networkers",
    },
    {
      year: "2023",
      title: "Junior Web Developer",
      institution: "Digitalent Kominfo",
    },
    {
      year: "2024",
      title: "Fullstack Web Developer",
      institution: "Smartpath",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 h-auto text-primary">
      <div className='flex justify-center'>
      <Headline
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-center inline-block"
        >
          Educations and Training
        </Headline>
      </div>
      <div className="relative flex justify-center">
        <div className="space-y-8 md:w-2/3">
          {timelineData.map((item, index) => (
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
    </div>
  );
};

export default Educations;
