import CustomCarousel from '../Elements/CustomCarousel';
import Headline from '../Elements/Headline';


const projects = [
  {
    title: 'Laboratory Booking System',
    description:
      'An efficient system for managing laboratory bookings, allowing users to schedule and track their appointments seamlessly.',
    image: '/assets/labooking.png',
    link: 'https://labooking.vercel.app/',
  },
  {
    title: 'Sispras - School inventory management system',
    description:
      'An efficient system for managing school inventory, allowing users to track stock levels, orders, and sales seamlessly.',
    image: '/assets/Sispras.png',
    link: 'https://github.com/LutfiNR/sispras',
  },
  {
    title: 'CritCAT - Computer Adaptive Test for Critical Thinking',
    description:
      'CRIT CAT is an innovative Computerized Adaptive Testing (CAT) platform specifically designed to measure and help develop your critical thinking skills.',
    image: '/assets/crit-cat.png',
    link: 'https://crit-cat.vercel.app/',
  },
  {
    title: 'Operasi Konoha - Hacking Simulation Game',
    description:
      'Operasi Konoha is an engaging hacking simulation game that challenges players to solve puzzles and complete missions using their coding skills.',
    image: '/assets/operasi-konoha.png',
    link: 'https://operasi-konoha.vercel.app/',
  },
  {
    title: 'hARi - Hardware Insights',
    description:
      'Learning App for learning computer hardware made with unity, designed to provide users with an interactive and engaging way to understand computer hardware components and their functionalities.',
    image: '/assets/Hari.jpg',
    link: 'https://drive.google.com/file/d/1EUymjW5fz1SQ_-RAczY3C_64ObZCc6SB/view?usp=sharing',
  },
  {
    title: 'Vecty Landing Page',
    description:
      'A modern and responsive landing page for Vecty, showcasing its features and services with a sleek design.',
    image: '/assets/vecty.png',
    link: 'https://lutfinr.github.io/DicodingProject/Vecty/',
  },
  {
    title: 'Calories Counter Application',
    description:
      'A handy application to help users keep track of their calorie intake and maintain a balanced diet effortlessly.',
    image: '/assets/calories-track.png',
    link: 'https://calorie-track-group2.vercel.app/',
  },
  {
    title: 'Bookshelf Application',
    description:
      'A virtual bookshelf app to organize and manage your book collection, providing easy access to your favorite reads.',
    image: '/assets/Bookshelf.png',
    link: 'https://lutfinr.github.io/DicodingProject/BookshelfApp/',
  },
  {
    title: 'To Do List Application',
    description:
      'A simple yet powerful to-do list application to help users manage their tasks and stay organized on a daily basis.',
    image: '/assets/todolist.png',
    link: 'https://lutfinr.github.io/DicodingProject/TodoApp/',
  },
  {
    title: "Hill's Collection",
    description:
      "An elegant online store for Hill's Collection, offering a wide range of fashionable items with a seamless shopping experience.",
    image: '/assets/bytesfest-1.png',
    link: '#',
  },
  {
    title: 'FITE Football Academy',
    description:
      'A comprehensive platform for FITE Football Academy, featuring information about training programs, schedules, and events.',
    image: '/assets/fite.png',
    link: '#',
  },
];

const Project = () => {
  return (
    <div className='container mx-auto p-4 h-screen md:h-auto text-primary'>
      <div className="flex justify-center">
        <Headline
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-center inline-block"
        >
          Projects
        </Headline>
      </div>
      <div className='carousel-container flex justify-center items-center flex-col'>
      <CustomCarousel items={projects} />
      </div>
    </div>
  );
};

export default Project;
