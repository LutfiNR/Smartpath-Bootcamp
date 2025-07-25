import Content from "../Elements/Content";
import Headline from "../Elements/Headline";
import Subheadline from "../Elements/Subheadline";

const Experiences = () => {
  return (
    <div className="container mx-auto p-4 h-min text-primary md:overflow-hidden md:h-screen md:py-12">
      <div className="flex justify-center">
        <Headline
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-center inline-block"
        >
          Experiences
        </Headline>
      </div>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
        <div>
          <div className="flex justify-center">
            <Subheadline
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring", delay: 0.2 }}
            >
              Working
            </Subheadline>
          </div>
          <div>
            <Content
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring", delay: 0.4 }}
            >
              From 2023 to 2024, I interned at <b className="bg-primary text-secondary">Mentor Belajarku as a Teaching Mentor</b>, where I was responsible for developing educational materials as well as creating and managing engaging social media content. In 2025, I continued my internship experience at <b className="bg-primary text-secondary">SMA YP Unila Bandar Lampung</b> with a focus on technical development, where I successfully built a <b className="bg-primary text-secondary">website for the school's inventory system.</b>
            </Content>
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <Subheadline
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring", delay: 0.6 }}
            >
              Achievment
            </Subheadline>
          </div>
          <div>
            <Content
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring", delay: 0.8 }}
            >
              In 2022, <b className="bg-primary text-secondary">I achieved 1st Place</b> in the District Level ITNSA LKS Competition organized by MKKS Kabupaten Kebumen.
            </Content>
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <Subheadline
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring", delay: 1 }}
            >
              Organization
            </Subheadline>
          </div>
          <div>
            <Content
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring", delay: 1.2 }}
            >
              In 2023, I actively participated in the Unila Student Consumer Cooperative and joined Formatif FKIP Unila, working on academic and extracurricular projects. In 2024, <b className="bg-primary text-secondary">I became the Head of The Spiritual Division</b> for Formatif FKIP Unila, leading spiritual and community-building activities.
            </Content>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
